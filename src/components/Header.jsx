import React, { useState } from 'react';
import './styles/header.css';
import Burger from './BurgerMenu';
import Menu from './Menu';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <a className="logo-box" href="/">
        <img className="logo" src="./img/logoNegodi.png" alt="logo Negodi" />
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
      <a href="/">
        <img className="login" src="./img/user.png" alt="connexion" />
      </a>
    </div>
  );
};

export default Header;
