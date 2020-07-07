import React from 'react';
import PropTypes from 'prop-types';
import './styleForm.css';

function Question1({ handleChange, nextStep }) {
  return (
    <div>
      <form className="questionImg">
        <div className="form container-fluid pb-5">
          <div className="row-cols-12 p-5 text-center">
            <h1>Quel est votre projet ?</h1>
          </div>
          <div className="row text-center">
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Acheter un bien"
                type="image"
                alt="faire construire"
                src="img/form/question1/acheterunbien.png"
                width="100%"
                onClick={(e) => {
                  handleChange(e, 'question1');
                }}
              />
              <p className="my-auto py-2">Acheter un bien</p>
            </div>

            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Faire construire"
                type="image"
                alt="faire construire"
                src="img/form/question1/faireconstruire.png"
                width="100%"
                onClick={(e) => {
                  handleChange(e, 'question1');
                }}
              />
              <p className="my-auto py-2">Faire construire</p>
            </div>
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Faire des travaux"
                type="image"
                alt="Faire des travaux"
                src="img/form/question1/fairedestravaux.png"
                width="100%"
                onClick={(e) => {
                  handleChange(e, 'question1');
                }}
              />

              <p className="my-auto py-2">Faire des travaux</p>
            </div>
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Renégocier"
                type="image"
                alt="Renégocier"
                src="img/form/question1/renegocier.png"
                width="100%"
                onClick={(e) => {
                  handleChange(e, 'question1');
                }}
              />

              <p className="my-auto py-2">Renégocier</p>
            </div>
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Autres projets"
                type="image"
                alt="Autres projets"
                src="img/form/question1/autresprojets.jpg"
                width="100%"
                onClick={(e) => {
                  handleChange(e, 'question1');
                }}
              />
              <p className="my-auto py-2">Autres projets</p>
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

Question1.propTypes = {
  handleChange: PropTypes.string.isRequired,
  nextStep: PropTypes.number.isRequired,
};

export default Question1;
