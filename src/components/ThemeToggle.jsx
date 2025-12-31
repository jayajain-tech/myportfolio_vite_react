import React, {useState, useEffect} from 'react';
import themeIcon from '../assets/moon-icon.png';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect (()=>{
      document.documentElement.classList.toggle('dark', theme === 'dark');
      localStorage.setItem('theme', theme);
      }, [theme]);

  return (
          <>
       <button className="nav_theme-btn" id ="theme-toggle"
       onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
           <img src={themeIcon} className="icon-moon" />
       </button>
           </>
  );
}