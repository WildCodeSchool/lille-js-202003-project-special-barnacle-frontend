import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../styleForm.css';

function Question6() {
  const dispatch = useDispatch();

  const handleAnswer = (va) => {
    dispatch({ type: 'ANSWER', question: 'question6', text: va });
  };

  useEffect(() => {
    dispatch({ type: 'ANSWER' });
  }, [dispatch]);

  return (
    <div className="questionImg">
      <form>
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
                  handleAnswer('question6 - Je fais des simulations');
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
                  handleAnswer('question6 - J ai signé un compromis de vente');
                }}
              />
              <p className="my-auto py-2">
                J&apos;ai signé un compromis de vente
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Question6;
