import SupportChat from "./SupportChat";
import Contact from "./Contact";
import "../styles/Chats.css";

const contacts = [
  {
    id: 1,
    name: 'Alejandro',
    lastName: 'Ponce',
    imageUrl: 'https://unavatar.io/microlink/microlink.io',
    status: 'Online'
  },
  {
    id: 2,
    name: 'David',
    lastName: 'Pena',
    imageUrl: 'https://unavatar.io/youtube/casey',
    status: 'Offline'
  },
  {
    id: 3,
    name: 'Jean',
    lastName: 'Ospino',
    imageUrl: 'https://unavatar.io/twitter/kikobeats',
    status: 'Offline'
  }
]

export default function Chats({ listOfContacts, children }) {

  const handleClick = (name) => {
    console.log(`hola ${name}`);
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
            {
              contacts.map(element => (
                <Contact key={element.id} details={element} />
              ))
            }
          </div>
        </div>
        <div id="chat" className="chat-section">
          <SupportChat />
        </div>
      </div>
    </>
  );
}
