import React from 'react';
import { Link } from 'react-router-dom';

const LogoNegodiBottom = () => {
  return (
    <Link className="row pt-5" to="/">
      <img
        src="./img/logofooter.png"
        alt="logo Footer Negodi"
        width="150px"
        className="logofooter mx-auto"
      />
    </Link>
  );
};

export default LogoNegodiBottom;
