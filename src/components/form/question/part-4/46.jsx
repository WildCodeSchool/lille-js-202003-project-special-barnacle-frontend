import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import '../styleForm.css';

const Question46 = () => {
  const dispatch = useDispatch();

  const handleAnswer = (va) => {
    dispatch({ type: 'ANSWER', question: 'question46', text: va });
  };

  useEffect(() => {
    dispatch({ type: 'ANSWER' });
  }, [dispatch]);

  return (
    <div className="questionImg">
      <div
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form container-fluid pb-5">
          <div className="row-cols-12 p-5 text-center">
            <h1>Vous êtes :</h1>
          </div>
          <div className="row text-center">
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Marié"
                type="image"
                alt="Marié"
                src="img/form/question46/marie.jpg"
                width="100%"
                onClick={() => {
                  handleAnswer('question46 - Marié');
                }}
              />
              <p className="my-auto py-2">Marié</p>
            </div>

            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Célibataire"
                type="image"
                alt="Célibataire"
                src="img/form/question46/celibataire.jpg"
                width="100%"
                onClick={() => {
                  handleAnswer('question46 - Célibataire');
                }}
              />
              <p className="my-auto py-2">Célibataire</p>
            </div>
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Pacsé"
                type="image"
                alt="Pacsé"
                src="img/form/question46/pacse.jpg"
                width="100%"
                onClick={() => {
                  handleAnswer('question46 - Pacsé');
                }}
              />

              <p className="my-auto py-2">Pacsé</p>
            </div>
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Union libre"
                type="image"
                alt="Union libre"
                src="img/form/question46/unionlibre.jpg"
                width="100%"
                onClick={() => {
                  handleAnswer('question46 - Union libre');
                }}
              />

              <p className="my-auto py-2">Union libre</p>
            </div>
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Divorcé"
                type="image"
                alt="Divorcé"
                src="img/form/question46/divorse.jpg"
                width="100%"
                onClick={() => {
                  handleAnswer('question46 - Divorcé');
                }}
              />
              <p className="my-auto py-2">Divorcé</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question46;
