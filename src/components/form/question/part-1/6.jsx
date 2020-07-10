import React from 'react';
import PropTypes from 'prop-types';
import '../styleForm.css';

function Question6({ handleChange, nextStep }) {
  return (
    <div className="questionImg">
      <form>
        <div className="form container-fluid pb-5">
          <div className="row-cols-12 p-5 text-center">
            <h1>Où en êtes-vous dans l’avancement du projet ?</h1>
          </div>
          <div className="row text-center">
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Je fais des simulations"
                type="image"
                alt="Je fais des simulations"
                src="img/form/question6/jeFaisDesSimulations.jpg"
                width="100%"
                onClick={(e) => {
                  handleChange(e, 'question6');
                }}
              />
              <p className="my-auto py-2">Je fais des simulations</p>
            </div>

            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="J'ai signé un compromis de vente"
                type="image"
                alt="J'ai signé un compromis de vente"
                src="img/form/question6/jaiSigneUnCompromisDeVente.jpg"
                width="100%"
                onClick={(e) => {
                  handleChange(e, 'question6');
                }}
              />
              <p className="my-auto py-2">
                J&apos;ai signé un compromis de vente
              </p>
            </div>
          </div>
          <div>
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
      </form>
    </div>
  );
}

Question6.propTypes = {
  handleChange: PropTypes.string.isRequired,
  nextStep: PropTypes.number.isRequired,
};

export default Question6;
