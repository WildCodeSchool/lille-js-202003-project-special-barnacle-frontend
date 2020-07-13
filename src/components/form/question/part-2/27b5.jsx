import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styleForm.css';
import { useDispatch } from 'react-redux';

function Question27b5({ nextStep, prevStep }) {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const handleNameChange = (e) => setName(e.target.value);
  dispatch({ type: 'ADDTEXT', text: name });
  return (
    <div>
      <div className="form container-fluid pb-5">
        <div className="row-cols-12 py-4 p-lg-5 text-center my-3 mb-lg-5">
          <h1>Durée de l’emprunt en mois</h1>
        </div>
        <form className="">
          <input
            className="questionEnter col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
            type="text"
            placeholder="frais d’agence, expertise, autres"
            label="question27b5"
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
Question27b5.propTypes = {
  nextStep: PropTypes.number.isRequired,
  prevStep: PropTypes.number.isRequired,
};
export default Question27b5;
