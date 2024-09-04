import SupportChat from "./SupportChat";
import Contact from "./Contact";
import "../styles/Chats.css";
import { useState } from "react";
import { Users } from "../database/users";

const clients = new Users()

const users = clients.getData()

export default function Chats() {

  var contactInformation = {
    id: 0,
    name: "empty",
    lastName: "",
    status: "Offline",
    imageUrl: "https://unavatar.io/substack/bankless",
  };
  const [userInfo, setUserInfo] = useState(contactInformation);

  function getUserData (userInformation) {
    setUserInfo(userInformation)
  }

  return (
    <>
      <div className="chats-layout">
        <div id="aside" className="list-of-contacts">
          <div className="list-of-contacts-header">
            <div className="list-of-contacts-header-title">
              <h2>Chats</h2>
            </div>
          </div>
          <div className="list">
            {users.map((element) => (
              <Contact key={element.id} details={element} handleSetUser={getUserData} />
            ))}
          </div>
        </div>
        <div id="chat" className="chat-section">
          <SupportChat userInfo={userInfo} />
        </div>
      </div>
    </>
  );
}
