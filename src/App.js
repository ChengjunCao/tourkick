import React from 'react';
import './App.css';
import BandList from './components/BandList/BandList';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BandList />
    </div>
  );
}

export default App;
