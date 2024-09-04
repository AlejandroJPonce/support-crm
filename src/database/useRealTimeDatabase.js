import { db } from "./firebase";
import { onValue, ref } from "firebase/database";

export const useRealTimeDatabase = () => {
  return (collectionName) => {  
    const getAllNodes = async () => {
      const queryRef = ref(db, collectionName);
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
      return users
    }

    return {
      getAllNodes
    }
  }
}