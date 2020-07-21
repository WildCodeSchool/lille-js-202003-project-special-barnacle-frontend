import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../styleForm.css';

const Question1 = () => {
  const text = '';

  const dispatch = useDispatch();

  const handleAnswer = (va, step) => {
    dispatch({ type: 'ANSWER', question: 'question1', text: va });
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
            <h1>Quel est votre projet ?</h1>
          </div>
          <div className="row text-center">
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Acheter un bien"
                type="image"
                alt="Acheter un bien"
                src="img/form/question1/acheterunbien.png"
                width="100%"
              />
              <p className="my-auto py-2">Acheter un bien</p>
            </div>

            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Faire construire"
                type="image"
                alt="faire construire"
                src="img/form/question1/faireconstruire.png"
                width="100%"
              />
              <p className="my-auto py-2">Faire construire</p>
            </div>
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Faire des travaux"
                type="image"
                alt="Faire des travaux"
                src="img/form/question1/fairedestravaux.png"
                width="100%"
                onClick={() => {
                  handleAnswer('faire des travaux', 1);
                }}
              />

              <p className="my-auto py-2">Faire des travaux</p>
            </div>
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Renégocier"
                type="image"
                alt="Renégocier"
                src="img/form/question1/renegocier.png"
                width="100%"
                onClick={() => {
                  handleAnswer('question1 - Renégocier', 1);
                }}
              />

              <p className="my-auto py-2">Renégocier</p>
            </div>
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Autres projets"
                type="image"
                alt="Autres projets"
                src="img/form/question1/autresprojets.jpg"
                width="100%"
              />
              <p className="my-auto py-2">Autres projets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question1;
