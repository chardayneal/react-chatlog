import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = ({ entries, buttonClickHandler }) => {
  let chatEntries = [];
  for (let i = 1; i <= entries.length; i++) {
    const entry = entries.find(element => element.id === i);
    const { sender, body, timeStamp } = entry;

    // eslint-disable-next-line max-len
    const chatEntry = <ChatEntry sender={sender} body={body} timeStamp={timeStamp} buttonClickHandler={buttonClickHandler}/>;

    chatEntries.push(chatEntry);
  }

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