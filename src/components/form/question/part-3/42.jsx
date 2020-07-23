import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styleForm.css';
import { useDispatch } from 'react-redux';

function Question42({ nextStep, prevStep }) {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const handleNameChange = (e) => setName(e.target.value);
  dispatch({ type: 'ADDTEXT', text: name });
  return (
    <div>
      <div className="form container-fluid pb-5">
        <div className="row-cols-12 py-4 p-lg-5 text-center my-3 mb-lg-5">
          <h1>
            Quel est votre secteur d’activité? (indiquer le numéro de SIRET et
            la date de création/reprise)
          </h1>
        </div>
        <form className="">
          <input
            className="questionEnter col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
            type="text"
            placeholder="Numéro de SIRET,
            date de création/reprise
"
            label="question42"
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
Question42.propTypes = {
  nextStep: PropTypes.number.isRequired,
  prevStep: PropTypes.number.isRequired,
};
export default Question42;
