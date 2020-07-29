import React from 'react';
import { Link } from 'react-router-dom';

const DecouvrezNegodi = () => {
  return (
    <div className="container text-center">
      <h4 className="list-group-item listBackground ">Découvrez Negodi</h4>
      <ul>
        <li className="list-group-item listBackground ">
          <Link to="offer">Nos offres</Link>
        </li>
        <li className=" list-group-item  listBackground ">
          <Link to="/form"> Démarrer mon projet</Link>
        </li>
        <li className=" list-group-item listBackground ">
          <Link to="/user">Espace client</Link>
        </li>
      </ul>
    </div>
  );
};

export default DecouvrezNegodi;
