import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffff;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-120%)')};
  height: 100vh;
  width: 100vw;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  a {
    font-size: 30px;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0099b2;
    text-decoration: none;
    transition: color 0.3s linear;

    font-size: 1rem;
    text-align: center;
    width: 100vw;

    &:hover {
      color: #343078;
    }
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/user"> Espace Client </NavLink>
      <NavLink to="/offer"> Nos offres </NavLink>
      <NavLink to="/project"> Démarrez votre projet </NavLink>
      <NavLink to="/contact"> Contact </NavLink>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Menu;
