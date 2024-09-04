import "../styles/Contact.css";
import { useState } from "react"

export default function Contact ({ details, handleSetUser }) {

  const [userInfo, _ ] = useState(details)

  function handleSaveContactInfo () {
    const toSave = {
      name: userInfo.name,
      lastName: userInfo.lastName,
      status: userInfo.status,
      imageUrl: userInfo.imageUrl
    }
    localStorage.setItem('contactSelected', JSON.stringify(toSave))
    handleSetUser(userInfo)
  }

  const statusClassName = userInfo.status === 'Online' ? 'crm-status-is-online' : 'crm-status-is-offline'

  return (
    <>
      <div className="list-of-contacts-item" onClick={handleSaveContactInfo}>
        <div className="list-of-contacts-item-header">
          <div className="list-of-contacts-item-header-1">
            <img
              src={details.imageUrl || ''}
              alt="chatProfile"
              className="list-of-contacts-item-avatar"
            />
            <div className="list-of-contacts-item-info">
              <strong> {details.name || ''} {details.lastName || ''} </strong>
              <br />
              <span className={statusClassName}> {details.status || ''} </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
