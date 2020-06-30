import React from 'react';
import styled from 'styled-components';
import Efficiency from './Efficacite';
import Liberte from './Liberte';
import Transparence from './Transparence';

const Pourquoi = styled.h4`
  h4 {
    color: #2b95ad;
  }
`;

function PourquoiNegodi() {
  return (
    <Pourquoi>
      <div className="container-fluid">
        <div className="row">
          <h4 className="col-12 text-center my-5">Pourquoi Choisir Negodi ?</h4>
        </div>
        <div className="row">
          <div className="col">
            <Liberte />
          </div>
          <div className="col">
            <Efficiency />
          </div>
          <div className="col">
            <Transparence />
          </div>
        </div>
      </div>
    </Pourquoi>
  );
}
export default PourquoiNegodi;
