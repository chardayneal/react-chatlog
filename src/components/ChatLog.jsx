import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = ({ entries }) => {
  // placed outside of return for readability
  const chatEntries = entries.map((entry) => {
    return <ChatEntry
      key={entry.id}
      sender={entry.sender}
      body={entry.body}
      timeStamp={entry.timeStamp}
    />;
  });

  return (
    <section className="chat-log">
      {chatEntries}
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired
};

export default ChatLog;