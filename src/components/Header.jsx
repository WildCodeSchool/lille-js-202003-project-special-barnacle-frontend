import React from 'react';
import './styles/header.css';

const Header = () => {
  return (
    <div className="header">
      <a href="https://www.negodi.fr/">
        <img src="./img/logoNegodi.png" alt="logo Negodi" />
      </a>
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
