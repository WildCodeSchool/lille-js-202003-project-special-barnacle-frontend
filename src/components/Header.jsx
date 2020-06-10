import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './styles/header.css';
import Burger from './BurgerMenu';
import Menu from './Menu';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />

      <Link className="logo-box" to="/">
        <img className="logo" src="./img/logoNegodi.png" alt="logo Negodi" />
      </Link>
      <nav>
        <ul>
          <NavLink className="navLink" to="/about">
            Découvrez Negodi
          </NavLink>
          <NavLink to="/offer"> Nos offres </NavLink>
          <NavLink to="/project"> Démarrez votre project </NavLink>
          <NavLink to="/contact"> Contact </NavLink>
          <NavLink to="/user"> Espace Client </NavLink>
        </ul>
      </nav>
      <Link href="/">
        <img className="login" src="./img/user.png" alt="connexion" />
      </Link>
    </div>
  );
};

export default Header;
