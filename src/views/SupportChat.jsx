import "../styles/SupportChat.css";

// eslint-disable-next-line react/prop-types
export default function SupportChat({userInfo}) {

  const statusClassName = userInfo?.status === 'Online' ? 'crm-status-is-online' : 'crm-status-is-offline'

  return (
    <>
      <div className="crm-chat-main-box">
        <div className="crm-chat-header">
          <div className="crm-chat-header-elements">
            <div className="crm-chat-contact">
              <img
                src={userInfo?.imageUrl}
                alt="chatProfile"
                className="crm-chat-contact-avatar"
              />
              <div className="crm-chat-contact-info">
                <strong> {userInfo?.name} {userInfo?.lastName} </strong>
                <span className={statusClassName}> {userInfo?.status} </span>
              </div>
            </div>
            <div className="crm-chat-options">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="crm-chat-options-button"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="crm-chat-body"></div>

        <div className="crm-chat-footer">
          <div className="crm-chat-footer-elements">
            <input
              type="text"
              name=""
              id=""
              className="crm-chat-message-input"
            />
            <button className="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.0"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
