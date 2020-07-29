import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../styleForm.css';

const Question47 = () => {
  const dispatch = useDispatch();

  const handleAnswer = (va) => {
    dispatch({ type: 'ANSWER', question: 'question47', text: va });
  };

  useEffect(() => {
    dispatch({ type: 'ANSWER' });
  }, [dispatch]);

  return (
    <div className="form container-fluid pb-5">
      <div className="row-cols-12 py-4 p-lg-5 text-center mb-3 mb-lg-5">
        <h1>
          Avez vous des enfants à charge? (si 2 emprunteurs, prendre en compte
          tous les enfants)
        </h1>
      </div>

      <div className="row">
        <button
          className="formCard col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
          type="button"
          value="oui"
          onClick={() => {
            handleAnswer('question47 - Oui');
          }}
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
          onClick={() => {
            handleAnswer('question47 - Non');
          }}
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
  );
};

export default Question47;
