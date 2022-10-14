import React from 'react';

import './App.css';
//import './Header'
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="app">
      
      <Header />

      {/* tinder cards */}
      <TinderCards />

      {/* Swipe buttons */}
     <SwipeButtons />
    </div>

  );
}

export default App;
