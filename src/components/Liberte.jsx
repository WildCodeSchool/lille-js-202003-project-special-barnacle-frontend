import React from 'react';
import styled from 'styled-components';

const Liberty = styled.section`
  .number {
    background-color: #2b95ad;
    border-radius: 50%;
    color: #ffff;
  }
  .title {
    color: #2b95ad;
  }
  p {
    color: grey;
    font-size: 1rem;
    text-align: justify;
  }
`;

function Liberte() {
  return (
    <Liberty>
      <div className="container">
        <div className="row">
          <div className="number col-1 mx-auto my-3 px-0 text-center">1</div>
        </div>
        <div className="row">
          <h5 className="title col-12 text-center mb-4">Liberté</h5>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p className="mx-3">
              Priorisez vos objectifs! Vous souhaitez obtenir les meilleures
              conditions dans l’établissement que vous avez choisi? Mettez
              directement votre banque en concurrence avec les leaders du
              marché! Vous serez libre de choisir la proposition qui vous
              conviendra le mieux.
            </p>
          </div>
        </div>
      </div>
    </Liberty>
  );
}
export default Liberte;
