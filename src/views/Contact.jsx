import "../styles/Contact.css";

export default function Contact ({ details }) {

  function handleSaveContactInfo () {
    console.log(details);

    const toSave = {
      name: details.name,
      lastName: details.lastName,
      status: details.status,
      imageUrl: details.imageUrl
    }

    localStorage.setItem('contactSelected', JSON.stringify(toSave))
  }

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
              <span> {details.status || ''} </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
