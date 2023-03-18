import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import './Header.scss';

const Header = () => {
  const { setTheme } = useContext(ThemeContext);
  const handleClick = e => {
    const theme = e.target.id;
    localStorage.setItem('theme', theme);
    setTheme(theme);
  };

  return (
    <header className="header">
      <div className="themes">
        <div id="blue" className="theme" onClick={handleClick}></div>
        <div id="green" className="theme" onClick={handleClick}></div>
        <div id="dark" className="theme" onClick={handleClick}></div>
        <div id="red" className="theme" onClick={handleClick}></div>
      </div>
      <h1 className="title">Tic Tac Toe</h1>
    </header>
  );
};

export default Header;
