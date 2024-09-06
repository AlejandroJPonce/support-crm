import "../styles/Messages.css";

export default function Messages({ data }) {

  const message_position = data.uid == 1 ? 'message-box message-box-right' : 'message-box message-box-left' 
  const message_element = data.uid == 1 ? 'message-item message-item-primary' : 'message-item message-item-secondary'
  return (
    <>
      <div className={message_position}>
        <span className={message_element} >{data.el}</span>
      </div>
    </>
  );
}
