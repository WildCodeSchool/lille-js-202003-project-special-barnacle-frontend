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
          <div className="col-2 col-sm-4 mt-3 d-lg-none">
            <Burger open={open} setOpen={setOpen} />
          </div>
          <Menu open={open} setOpen={setOpen} />
          <Link to="/" className="col-7 col-sm-5 col-lg-3 col-xl-3">
            <img
              className="logo-box mt-2"
              src="./img/logoNegodi.png"
              alt="logo Negodi"
            />
          </Link>
          <nav className="d-none d-lg-block col-lg-8 my-auto text-center">
            <NavLink className="mx-2 mx-xl-3  navLink" to="/about">
              Découvrez Negodi
            </NavLink>
            <NavLink className="mx-2 mx-xl-3" to="/offer">
              Nos offres
            </NavLink>
            <NavLink className="mx-2 mx-xl-3" to="/project">
              Démarrez votre projet
            </NavLink>
            <NavLink className="mx-2 mx-xl-3" to="/contact">
              Contact
            </NavLink>
            <NavLink className="mx-2 mx-xl-3" to="/user">
              Espace Client
            </NavLink>
          </nav>
          <div className="offset-1 offset-lg-0" />
          <Link href="/" className="col-2 col-sm-2 col-lg-1 mt-2">
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
