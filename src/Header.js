import React from 'react';
import {Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import Button from '@mui/material/Button';

function Header({ toggleMenu }) {
  const { theme,toggleTheme } = useTheme();

  const changeTheme = (newTheme) => {
    const body = document.querySelector('body');
    if (newTheme === 'светлая') {
        body.classList.remove('темная');
        body.classList.add('светлая');
    } else {
        body.classList.remove('светлая');
        body.classList.add('темная');
    }
  };

  return (
    <header className="Header">
      <div className="horizontalNav">
        <button className="menuButton" onClick={toggleMenu}>Меню</button>
        <nav>
          <ul className="horizontalList">
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/about">О себе</Link></li>
          </ul>
        </nav>
      </div>
      <h1>ENJOY ENGLISH</h1>
      <div className="theme-container">
        <Button className="theme-toggle" onClick={() => {
            toggleTheme();
            changeTheme(theme === 'светлая' ? 'темная' : 'светлая');
            }}>изменить на {theme === 'светлая' ? 'темную' : 'светлую'} тему</Button>
      </div>
    </header>
  );
}

export default Header;