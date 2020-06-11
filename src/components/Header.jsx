import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import Burger from './BurgerMenu';
import Menu from './Menu';

const StyledHeader = styled.header`
  background-color: #ffffff;
  padding-bottom: 10px;

  .login {
    display: ${({ open }) => (open ? 'none' : 'block')};
  }
  .logo-box {
    display: ${({ open }) => (open ? 'none' : 'block')};
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledHeader open={open}>
      <div className="container-fluid px-0">
        <div className="row mx-auto ">
          <div className="col-2 mt-3 ">
            <Burger open={open} setOpen={setOpen} />
          </div>
          <Menu open={open} setOpen={setOpen} />
          <Link to="/" className="col-7 col-lg-1">
            <img
              className="logo-box mt-2"
              src="./img/logoNegodi.png"
              alt="logo Negodi"
            />
          </Link>
          <div className=" offset-lg-3" />
          <nav className="d-none d-lg-block col-lg-6  my-auto">
            <NavLink className="mx-3  navLink" to="/about">
              Découvrez Negodi
            </NavLink>
            <NavLink className="mx-3" to="/offer">
              Nos offres
            </NavLink>
            <NavLink className="mx-3" to="/project">
              Démarrez votre projet
            </NavLink>
            <NavLink className="mx-3" to="/contact">
              Contact
            </NavLink>
            <NavLink className="mx-3" to="/user">
              Espace Client
            </NavLink>
          </nav>
          <div className="offset-1 offset-lg-1" />
          <Link href="/" className="col-2 mt-2">
            <img
              className="login"
              src="./img/user.png"
              width="40px"
              alt="connexion"
            />
          </Link>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
