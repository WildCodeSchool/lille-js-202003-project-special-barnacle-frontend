import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../styleForm.css';

const Question8 = () => {
  const dispatch = useDispatch();

  const handleAnswer = (va) => {
    dispatch({ type: 'ANSWER', question: 'question8', text: va });
  };

  useEffect(() => {
    dispatch({ type: 'ANSWER' });
  }, [dispatch]);

  return (
    <div className="form container-fluid pb-5">
      <div className="row-cols-12 py-4 p-lg-5 text-center mb-3 mb-lg-5">
        <h1>Vous êtes:</h1>
      </div>

      <div className="row">
        <button
          className="formCard col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
          type="button"
          value="Locataire"
          onClick={() => {
            handleAnswer('question8 - Locataire');
          }}
        >
          <p className="my-auto">Locataire</p>

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
          value="Propriétaire"
          onClick={() => {
            handleAnswer('question8 - Propriétaire');
          }}
        >
          <p className="my-auto">Propriétaire</p>
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
          value="Bénéficiaire d’un logement de fonction"
          onClick={() => {
            handleAnswer('question8 - Bénéficiaire d un logement de fonction');
          }}
        >
          <p className="my-auto">Bénéficiaire d’un logement de fonction</p>
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
          value="Hébergé à titre gratuit"
          onClick={() => {
            handleAnswer('question8 - Hébergé à titre gratuit');
          }}
        >
          <p className="my-auto">Hébergé à titre gratuit</p>
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
export default Question8;
