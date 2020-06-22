import { Link } from 'react-router-dom';
import React from 'react';

const DecouvrezNegodi = () => {
  return (
    <div className="container text-center">
      <h4 className="list-group-item listBackground ">Découvrez Negodi</h4>
      <ul>
        <li className="list-group-item listBackground ">
          <Link to="/about">Nos offres</Link>
        </li>
        <li className=" list-group-item  listBackground ">
          <Link to="/about"> Démarrer mon projet</Link>
        </li>
        <li className=" list-group-item listBackground ">
          <Link to="/about">Espace client</Link>
        </li>
      </ul>
    </div>
  );
};

export default DecouvrezNegodi;
