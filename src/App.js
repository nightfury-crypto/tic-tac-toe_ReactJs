import { useState } from 'react';
import './App.css';
import Game from './components/Game.js'
import StartScreen from './components/StartScreen';

function App() {
  const [isStart, setIsStart] = useState(false)

  const checkStart = () => {
    setIsStart(true)
  }

  return (
    <div className="App">
      {isStart ? <Game  setIsStart={setIsStart}/> :<StartScreen checkStart={checkStart}/> }
      
    </div>
  );
}

export default App;
