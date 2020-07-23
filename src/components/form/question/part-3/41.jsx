import React from 'react';
import PropTypes from 'prop-types';
import '../../styleForm.css';

function Question41({ handleChange, nextStep, prevStep }) {
  return (
    <div>
      <div className="form container-fluid pb-5">
        <div className="row-cols-12 py-4 p-lg-5 text-center my-3 mb-lg-5">
          <h1>Quel est votre statut ?</h1>
        </div>

        <div className="row">
          <button
            className="formCard col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
            type="button"
            value="Chef d’entreprise"
            onClick={(e) => {
              handleChange(e, 'question43');
            }}
          >
            <p className="my-auto">Chef d’entreprise</p>

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
            value="Profession libérale
            "
            onClick={(e) => {
              handleChange(e, 'question43');
            }}
          >
            <p className="my-auto">Profession libérale</p>
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
            value="Artisan commerçant"
            onClick={(e) => {
              handleChange(e, 'question43');
            }}
          >
            <p className="my-auto">Artisan commerçant</p>
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
            value="Agriculteur"
            onClick={(e) => {
              handleChange(e, 'question43');
            }}
          >
            <p className="my-auto">Agriculteur</p>
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
            value="Travailleur indépendant"
            onClick={(e) => {
              handleChange(e, 'question43');
            }}
          >
            <p className="my-auto">Travailleur indépendant</p>
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
            value="Auto-entrepreneur"
            onClick={(e) => {
              handleChange(e, 'question43');
            }}
          >
            <p className="my-auto">Auto-entrepreneur</p>
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
    </div>
  );
}

Question41.propTypes = {
  handleChange: PropTypes.string.isRequired,
  nextStep: PropTypes.number.isRequired,
  prevStep: PropTypes.number.isRequired,
};

export default Question41;
