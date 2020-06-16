import React from 'react';
import styled from 'styled-components';
import Liberte from './Liberte';
import Efficiency from './Efficacite';
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
          <Liberte />
          <Efficiency />
          <Transparence />
        </div>
      </div>
    </Pourquoi>
  );
}
export default PourquoiNegodi;
