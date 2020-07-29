import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../styleForm.css';

function Question7() {
  const dispatch = useDispatch();

  const handleAnswer = (va) => {
    dispatch({ type: 'ANSWER', question: 'question7', text: va });
  };

  useEffect(() => {
    dispatch({ type: 'ANSWER' });
  }, [dispatch]);

  return (
    <div className=" form container-fluid pb-5">
      <div className="row-cols-12 py-4 p-lg-5 text-center mb-3 mb-lg-5">
        <h1>Où souhaitez-vous acheter?</h1>
      </div>

      <div className="row">
        <button
          onClick={() => {
            handleAnswer('question7 - En France');
          }}
          className="formCard col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
          type="button"
          value="En France"
        >
          <p className="my-auto">En France</p>

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
            handleAnswer('question7 - A l étranger');
          }}
          className="formCard col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
          type="button"
          value="A l’étranger >"
        >
          <p className="my-auto">A l’étranger</p>
          <img
            className="col-2 col-sm-1 my-auto p-1"
            src="img/arrow.png"
            alt="fleche"
          />
        </button>
      </div>
    </div>
  );
}

export default Question7;
