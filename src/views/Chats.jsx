import SupportChat from "./SupportChat";
import Contact from "./Contact";
import "../styles/Chats.css";
import { useEffect, useState } from "react";
import { useRealTimeDatabase } from "../database/useRealTimeDatabase";



export default function Chats() {

  const db = useRealTimeDatabase()
  const collection = db('users')

  const [usersList, setUsersList] = useState([])
  const [userInfo, setUserInfo] = useState(contactInformation);

  var contactInformation = {
    imageUrl:"https://unavatar.io/microlink/microlink.io",
    lastName:"Ponce",
    name:"Alejandro",
    role:"ADMIN",
    status:"Online",
  };

  const getData = async () => {
    const elements = await collection.getAllNodes()
    setUsersList(elements)
    getUserData(elements[0])
  }

  function getUserData (userInformation) {
    setUserInfo(userInformation)
  }

  useEffect(() => {
    getData()
  }, []) 

  return (
    <>
      <div className="chats-layout">
        <div id="aside" className="list-of-contacts">
          <div className="list-of-contacts-header">
            <div className="list-of-contacts-header-title">
              <h2 >Chats</h2>
            </div>
          </div>
          <div className="list">
            {
              usersList.map((element) => (
                <Contact key={element.id} details={element} handleSetUser={getUserData} />
              ))
            }
          </div>
        </div>
        <div id="chat" className="chat-section">
          <SupportChat userInfo={userInfo} />
        </div>
      </div>
    </>
  );
}
