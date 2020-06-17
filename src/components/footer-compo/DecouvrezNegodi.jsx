import React from 'react';
import { Link } from 'react-router-dom';

const DecouvrezNegodi = () => {
  return (
    <div className="col-sm-4 mx-auto text-center">
      <h4 className="mx-auto list-group-item listBackground text-sm-left">
        Découvrez Negodi
      </h4>
      <ul>
        <li className="list-group-item listBackground text-sm-left">
          <Link to="/about"> Nos offres</Link>
        </li>
        <li className="list-group-item  listBackground text-sm-left">
          <Link to="/about"> Démarrer mon projet</Link>
        </li>
        <li className="list-group-item listBackground text-sm-left">
          <Link to="/about"> Espace client</Link>
        </li>
      </ul>
    </div>
  );
};

export default DecouvrezNegodi;
