import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.section`
  h1 {
    color: #2a96af;
  }

  .form {
    background-color: #edf1f5;
  }

  img {
    margin: 0 30px;
    width: 250px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 70px -26px rgba(0, 0, 0, 0.54);
    -moz-box-shadow: 0px 0px 70px -26px rgba(0, 0, 0, 0.54);
    box-shadow: 0px 0px 70px -26px rgba(0, 0, 0, 0.54);
    transition: all 300ms;
  }

  img:hover {
    transform: scale(1.05);
  }
`;

function Question1() {
  return (
    <StyledForm>
      <div className="form container-fluid pb-5">
        <div className="row-cols-12 p-5 text-center">
          <h1>Quel est votre projet ?</h1>
        </div>

        <div className="row-cols-12 p-5 text-center">
          <img
            src="img/form/question1/acheterunbien.png"
            alt="acheter un bien"
          />
          <img
            src="img/form/question1/faireconstruire.png"
            alt="acheter un bien"
          />
          <img
            src="img/form/question1/fairedestravaux.png"
            alt="acheter un bien"
          />
          <img src="img/form/question1/renegocier.png" alt="acheter un bien" />
          <img
            src="img/form/question1/autresprojets.jpg"
            alt="acheter un bien"
          />
        </div>
      </div>
    </StyledForm>
  );
}

export default Question1;
