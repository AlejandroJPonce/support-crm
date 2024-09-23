import "../styles/Conversation.css";

export default function Conversation({handleCloseConversation, activeContact}) {
  return (
    <>
      <div className="conv-box">
        {/* Header */}
        <div className="conv-header">
          <div className="conv-contact">
            <img
              className="conv-contact-image"
              src={activeContact.imageUrl}
              alt=""
            />
            <div className="conv-contact-desc">
              <strong>{activeContact.name} {activeContact.lastName}</strong>
              <span> {activeContact.status} </span>
            </div>
          </div>

          <div className="conv-options">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              onClick={handleCloseConversation}
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Messages */}
        <div className="conv-content"></div>

        {/* Footer */}
        <div className="conv-footer">
          <input className="conv-input" type="text" />
          <button className="conv-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
