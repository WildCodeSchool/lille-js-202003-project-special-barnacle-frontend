import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../styleForm.css';

function Question44({ setActiveStep }) {
  const dispatch = useDispatch();

  const handleAnswer = (va) => {
    dispatch({ type: 'ANSWER', question: 'question44', text: va });
  };

  useEffect(() => {
    dispatch({ type: 'ANSWER' });
    setActiveStep(3);
  }, [dispatch, setActiveStep]);

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
                value="Un homme"
                type="image"
                alt="un homme"
                src="img/form/question52/homme.png"
                width="100%"
                onClick={() => {
                  handleAnswer('question44 - Un homme');
                }}
              />
              <p className="my-auto py-2">Un homme</p>
            </div>

            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Une femme"
                type="image"
                alt="une femme"
                src="img/form/question52/femme.png"
                width="100%"
                onClick={() => {
                  handleAnswer('question44 - Une femme');
                }}
              />
              <p className="my-auto py-2">Une femme</p>
            </div>
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Une societe"
                type="image"
                alt="une societe"
                src="img/form/question52/societe.jpg"
                width="100%"
                onClick={() => {
                  handleAnswer('question44 - Une société');
                }}
              />
              <p className="my-auto py-2">Une société</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Question44.propTypes = {
  setActiveStep: PropTypes.number.isRequired,
};
export default Question44;
