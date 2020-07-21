import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../styleForm.css';

function Question9() {
  const text = '';

  const dispatch = useDispatch();

  const handleAnswer = (va) => {
    dispatch({ type: 'ANSWER', question: 'question5', text: va });
  };

  useEffect(() => {
    dispatch({ type: 'ANSWER', text });
  }, [text]);

  return (
    <div className="questionTxt">
      <div className="form container-fluid pb-5">
        <div className="row-cols-12 py-4 p-lg-5 text-center my-3 mb-lg-5">
          <h1> Vous souhaitez réaliser cet achat :</h1>
        </div>

        <div className="row">
          <button
            onClick={() => {
              handleAnswer('question9 - Seul');
            }}
            className="formCard col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
            type="button"
            value="Seul"
          >
            <p className="my-auto">Seul</p>

            <img
              className="col-2 col-sm-1 my-auto p-1"
              src="img/arrow.png"
              alt="fleche"
            />
          </button>
        </div>

        <div className="row">
          <button
            onClick={() => {
              handleAnswer('question9 - A deux');
            }}
            className="formCard col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
            type="button"
            value="A deux"
          >
            <p className="my-auto">A deux</p>
            <img
              className="col-2 col-sm-1 my-auto p-1"
              src="img/arrow.png"
              alt="fleche"
            />
          </button>
        </div>

        <div className="row">
          <button
            onClick={() => {
              handleAnswer('question9 - A plus de deux');
            }}
            className="formCard col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
            type="button"
            value="A plus de deux"
          >
            <p className="my-auto">A plus de deux</p>
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

export default Question9;
