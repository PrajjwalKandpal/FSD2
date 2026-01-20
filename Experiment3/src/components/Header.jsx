import { useState } from 'react';
import '../styles/Header.css';

export default function Header() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className={`header ${theme}`}>
      <div className="container">
        <h1>Implement Routing in SPA</h1>
        <p>Experiment 3</p>
        <p>Click "Dashboard" to demonstrate Experiment2</p>
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>
      </div>
    </header>
  );
}
