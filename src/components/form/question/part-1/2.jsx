import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../styleForm.css';

function Question2() {
  const dispatch = useDispatch();

  const handleAnswer = (va) => {
    dispatch({ type: 'ANSWER', question: 'question2', text: va });
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
            <h1>Vous souhaitez acheter :</h1>
          </div>
          <div className="row text-center">
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Une maison"
                type="image"
                alt="maison"
                src="img/form/question2/maison.jpg"
                width="100%"
                onClick={() => {
                  handleAnswer('question2 - Une maison');
                }}
              />
              <p className="my-auto py-2">Une maison</p>
            </div>

            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Un appartement"
                type="image"
                alt="Un appartement"
                src="img/form/question2/appartement.jpg"
                width="100%"
                onClick={() => {
                  handleAnswer('question2 - Un appartement');
                }}
              />
              <p className="my-auto py-2">Un appartement</p>
            </div>

            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Un terrain seul"
                type="image"
                alt="Un terrain seul"
                src="img/form/question2/terrain.jpg"
                width="100%"
                onClick={() => {
                  handleAnswer('question2 - Un terrain seul');
                }}
              />

              <p className="my-auto py-2">Un terrain seul</p>
            </div>
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Autre"
                type="image"
                alt="Autre"
                src="img/form/question2/autresprojets2.jpg"
                width="100%"
                onClick={() => {
                  handleAnswer('question2 - Autre');
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

export default Question2;
