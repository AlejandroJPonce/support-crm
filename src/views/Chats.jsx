import SupportChat from "./SupportChat";
import ListOfChats from "./ListOfChats";
import "../styles/Chats.css";

export default function Chats({ listOfContacts, children }) {
  return (
    <>
      <div className="chats-layout">
        <div id="aside" className="list-of-contacts">
          <div className="list-of-contacts-title">
            <strong>Chats</strong>
          </div>
          <div className="list">
            <ListOfChats />
            <ListOfChats />
            <ListOfChats />
            <ListOfChats />
            <ListOfChats />
          </div>
        </div>
        <div id="chat" className="chat-section">
          <SupportChat />
        </div>
      </div>
    </>
  );
}
