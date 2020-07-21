import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../styleForm.css';

function Question14() {
  const text = '';

  const dispatch = useDispatch();

  const handleAnswer = (va, step) => {
    dispatch({ type: 'ANSWER', question: 'question2', text: va });
    dispatch({ type: 'SETSTEP', question: 'curSteps', value: step });
  };

  useEffect(() => {
    dispatch({ type: 'ANSWER', text });
  }, [text, dispatch]);

  return (
    <div className="questionTxt">
      <div className="form container-fluid pb-5">
        <div className="row-cols-12 py-4 p-lg-5 text-center my-3 mb-lg-5">
          <h1>Dans quel type de bien souhaitez-vous faire des travaux ?</h1>
        </div>

        <div className="row">
          <button
            className="formCard col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
            type="button"
            value="Une maison"
            onClick={() => {
              handleAnswer('une maison', 2);
            }}
          >
            <p className="my-auto">Maison</p>

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
            value="Un appartement"
            onClick={() => {
              handleAnswer('un appartement', 2);
            }}
          >
            <p className="my-auto">Un appartement</p>
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
            value="Un terrain seul"
            onClick={() => {
              handleAnswer('un terrain seul', 2);
            }}
          >
            <p className="my-auto">Un terrain seul</p>
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

export default Question14;
