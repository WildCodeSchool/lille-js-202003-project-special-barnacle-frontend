import React from 'react';
import PropTypes from 'prop-types';
import './styleForm.css';
import TextField from '@material-ui/core/TextField';

function Question3a({ values, handleChange, nextStep, prevStep }) {
  return (
    <div className="questionEnter">
      <div className="form container-fluid pb-5">
        <div className="row-cols-12 py-4 p-lg-5 text-center my-3 mb-lg-5">
          <h1>Merci d`&apos;`indiquer le montant</h1>
        </div>
        <form>
          <TextField
            placeholder="Enter Your Occupation"
            label="question3a"
            onChange={(e) => {
              handleChange(e, 'question3a');
            }}
            defaultValue={values.question3a}
          />
        </form>
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

Question3a.propTypes = {
  values: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
  nextStep: PropTypes.number.isRequired,
  prevStep: PropTypes.number.isRequired,
};

export default Question3a;
