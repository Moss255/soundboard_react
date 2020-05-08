import React from 'react';
import './bootstrap/css/bootstrap.css';
import Soundboard from './soundboard';

function App() {
  window.alert('Sorry! Some of the audio files on this website may not be safe for work. Recommend using headphones!');
  return (
    <div className='App '>
      <Soundboard/>
      
    </div>
  );
  
}


export default App;