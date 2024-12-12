import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';
import './ChatEntry.css';

const ChatEntry = ({id, sender, body, timeStamp, liked, handleLikeToggle}) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp}/>
        </p>
        <button
          className="like"
          onClick={() => handleLikeToggle(id)}
        >{liked ? '❤️' : '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  handleLikeToggle: PropTypes.func.isRequired,
};

export default ChatEntry;