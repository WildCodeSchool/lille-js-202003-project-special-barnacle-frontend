import { Link } from 'react-router-dom';
import React from 'react';

const LogoNegodiBottom = () => {
  return (
    <div className="container-fluid">
      <Link className="row" to="/">
        <img
          className="mx-auto mx-lg-5 my-4"
          src="./img/logofooter.png"
          alt="logo Footer Negodi"
          width="150px"
        />
      </Link>
    </div>
  );
};

export default LogoNegodiBottom;
