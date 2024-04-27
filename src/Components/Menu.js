import React from 'react';
import {Link } from 'react-router-dom';

function Menu({ menuOpen }) {
  return (
    <div className="menuContainer">
      {menuOpen && (
        <nav className="Menu">
          <ul>
            <li><Link to="/lab1">Лабораторная 1</Link></li> 
            <li><Link to="/lab2">Лабораторная 2</Link></li> 
            <li><Link to="/lab3">Лабораторная 3</Link></li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Menu;