import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import DayNightSwitcher from './components/ui/day-night-switcher';

import './App.css';


const App = () => {

 const [theme, setTheme] = useState('dark');

const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('bright');      
    } else {
      setTheme('dark');
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <DayNightSwitcher 
          mode={theme} 
          themeSwitcher={toggleTheme}
        />
      </header>
    </div>
  );
}

export default App;
