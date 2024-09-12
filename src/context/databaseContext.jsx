import { createContext, useEffect, useState } from "react";
import { db, auth } from "../database/firebase";
import { get, set, onValue, ref, push, child } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { v4 as uuidv4 } from "uuid";

export const dataBaseContext = createContext();

export default function DatabaseProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [ chatsList, setChatsList ] = useState([])
  const [ usersChatsId, setUsersChatsId ] = useState([])

  const getAllNodes = async () => {
    let users = [];
    const queryRef = ref(db, "/users");
    onValue(queryRef, (snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((isChild) => {
          if (!isChild.id) {
            users.push({
              id: isChild.key,
              ...isChild.val(),
            });
          }
        });
      } else {
        return;
      }
    });
    setUsers(users);
  };

  const createRoom = async (sender_uid, receiver_uid) => {
    const room_id = uuidv4();
    set(ref(db, `ROOMS/${room_id}`), {
      createdAt: new Date(),
      participants: {
        sender: sender_uid,
        receiver: receiver_uid,
      },
    });

    createUsersRooms(sender_uid, receiver_uid, room_id);
  };

  const createUsersRooms = async (sender_uid, receiver_uid, room_id) => {
    if (sender_uid) {
      push(ref(db, `USER_ROOMS/${sender_uid}`), room_id);
    }

    if (receiver_uid) {
      set(ref(db, `USER_ROOMS/${receiver_uid}`), {
        room_id,
      });
    }
  };

  const getChatList = async (receiver_id) => {
    const queryRef = ref(db, `users/${receiver_id}`);
    onValue(queryRef,  (snapshot) =>  {
      setChatsList([])
      if (snapshot.exists()) {
        setChatsList(chatsList.push(snapshot.val()))
      } else {
        return;
      }
    });
  }

  const getRoomsInfo = async (room_id) => {
    const queryRef = ref(db, `ROOMS/${room_id}`);
    onValue(queryRef,  (snapshot) =>  {
      if (snapshot.exists()) {
        snapshot.forEach((isChild) => {
          getChatList(isChild.val().receiver)
        });
      } else {
        return;
      }
    });
  };

  const getUserRooms = async (user_id) => {
    const queryRef = ref(db, `/USER_ROOMS/${user_id}`);
    onValue(queryRef, (snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((isChild) => {
          getRoomsInfo(isChild.val())
        });
      }
    });
  };

  useEffect(() => {
    getAllNodes();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        getUserRooms(user.uid);
      } else {
        return;
      }
    });
  }, []);

  return (
    <dataBaseContext.Provider value={{ users, createRoom, chatsList }}>
      {children}
    </dataBaseContext.Provider>
  );
}
