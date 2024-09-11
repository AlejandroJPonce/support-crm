import { createContext, useEffect, useState } from "react";
import { db, auth } from "../database/firebase";
import { get, onValue, ref } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";

export const dataBaseContext = createContext();

export default function DatabaseProvider ({children}) {

  const [ users, setUsers ] = useState()

  const getAllNodes = async () => {
    const queryRef = ref(db, '/users');
    let users = []
    onValue(queryRef, (snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((isChild) => {
          users.push({
            id: isChild.key,
            ...isChild.val()
          })
        })
      } else {
        return
      }
    });    
    setUsers(users)
    console.log(users);
  }

  const createRoom = async () => {
    
  }

  useEffect(() => {

    getAllNodes()

  }, [])

  return (
    <dataBaseContext.Provider value={{ users }}>
      {children}
    </dataBaseContext.Provider>
  )
}