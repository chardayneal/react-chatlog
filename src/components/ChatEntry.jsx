import { useState } from 'react';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';
import './ChatEntry.css';

const ChatEntry = ({sender, body, timeStamp, liked}) => {
  const [isLiked, setIsLiked] = useState(liked);

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}/></p>
        <button onClick={() => setIsLiked(isLiked => !isLiked)} className="like">{isLiked ? '❤️' : '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired
};

export default ChatEntry;