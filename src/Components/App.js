import React from 'react';
import './App.css'
import Dice from './Dice/Dice';
import Player1 from './Player1/Player1';
import Player2 from './Player2/Player2';

function App() {
  return (
    <div className="App">

      <Dice />

      <Player1 />

      <Player2 />

    </div>
  );
}

export default App;
