import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../styleForm.css';

const Question15 = () => {
  const dispatch = useDispatch();
  const handleAnswer = (va) => {
    dispatch({ type: 'ANSWER', question: 'question15', text: va });
  };
  useEffect(() => {
    dispatch({ type: 'ANSWER' });
  }, [dispatch]);
  return (
    <div className="questionImg">
      <div className="form container-fluid pb-5">
        <div className="row-cols-12 p-5 text-center">
          <h1>Quel type de bien cela concerne t-il ?</h1>
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
                handleAnswer('question15 - Une maison');
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
                handleAnswer('question15 - Un appartement');
              }}
            />
            <p className="my-auto py-2">Un appartement</p>
          </div>

          <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
            <input
              id="image"
              value="Un terrain"
              type="image"
              alt="Un terrain"
              src="img/form/question2/terrain.jpg"
              width="100%"
              onClick={() => {
                handleAnswer('question15 - Un terrain');
              }}
            />

            <p className="my-auto py-2">Un terrain</p>
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
                handleAnswer('question15 - Autre');
              }}
            />

            <p className="my-auto py-2">Autre</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question15;
