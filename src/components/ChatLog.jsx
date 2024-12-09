import ChatEntry from "./ChatEntry";

const ChatLog = ({ entries }) => {
    let chat_entries = [];

    for (let i = 1; i <= entries.length; i++) {
        const entry = entries.find(element => element.id === i);

        const chat_entry = <ChatEntry sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp} />;

        chat_entries.push(chat_entry);
    }

    return (
        <section className="chat-log">
            {chat_entries}
        </section>
    );
};

export default ChatLog;