import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../styleForm.css';

function Question5() {
  const text = '';

  const dispatch = useDispatch();

  const handleAnswer = (va, step) => {
    dispatch({ type: 'ANSWER', question: 'question3', text: va });
    dispatch({ type: 'SETSTEP', question: 'curSteps', value: step });
  };

  useEffect(() => {
    dispatch({ type: 'ANSWER', text });
  }, [text, dispatch]);

  return (
    <div className="questionImg">
      <div
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form container-fluid pb-5">
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
                  handleAnswer('residence principale', 3);
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
                  handleAnswer('residence locative', 3);
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
                  handleAnswer('residence secondaire', 3);
                }}
              />
              <p className="my-auto py-2">Résidence secondaire</p>
            </div>

            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Autre"
                type="image"
                alt="Autre"
                src="img/form/question1/autresprojets.jpg"
                width="100%"
                onClick={() => {
                  handleAnswer('autre', 3);
                }}
              />
              <p className="my-auto py-2">Autre</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question5;
