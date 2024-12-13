import { useState } from 'react';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';
import './App.css';

const App = () => {
  const [chatEntries, setChatEntries] = useState(messages);

  const updateChatEntryLike = (chatId) => {
    setChatEntries(chatEntries => chatEntries.map(entry => {
      if (entry.id === chatId) {
        return {...entry, liked: !entry.liked};
      } else {
        return entry;
      }
    }));
  };

  const numOfHearts = chatEntries.filter(entry => entry.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Chat with Vladamir and Estragon</h1>
        <section>
          <h2 className='widget'>{numOfHearts} ❤️s </h2>
        </section>
      </header>
      <main>
        <ChatLog
          entries={chatEntries}
          onLikedToggle={updateChatEntryLike}
        />
      </main>
    </div>
  );
};

export default App;
