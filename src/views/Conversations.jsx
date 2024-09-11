import "../styles/Conversations.css";
import Contact from "./Contact";
import Conversation from "./Conversation";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { dataBaseContext } from "../context/databaseContext";
import UsersSelector from "../components/UsersSelector";

export default function Conversations() {
  const { users } = useContext(dataBaseContext);

  var initChatInfo = {
    imageUrl: "https://unavatar.io/microlink/microlink.io",
    lastName: "Ponce",
    name: "Alejandro",
    role: "ADMIN",
    status: "Online",
  };

  const [isActiveConversation, setIsActiveConversation] =
    useState(initChatInfo);
  const [usersList] = useState(users || []);
  const [isContactSelected, setContactSelected] = useState(false);

  const right_section_classes = isContactSelected ? "cvs-right-section" : "";
  const left_section_classes = isContactSelected
    ? "cvs-left-section cvs-left-section-limited"
    : "cvs-left-section";

  function closeConversation() {
    setContactSelected(false);
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

  function AlternativeMessageIfNotConversations () {
      return (
        <div>
          <span> No se encontraron conversaciones ! </span>
        </div>
      )
  }

  useEffect(() => {
    if (users) {
      console.log({
        message:
          "estos son los usuarios que vinieron en la consulta a la base de datos",
        usuarios: users,
      });
    }
  }, [users]);

  return (
    <>
      <div className="cvs-box">
        <div className={left_section_classes}>
          <div className="cvs-list-header">
            <span className="section-title"> Chats </span>
            <div className="cvs-list-create-conversation">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div>
            <UsersSelector />
          </div>
          <div className="cvs-list-contacts">
            {usersList != []
              ? usersList.map((element) => (
                  <Contact
                    key={element.id}
                    details={element}
                    handleSetUser={setContact}
                    handleSelectThisContact={handleSelectThisContact}
                  />
                ))
              : AlternativeMessageIfNotConversations() }
          </div>
        </div>
        {showConversations()}
      </div>
    </>
  );
}
