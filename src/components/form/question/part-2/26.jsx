import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import '../../styleForm.css';

function Question26({ nextStep, prevStep }) {
  const [bool2, setBool2] = useState(false);

  const dispatch = useDispatch();

  const handleNameBoolTrue = () => setBool2(true);
  dispatch({ type: 'BOOL_APPORT', bool: bool2 });

  const handleNameBoolFalse = () => setBool2(false);
  dispatch({ type: 'BOOL_APPORT', bool: bool2 });

  return (
    <div className="questionTxt">
      <div className="form container-fluid pb-5">
        <div className="row-cols-12 py-4 p-lg-5 text-center my-3 mb-lg-5">
          <h1>
            Votre activité professionnelle est-elle en rapport avec de la
            manutention ?
          </h1>
        </div>

        <div className="row">
          <button
            className="formCard col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
            type="button"
            value="oui"
            onClick={handleNameBoolTrue}
          >
            <p className="my-auto">Oui</p>

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
            value="non"
            onClick={handleNameBoolFalse}
          >
            <p className="my-auto">Non</p>
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

Question26.propTypes = {
  prevStep: PropTypes.number.isRequired,
  nextStep: PropTypes.number.isRequired,
};

export default Question26;
