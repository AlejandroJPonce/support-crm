import "../styles/Conversations.css";
import Contact from './Contact'
import Conversation from "./Conversation";
import { useState } from "react";

export default function Conversations() {
  let initUserList = [
    {
      id: 1,
      name: "Alejandro",
      lastName: "Ponce",
      status: "Online",
      imageUrl: "https://unavatar.io/microlink/microlink.io",
      isSelected: false
    },
    {
      id: 2,
      name: "Alejandro",
      lastName: "Ponce",
      status: "Online",
      imageUrl: "https://unavatar.io/microlink/microlink.io",
      isSelected: false
    },
    {
      id: 3,
      name: "Alejandro",
      lastName: "Ponce",
      status: "Online",
      imageUrl: "https://unavatar.io/microlink/microlink.io",
      isSelected: false
    },
    {
      id: 4,
      name: "Alejandro",
      lastName: "Ponce",
      status: "Online",
      imageUrl: "https://unavatar.io/microlink/microlink.io",
      isSelected: false
    },
    {
      id: 5,
      name: "Alejandro",
      lastName: "Ponce",
      status: "Online",
      imageUrl: "https://unavatar.io/microlink/microlink.io",
      isSelected: false
    },
    {
      id: 6,
      name: "Alejandro",
      lastName: "Ponce",
      status: "Online",
      imageUrl: "https://unavatar.io/microlink/microlink.io",
      isSelected: false
    },
  ];

  var initChatInfo = {
    imageUrl: "https://unavatar.io/microlink/microlink.io",
    lastName: "Ponce",
    name: "Alejandro",
    role: "ADMIN",
    status: "Online",
  };

  const [isActiveConversation, setIsActiveConversation] = useState(initChatInfo);
  const [usersList] = useState(initUserList);
  const [isContactSelected, setContactSelected] = useState(false);

  const right_section_classes = isContactSelected ? "cvs-right-section" : "";
  const left_section_classes = isContactSelected
    ? "cvs-left-section cvs-left-section-limited"
    : "cvs-left-section";

  function closeConversation () {
    setContactSelected(false)
  }

  function showConversations() {
    if (isContactSelected) {
      return (
        <div className={right_section_classes}>
          <Conversation handleCloseConversation={closeConversation} />
        </div>
      );
    }
  }

  function handleSelectThisContact() {
    setContactSelected(!isContactSelected);
    console.log(isContactSelected);
  }

  function setContact(userInformation) {
    setIsActiveConversation(userInformation);
  }

  return (
    <>
      <div className="cvs-box">
        <div className={left_section_classes}>
          <div className="cvs-list-header">
            <strong> Chats </strong>
          </div>
          <div className="cvs-list-contacts">
            {usersList.map((element) => (
              <Contact
                key={element.id}
                details={element}
                handleSetUser={setContact}
                handleSelectThisContact={handleSelectThisContact}
              />
            ))}
          </div>
        </div>
        {showConversations()}
      </div>
    </>
  );
}
