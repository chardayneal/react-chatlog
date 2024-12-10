import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = ({ entries, buttonClickHandler }) => {
  const sortedEntries = entries.sort((a,b)=> a.id < b.id);

  // placed outside of return for readability
  const chatEntries = sortedEntries.map((entry) => {
    return <ChatEntry
      key={entry.id}
      sender={entry.sender}
      body={entry.body}
      timeStamp={entry.timeStamp}
      buttonClickHandler={buttonClickHandler}
    />;
  });

  return (
    <section className="chat-log">
      {chatEntries}
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  buttonClickHandler: PropTypes.func.isRequired
};

export default ChatLog;