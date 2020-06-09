import React, { useState } from 'react';
import './styles/header.css';

const Header = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="header">
      <a href="https://www.negodi.fr/">
        <img src="./img/logoNegodi.png" alt="logo Negodi" />
      </a>

      <div
        role="button"
        tabIndex={0}
        className="burger"
        open={open}
        onClick={() => setOpen(!open)}
        onKeyPress={setOpen}
      >
        <div className={open ? 'lineOpen' : 'lineClosed'} />
        <div className={open ? 'lineOpen' : 'lineClosed'} />
        <div className={open ? 'lineOpen' : 'lineClosed'} />
      </div>

      <nav>
        <ul>
          <li>
            <a href="https://www.negodi.fr/">Découvrez Negodi</a>
          </li>
          <li>
            <a href="https://www.negodi.fr/">Nos offres</a>
          </li>
          <li>
            <a href="https://www.negodi.fr/">Démarrez votre projet</a>
          </li>
          <li>
            <a href="https://www.negodi.fr/">Contact</a>
          </li>
          <li>
            <a href="https://www.negodi.fr/">ESPACE CLIENT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
