import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../styleForm.css';

function Question6() {
  const text = '';

  const dispatch = useDispatch();

  const handleAnswer = (va, step) => {
    dispatch({ type: 'ANSWER', question: 'question4', text: va });
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
            <h1>Où en êtes-vous dans l’avancement du projet ?</h1>
          </div>
          <div className="row text-center">
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Je fais des simulations"
                type="image"
                alt="Je fais des simulations"
                src="img/form/question6/jeFaisDesSimulations.jpg"
                width="100%"
                onClick={() => {
                  handleAnswer('simulation', 4);
                }}
              />
              <p className="my-auto py-2">Je fais des simulations</p>
            </div>

            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="J'ai signé un compromis de vente"
                type="image"
                alt="J'ai signé un compromis de vente"
                src="img/form/question6/jaiSigneUnCompromisDeVente.jpg"
                width="100%"
                onClick={() => {
                  handleAnswer('compromis', 4);
                }}
              />
              <p className="my-auto py-2">
                J&apos;ai signé un compromis de vente
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question6;
