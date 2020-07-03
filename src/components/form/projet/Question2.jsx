import React from 'react';
import PropTypes from 'prop-types';
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
    transform: translate(0%, -3%);
  }

  p {
    color: #000;
    font-weight: 700;
    font-size: 1em;
  }

  button {
    background-color: transparent;
    border: 0;
    border-style: none;
  }

  button:focus {
    border: 1px solid #173753;
  }
`;

function Question2({ handleChange, nextStep, prevStep }) {
  return (
    <StyledForm>
      <div className="form container-fluid pb-5">
        <div className="row-cols-12 py-4 p-lg-5 text-center my-3 mb-lg-5">
          <h1>Quelle est votre situation actuelle ?</h1>
        </div>

        <div className="row">
          <button
            className="formCard col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
            type="button"
            value="Propriétaire"
            onClick={(e) => {
              handleChange(e, 'question2');
            }}
          >
            <p className="my-auto">Propriétaire</p>

            <img
              className="col-2 col-sm-1 my-auto p-1"
              src="img/arrow.png"
              alt="fleche"
            />
          </button>
        </div>

        <div className="row">
          <button
            className="formCard col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
            type="button"
            value="Hébergé à titre gratuit"
            onClick={(e) => {
              handleChange(e, 'question2');
            }}
          >
            <p className="my-auto">Hébergé à titre gratuit</p>
            <img
              className="col-2 col-sm-1 my-auto p-1"
              src="img/arrow.png"
              alt="fleche"
            />
          </button>
        </div>

        <div className="row">
          <button
            className="formCard col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
            type="button"
            value=" Bénéficiaire d'un logement de fonction"
            onClick={(e) => {
              handleChange(e, 'question2');
            }}
          >
            <p className="my-auto">
              Bénéficiaire d&apos;un logement de fonction
            </p>
            <img
              className="col-2 col-sm-1 my-auto p-1"
              src="img/arrow.png"
              alt="fleche"
            />
          </button>
        </div>
      </div>
      <div>
        <button
          type="button"
          onClick={(e) => {
            prevStep(e);
          }}
        >
          PREV
        </button>
        <button
          type="button"
          onClick={(e) => {
            nextStep(e);
          }}
        >
          NEXT
        </button>
      </div>
    </StyledForm>
  );
}

Question2.propTypes = {
  handleChange: PropTypes.string.isRequired,
  nextStep: PropTypes.number.isRequired,
  prevStep: PropTypes.number.isRequired,
};

export default Question2;
