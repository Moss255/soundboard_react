import React from 'react';
import logo from './logo.svg';
import './App.css';
import Play from './playButton';
import DropDown from './dropdown';

const referenceFile = require('./files.json');

var menuSelection = 'Karl';

//var soundFile = 'Karl Cough.mp3';




function updateMenuSelection(selection) {
  menuSelection = selection;
}

function App() {
  return (
    <div className='App'>
      <h1> Soundboard </h1>
      <DropDown updateMenuSelection={updateMenuSelection}/>
      <Play file={referenceFile[menuSelection][0]}/>
      <Play file={referenceFile[menuSelection][1]}/>
      <Play file={referenceFile[menuSelection][2]}/>
      <Play file={referenceFile[menuSelection][3]}/>
      <Play file={referenceFile[menuSelection][4]}/>
      <Play file={referenceFile[menuSelection][5]}/>
      <Play file={referenceFile[menuSelection][6]}/>
      <Play file={referenceFile[menuSelection][7]}/>
      <Play file={referenceFile[menuSelection][8]}/>
      <Play file={referenceFile[menuSelection][9]}/>
    </div>
  );
}

function createPlayButtons() {
  console.log(referenceFile[menuSelection]);
  var i = 0;
  var buttons = [];
  for (i = 0; i < referenceFile[menuSelection].length; i++) {
    buttons[i] = <Play file={referenceFile[menuSelection][i]}/>
  }
  return buttons;
}

export default App;