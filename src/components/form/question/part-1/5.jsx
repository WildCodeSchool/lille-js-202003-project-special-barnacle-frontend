import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../styleForm.css';

function Question5() {
  const dispatch = useDispatch();

  const handleAnswer = (va) => {
    dispatch({ type: 'ANSWER', question: 'question5', text: va });
  };

  useEffect(() => {
    dispatch({ type: 'ANSWER' });
  }, [dispatch]);

  return (
    <div className="form questionImg container-fluid pb-5">
      <div className="row-cols-12 p-5 text-center">
        <h1>Quel est l&apos;usage du bien ?</h1>
      </div>
      <div className="row text-center">
        <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
          <input
            id="image"
            value="Résidence principale"
            type="image"
            alt="Résidence principale"
            src="img/form/question5/residenceprincipale.jpg"
            width="100%"
            onClick={() => {
              handleAnswer('question5 - Résidence principale');
            }}
          />
          <p className="my-auto py-2">Résidence principale</p>
        </div>

        <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
          <input
            id="image"
            value="Résidence locative"
            type="image"
            alt="Résidence locative"
            src="img/form/question5/residencelocative.jpg"
            width="100%"
            onClick={() => {
              handleAnswer('question5 - Résidence locative');
            }}
          />
          <p className="my-auto py-2">Résidence locative</p>
        </div>

        <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
          <input
            id="image"
            value="Résidence secondaire"
            type="image"
            alt="Résidence secondaire"
            src="img/form/question5/residencesecondaire.jpg"
            width="100%"
            onClick={() => {
              handleAnswer('question5 - Résidence secondaire');
            }}
          />
          <p className="my-auto py-2">Résidence secondaire</p>
        </div>

        <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
          <input
            id="image"
            value="Mixte"
            type="image"
            alt="Mixte"
            src="img/form/question1/autresprojets.jpg"
            width="100%"
            onClick={() => {
              handleAnswer('question5 - Résidence mixte');
            }}
          />
          <p className="my-auto py-2">Mixte</p>
        </div>
      </div>
    </div>
  );
}

export default Question5;
