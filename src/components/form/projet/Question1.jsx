import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.section`
  h1 {
    color: #2a96af;
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
    background-color: #173753;
  }

  .formCard:hover {
    transform: translate(0%, -1%);
  }

  img {
    border-radius: 10px 10px 0 0;
  }

  p {
    color: #fff;
    font-weight: 700;
  }
`;

function Question1() {
  return (
    <StyledForm>
      <div className="form container-fluid pb-5">
        <div className="row-cols-12 p-5 text-center">
          <h1>Quel est votre projet ?</h1>
        </div>
        <div className="row text-center">
          <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
            <img
              className="col-12 p-0"
              src="img/form/question1/acheterunbien.png"
              alt="acheter un bien"
            />
            <p className="my-auto py-2">Acheter un bien</p>
          </div>
          <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
            <img
              className="col-12 p-0"
              src="img/form/question1/faireconstruire.png"
              alt="faire construire"
            />
            <p className="my-auto py-2">Faire construire</p>
          </div>
          <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
            <img
              className="col-12 p-0"
              src="img/form/question1/fairedestravaux.png"
              alt="faire des travaux"
            />
            <p className="my-auto py-2">Faire des travaux</p>
          </div>
          <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
            <img
              className="col-12 p-0"
              src="img/form/question1/renegocier.png"
              alt="renegocier"
            />
            <p className="my-auto py-2">Renégocier</p>
          </div>
          <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
            <img
              className="col-12 p-0"
              src="img/form/question1/autresprojets.jpg"
              alt="autres projets"
            />
            <p className="my-auto py-2">Autres projets</p>
          </div>
        </div>
      </div>
    </StyledForm>
  );
}

export default Question1;
