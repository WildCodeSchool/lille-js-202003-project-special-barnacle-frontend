import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './styleForm.css';

function QuestionExemple3({ prevStep }) {
  const [bool1, setBool1] = useState(false);

  const dispatch = useDispatch();

  const handleNameBoolTrue = () => setBool1(true);
  dispatch({ type: 'BOOL_TRAVAUX', bool: bool1 });

  const handleNameBoolFalse = () => setBool1(false);
  dispatch({ type: 'BOOL_TRAVAUX', bool: bool1 });

  return (
    <div className="questionTxt">
      <div className="form container-fluid pb-5">
        <div className="row-cols-12 py-4 p-lg-5 text-center my-3 mb-lg-5">
          <h1>Souhaitez-vous faire des travaux ?</h1>
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
        <button type="button" onClick={() => {}}>
          NEXT
        </button>
      </div>
    </div>
  );
}

QuestionExemple3.propTypes = {
  prevStep: PropTypes.number.isRequired,
};

export default QuestionExemple3;
