import SupportChat from "./SupportChat";
import Contact from "./Contact";
import "../styles/Chats.css";
import { useState } from "react";

export default function Chats() {

  const contacts = [
    {
      id: 1,
      name: "Alejandro",
      lastName: "Ponce",
      imageUrl: "https://unavatar.io/microlink/microlink.io",
      status: "Online",
    },
    {
      id: 2,
      name: "David",
      lastName: "Pena",
      imageUrl: "https://unavatar.io/youtube/casey",
      status: "Offline",
    },
    {
      id: 3,
      name: "Jean",
      lastName: "Ospino",
      imageUrl: "https://unavatar.io/twitter/kikobeats",
      status: "Online",
    },
  ];

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
            {contacts.map((element) => (
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
