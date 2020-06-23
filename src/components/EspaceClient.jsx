import React from 'react';
import LockIcon from '@material-ui/icons/Lock';
import 'bootstrap/dist/css/bootstrap.min.css';

const EspaceClient = () => {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center align-items-center">
        <LockIcon fontSize="large" className="col-2 " />
        <h1 className="col-8 text-center">ACCES A VOTRE ESPACE CLIENT</h1>
        <div className="offset-2" />
      </div>
    </div>
  );
};

export default EspaceClient;
