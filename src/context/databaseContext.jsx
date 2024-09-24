import { createContext, useCallback, useEffect, useState } from "react";
import { db, auth } from "../database/firebase";
import { get, set, onValue, ref, push, child } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { v4 as uuidv4 } from "uuid";

export const dataBaseContext = createContext();

export default function DatabaseProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [userRooms, setUserRooms] = useState([]);
  const [roomsInfo, setRoomsInfo] = useState([]);
  const [activeChats, setActiveChats] = useState([]);
  const [temporalRooms, setTemporalRooms] = useState();

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

  function getUserRooms(user_uid) {
    setUserRooms([]);
    const dbRef = ref(db);
    get(child(dbRef, `USER_ROOMS/${user_uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const response = snapshot.val();
          const objeto = Object.values(response);
          setUserRooms(objeto);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getParticipants() {
    var temp = [];
    userRooms.reduce((_, current) => {
      if (current === null || current === undefined) return;
      //else
      const dbRef = ref(db);
      get(child(dbRef, `ROOMS/${current}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            temp.push(snapshot.val().participants.receiver);
            setRoomsInfo([...temp]);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  }

  const haveRooms = () => {
    const dbRef = ref(db);
    var temp = [];
    roomsInfo.reduce((_, context) => {
      get(child(dbRef, `users/${context}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            temp.push(snapshot.val());
            setActiveChats(temp);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  };

  useEffect(() => {
    getAllNodes();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getUserRooms(user.uid);
      }
    });
  }, []);

  useEffect(() => {
    getParticipants();
  }, [userRooms]);

  useEffect(() => {
    haveRooms();

    if (roomsInfo) {
      console.log("User rooms: ", userRooms);
      console.log("rooms Info: ", roomsInfo);
      console.log("Active rooms: ", activeChats);
    }
  }, [roomsInfo]);

  return (
    <dataBaseContext.Provider value={{ users, createRoom, activeChats }}>
      {children}
    </dataBaseContext.Provider>
  );
}
