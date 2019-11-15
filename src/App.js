import React from 'react';

import './App.css';
import Greeting from './components/greeting';
import ImageAlbum from './components/imageAlbum';
import Counter from './components/counter';
import gambar from './assets/logos/holi.jpeg';



function App() {
  return (
    <div className="App">
      <Greeting name = 'iqbal'/>
      <ImageAlbum imageSrc = {gambar} />
     <div className = "counter">
       <Counter/>
     </div>
    </div>
  );
}

export default App;
