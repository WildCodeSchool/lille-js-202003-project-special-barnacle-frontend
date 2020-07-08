import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styleForm.css';
import TextField from '@material-ui/core/TextField';

import { useDispatch } from 'react-redux';

function Question3a({ nextStep, prevStep }) {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleNameChange = (e) => setName(e.target.value);
  dispatch({ type: 'ADDTEXT', text: name });

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
            onChange={handleNameChange}
            value={name}
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
  nextStep: PropTypes.number.isRequired,
  prevStep: PropTypes.number.isRequired,
};

export default Question3a;
