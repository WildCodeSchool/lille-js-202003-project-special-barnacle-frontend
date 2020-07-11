import React from 'react';
import PropTypes from 'prop-types';
import '../styleForm.css';

function Question15({ handleChange, nextStep }) {
  return (
    <div className="questionImg">
      <form>
        <div className="form container-fluid pb-5">
          <div className="row-cols-12 p-5 text-center">
            <h1>Quel type de bien cela concerne t-il ?</h1>
          </div>
          <div className="row text-center">
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Une maison"
                type="image"
                alt="maison"
                src="img/form/question2/Maison.jpg"
                width="100%"
                onClick={(e) => {
                  handleChange(e, 'question15');
                }}
              />
              <p className="my-auto py-2">Une maison</p>
            </div>

            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Un appartement"
                type="image"
                alt="Un appartement"
                src="img/form/question2/Appartement.jpg"
                width="100%"
                onClick={(e) => {
                  handleChange(e, 'question15');
                }}
              />
              <p className="my-auto py-2">Un appartement</p>
            </div>

            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Un terrein"
                type="image"
                alt="Un terrein"
                src="img/form/question2/Terrain.jpg"
                width="100%"
                onClick={(e) => {
                  handleChange(e, 'question15');
                }}
              />

              <p className="my-auto py-2">Un terrein</p>
            </div>
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Autre"
                type="image"
                alt="Autre"
                src="img/form/question1/autresprojets.jpg"
                width="100%"
                onClick={(e) => {
                  handleChange(e, 'question15');
                }}
              />

              <p className="my-auto py-2">Autre</p>
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

Question15.propTypes = {
  handleChange: PropTypes.string.isRequired,
  nextStep: PropTypes.number.isRequired,
};

export default Question15;
