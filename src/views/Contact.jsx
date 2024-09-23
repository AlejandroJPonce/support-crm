import "../styles/Contact.css";
import { useState } from "react"

export default function Contact ({ details, handleSetUser, handleSelectThisContact }) {

  const [userInfo, setUserInfo] = useState(details)

  console.log(userInfo);

  function handleSaveContactInfo () {

    setUserInfo(userInfo)

    handleSetUser(userInfo)
    handleSelectThisContact()
    setUserInfo({
      ...userInfo,
      isSelected: true
    })
  }

  //custom classes with validations
  const statusClassName = userInfo.status === 'Online' ? 'crm-status-is-online' : 'crm-status-is-offline'
  const list_item_class = userInfo.isSelected ? "list-of-contacts-item is-selected-item" : "list-of-contacts-item"


  return (
    <>
      <div className={list_item_class} onClick={handleSaveContactInfo}>
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
