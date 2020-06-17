import React from 'react';
import { Link } from 'react-router-dom';

const DecouvrezNegodi = () => {
  return (
    <div className="container-fluid">
      <h4 className="text-center list-group-item listBackground col-lg-6">
        Découvrez Negodi
      </h4>
      <ul>
        <li className="text-center list-group-item listBackground col-lg-6">
          <Link to="/about"> Nos offres</Link>
        </li>
        <li className="text-center list-group-item  listBackground col-lg-6">
          <Link to="/about"> Démarrer mon projet</Link>
        </li>
        <li className="text-center list-group-item listBackground col-lg-6">
          <Link to="/about"> Espace client</Link>
        </li>
      </ul>
    </div>
  );
};

export default DecouvrezNegodi;
