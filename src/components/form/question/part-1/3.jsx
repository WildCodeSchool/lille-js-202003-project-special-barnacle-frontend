import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../styleForm.css';

function Question3() {
  const dispatch = useDispatch();

  const handleAnswer = (va) => {
    dispatch({ type: 'ANSWER', question: 'question3', text: va });
  };

  useEffect(() => {
    dispatch({ type: 'ANSWER' });
  }, [dispatch]);

  return (
    <div className="questionImg">
      <form>
        <div className="form container-fluid pb-5">
          <div className="row-cols-12 p-5 text-center">
            <h1>Quel est l&apos;état du bien ?</h1>
          </div>
          <div className="row text-center">
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Ancien"
                type="image"
                alt="Ancien"
                src="img/form/question3/Ancien.jpg"
                width="100%"
                onClick={() => {
                  handleAnswer('question3 - Ancien');
                }}
              />
              <p className="my-auto py-2">Ancien</p>
            </div>

            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Neuf"
                type="image"
                alt="Neuf"
                src="img/form/question3/Neuf.jpg"
                width="100%"
                onClick={() => {
                  handleAnswer('question3 - Neuf');
                }}
              />
              <p className="my-auto py-2">Neuf</p>
            </div>

            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="En état futur d'achèvement"
                type="image"
                alt="En état futur d'achèvement"
                src="img/form/question3/VEFA.jpg"
                width="100%"
                onClick={() => {
                  handleAnswer('question3 - En état futur d achevement');
                }}
              />

              <p className="my-auto py-2">En état futur d&apos;achèvement</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Question3;
