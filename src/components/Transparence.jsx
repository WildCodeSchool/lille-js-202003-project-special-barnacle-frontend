import React from 'react';
import styled from 'styled-components';

const Transparency = styled.section`
  .title {
    color: #2b95ad;
  }
  p {
    color: grey;
    font-size: 1rem;
    text-align: justify;
  }
`;

function Transparence() {
  return (
    <Transparency>
      <div className="container">
        <div className="row">
          <div className="text-center mx-auto mb-4">
            <img src="img/three.png" alt="3" width="50px" />
          </div>
        </div>
        <div className="row">
          <h5 className="title col-12 text-center mb-4">Transparence</h5>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p className="mx-3">
              Evitez toute ambiguïté liée aux commissions bancaires que nous
              pourrions percevoir. Nous avons décidé de scinder le métier de
              courtier en deux parties: vous faites le choix des banques, nous
              vous conseillons!
            </p>
          </div>
        </div>
      </div>
    </Transparency>
  );
}
export default Transparence;
