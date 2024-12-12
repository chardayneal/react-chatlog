import { useState } from 'react';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';
import './App.css';

const App = () => {
  const [chatEntries, setChatEntries] = useState(messages);

  const updateChatEntryLike = (id) => {
    setChatEntries(chatEntries => chatEntries.map(entry => {
      if (entry.id === id) {
        return {...entry, liked: !entry.liked};
      } else {
        return entry;
      }
    }));
  };

  const getNumOfHearts = () => {
    const likedMessages = chatEntries.filter(entry => entry.liked);
    return likedMessages.length;
  };

  const numOfHearts = getNumOfHearts();

  return (
    <div id="App">
      <header>
        <h1>Chat with Vladamir and Estragon</h1>
        <section>
          <span className='widget'>{numOfHearts} ❤️s </span>
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
