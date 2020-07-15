import React from 'react';
import PropTypes from 'prop-types';
import '../../styleForm.css';

function Question1({ handleChange, nextStep }) {
  return (
    <div className="questionImg">
      <form>
        <div className="form container-fluid pb-5">
          <div className="row-cols-12 p-5 text-center">
            <h1>Vous êtes</h1>
          </div>
          <div className="row text-center">
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Un homme"
                type="image"
                alt="Un homme"
                src="img/form/question1/acheterunbien.png"
                width="100%"
                onClick={(e) => {
                  handleChange(e, 'question1');
                }}
              />
              <p className="my-auto py-2">Un homme</p>
            </div>

            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Une femme"
                type="image"
                alt="Une femme"
                src="img/form/question1/faireconstruire.png"
                width="100%"
                onClick={(e) => {
                  handleChange(e, 'question1');
                }}
              />
              <p className="my-auto py-2">Une femme</p>
            </div>
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Une société"
                type="image"
                alt="Une société"
                src="img/form/question1/fairedestravaux.png"
                width="100%"
                onClick={(e) => {
                  handleChange(e, 'question1');
                }}
              />
              <p className="my-auto py-2">Une société</p>
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
