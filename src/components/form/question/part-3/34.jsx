import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../styleForm.css';

function Question34({ setActiveStep }) {
  const dispatch = useDispatch();

  const handleAnswer = (va) => {
    dispatch({ type: 'ANSWER', question: 'question34', text: va });
  };

  useEffect(() => {
    dispatch({ type: 'ANSWER' });
    setActiveStep(2);
  }, [dispatch, setActiveStep]);

  return (
    <div className="questionTxt">
      <div className="form container-fluid pb-5">
        <div className="row-cols-12 py-4 p-lg-5 text-center mb-3 mb-lg-5">
          <h1>Quelle est votre situation professionnelle?</h1>
        </div>

        <div className="row">
          <button
            className="formCard col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
            type="button"
            value="Salarié du privé"
            onClick={() => {
              handleAnswer('question34 - Salarié du privé');
            }}
          >
            <p className="my-auto">Salarié du privé</p>

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
            value="Salarié du public"
            onClick={() => {
              handleAnswer('question34 - Salarié du public');
            }}
          >
            <p className="my-auto">Salarié du public</p>

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
            value="TNS - Travailleur non salarié"
            onClick={() => {
              handleAnswer('question34 - TNS - Travailleur non salarié');
            }}
          >
            <p className="my-auto">TNS - Travailleur non salarié</p>

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
            value="Autre"
            onClick={() => {
              handleAnswer('question34 - Autre');
            }}
          >
            <p className="my-auto">Autre</p>

            <img
              className="col-2 col-sm-1 my-auto p-1"
              src="img/arrow.png"
              alt="fleche"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

Question34.propTypes = {
  setActiveStep: PropTypes.number.isRequired,
};
export default Question34;
