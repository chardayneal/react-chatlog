import { useState } from 'react';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';
import './App.css';

const App = () => {
  const [chatEntries, setChatEntries] = useState(messages);

  const updateChatEntryLike = (id) => {
    const entries = chatEntries.map(entry => {
      if (entry.id === id) {
        return {...entry, liked: !entry.liked};
      } else {
        return entry;
      }
    });

    setChatEntries(entries);
  };

  const getNumOfHearts = (entries) => {
    const likedMessages = entries.filter(entry => entry.liked);
    return likedMessages.length;
  };


  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <section>
          <span className='widget'>{getNumOfHearts()} ❤️s </span>
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
