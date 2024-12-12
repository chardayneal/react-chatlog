import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = ({ entries, onLikedToggle }) => {
  // placed outside of return for readability
  const chatEntries = entries.map((entry) => {
    return (
      <li key={entry.id}>
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          liked={entry.liked}
          timeStamp={entry.timeStamp}
          handleLikeToggle={onLikedToggle}
        />
      </li>
    );
  });

  return (
    <section className="chat-log">
      <ul>
        {chatEntries}
      </ul>
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  onLikedToggle: PropTypes.func.isRequired,
};

export default ChatLog;