import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.section`
  h1 {
    color: #2a96af;
    font-size: 2em;
  }

  .form {
    background-color: #edf1f5;
  }

  .formCard {
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 70px -26px rgba(0, 0, 0, 0.54);
    -moz-box-shadow: 0px 0px 70px -26px rgba(0, 0, 0, 0.54);
    box-shadow: 0px 0px 70px -26px rgba(0, 0, 0, 0.54);
    transition: all 300ms;
    background-color: #fff;
  }

  .formCard:hover {
    transform: translate(0%, -1%);
  }

  p {
    color: #000;
    font-weight: 700;
    font-size: 1em;
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    p {
      font-size: 1em;
    }
  }
`;

function Question2() {
  return (
    <StyledForm>
      <div className="form container-fluid pb-5">
        <div className="row-cols-12 py-4 p-lg-5 text-center my-3 mb-lg-5">
          <h1>Quelle est votre situation actuelle ?</h1>
        </div>
        <div className="row">
          <div className="formCard col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between">
            <p className="col-10 col-sm-11 my-auto py-2">Propriétaire</p>
            <img
              className="col-2 col-sm-1 my-auto p-1"
              src="img/arrow.png"
              alt="fleche"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-10 col-sm-6 px-0 py-4 px-3 px-lg-5 formCard mb-5 mx-auto d-flex justify-content-between">
            <p className="col-10 col-sm-11 my-auto py-2">
              Hébergé à titre gratuit
            </p>
            <img
              className="col-2 col-sm-1 my-auto p-1"
              src="img/arrow.png"
              alt="fleche"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-10 col-sm-6 px-0 py-4 px-3 px-lg-5 formCard mb-5 mx-auto d-flex justify-content-between">
            <p className="col-10 col-sm-11 my-auto py-2">
              Bénéficiaire d&apos;un logement de fonction
            </p>
            <img
              className="col-2 col-sm-1 my-auto p-1"
              src="img/arrow.png"
              alt="fleche"
            />
          </div>
        </div>
      </div>
    </StyledForm>
  );
}

export default Question2;
