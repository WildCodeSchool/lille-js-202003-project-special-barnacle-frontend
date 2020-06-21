import React from 'react';
import styled from 'styled-components';

const Efficiency = styled.section`
  .title {
    color: #2b95ad;
  }
  p {
    color: grey;
    font-size: 1rem;
    text-align: justify;
  }
`;

function Efficacite() {
  return (
    <Efficiency>
      <div className="container">
        <div className="row">
          <div className="text-center mx-auto mb-4">
            <img src="img/two.png" alt="2" width="50px" />
          </div>
        </div>
        <div className="row">
          <h5 className="title col-12 text-center mb-4">Efficacité</h5>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p className="mx-3">
              Remplissez une seule demande de prêt qui sera immédiatement
              présentée à l’ensemble des fournisseurs choisis. Vous pouvez
              suivre à tout moment l’avancement de votre dossier dans votre
              espace privé et sécurisé.
            </p>
          </div>
        </div>
      </div>
    </Efficiency>
  );
}
export default Efficacite;
