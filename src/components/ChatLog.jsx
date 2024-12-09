import ChatEntry from "./ChatEntry";
import './ChatLog.css';

const ChatLog = ({ entries, buttonClickHandler }) => {
    
    let chat_entries = [];
    for (let i = 1; i <= entries.length; i++) {
        const entry = entries.find(element => element.id === i);

        const chat_entry = <ChatEntry sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp} buttonClickHandler={buttonClickHandler} />;

        chat_entries.push(chat_entry);
    }

    return (
        <section className="chat-log">
            {chat_entries}
        </section>
    );
};

export default ChatLog;