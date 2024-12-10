import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';
import './ChatEntry.css';

const ChatEntry = ({sender, body, timeStamp, buttonClickHandler}) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}/></p>
        <button onClick={buttonClickHandler} className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  buttonClickHandler: PropTypes.func.isRequired
};

export default ChatEntry;