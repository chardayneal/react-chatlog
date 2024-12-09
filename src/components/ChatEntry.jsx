import TimeStamp from './TimeStamp';
import './ChatEntry.css';

const ChatEntry = ({sender, body, timeStamp, buttonClickHandler}) => {

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}></TimeStamp></p>
        <button onClick={buttonClickHandler} className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // Fill with correct proptypes
};

export default ChatEntry;