import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

function Question45({ nextStep, prevStep }) {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const handleNameChange = (e) => setName(e.target.value);
  dispatch({ type: 'ADDTEXT', text: name });
  return (
    <div>
      <div className="container-fluid d-md-flex justify-content-center align-items-center">
        <div className="">
          <h2 className="text-center mx-2 mx-md-5">Nom :</h2>
        </div>
        <form className="col-12 p-0">
          <input
            className="questionEnter col-10 mx-2 mx-md-5"
            type="text"
            placeholder="Nom"
            label="question45"
            onChange={handleNameChange}
            value={name}
          />
        </form>
      </div>
      <div className="form d-flex container-fluid pb-2">
        <div className="row-cols-12 py-4 p-lg-5 text-center my-3 mb-lg-5">
          <h2>Nom de jeune fille :</h2>
        </div>
        <form className="">
          <input
            className="questionEnter col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
            type="text"
            placeholder="Nom de jeune fille"
            label="question45"
            onChange={handleNameChange}
            value={name}
          />
        </form>
      </div>
      <div className="form d-flex container-fluid pb-2">
        <div className="row-cols-12 py-4 p-lg-5 text-center my-3 mb-lg-5">
          <h2>Prénom :</h2>
        </div>
        <form className="">
          <input
            className="questionEnter col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
            type="text"
            placeholder="Prénom"
            label="question45"
            onChange={handleNameChange}
            value={name}
          />
        </form>
      </div>
      <div className="form d-flex container-fluid pb-2">
        <div className="row-cols-12 py-4 p-lg-5 text-center my-3 mb-lg-5">
          <h2>Date de naissance :</h2>
        </div>
        <form className="">
          <input
            className="questionEnter col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
            type="date"
            placeholder="Date de naissance"
            label="question45"
            onChange={handleNameChange}
            value={name}
          />
        </form>
      </div>
      <div className="form d-flex container-fluid pb-2">
        <div className="row-cols-12 py-4 p-lg-5 text-center my-3 mb-lg-5">
          <h2>Nationalité :</h2>
        </div>
        <form className="">
          <input
            className="questionEnter col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
            type="text"
            placeholder="Nationalité"
            label="question45"
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
Question45.propTypes = {
  nextStep: PropTypes.number.isRequired,
  prevStep: PropTypes.number.isRequired,
};
export default Question45;
