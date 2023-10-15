import React, { useState } from 'react';
import Navbar from './components/navigation';
import CenteredImageContainer from './components/CenteredImageContainer';
import './components/App.css';

function App() {
  const imageUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfiaEE4srwVVUsQohMYWsfJcEWr2L5tdQMxYUvl3BM&s';

  const [theme, setTheme] = useState('gray');

  const toggleTheme = () => {
    setTheme(theme === 'gray' ? 'black' : 'gray');
  };

  return (
    <div className={`App ${theme}-theme`}>
      <Navbar toggleTheme={toggleTheme} />
      <button onClick={toggleTheme} className="theme-button">
        Change Theme
      </button>
      <div className="container">
        <CenteredImageContainer theme={theme} imageUrl={imageUrl} />
      </div>
    </div>
  );
}

export default App;
