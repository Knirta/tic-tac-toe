import React from 'react';
import { useThemeContext } from '../../contexts/ThemeContext';
import './Header.scss';

const Header = () => {
  const { setTheme } = useThemeContext();
  const handleClick = e => {
    const theme = e.target.id;
    localStorage.setItem('theme', theme);
    setTheme(theme);
  };

  return (
    <header className="header">
      <h1 className="title">Tic Tac Toe</h1>
      <div className="themes">
        <div id="blue" className="theme" onClick={handleClick}></div>
        <div id="green" className="theme" onClick={handleClick}></div>
        <div id="dark" className="theme" onClick={handleClick}></div>
        <div id="red" className="theme" onClick={handleClick}></div>
      </div>
    </header>
  );
};

export default Header;
