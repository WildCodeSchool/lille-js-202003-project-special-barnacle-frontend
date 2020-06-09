import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './styles/header.css';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src="./img/logoNegodi.png" alt="logo Negodi" />
      </Link>
      <nav>
        <ul>
          <NavLink className="navLink" to="/about">
            Découvrez Negodi
          </NavLink>
          <NavLink to="/offer"> Nos offres </NavLink>
          <NavLink to="/projet"> Démarrez votre projet </NavLink>
          <NavLink to="/contact"> Contact </NavLink>
          <NavLink to="/user"> Espace Client </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
