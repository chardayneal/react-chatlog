import messages from './data/messages.json';
import ChatLog from './components/ChatLog';
import './App.css';

const App = () => {
  const buttonClickHandler = (event) => {
    // toggle the event target value from an empty heart to a filled heart
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={messages} buttonClickHandler={buttonClickHandler}/>
      </main>
    </div>
  );
};

export default App;
