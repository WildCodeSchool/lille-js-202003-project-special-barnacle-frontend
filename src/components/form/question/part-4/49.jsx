import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import '../styleForm.css';

function Question49() {
  const dispatch = useDispatch();

  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');

  const handleChange1 = (value) => {
    setAnswer1(value);
  };

  const handleChange2 = (value) => {
    setAnswer2(value);
  };

  const handleChange3 = (value) => {
    setAnswer3(value);
  };

  const handleChange4 = (value) => {
    setAnswer4(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ANSWER',
      question: 'question49',
      text: {
        adresse: answer1,
        cp: answer2,
        ville: answer3,
        etranger: answer4,
      },
    });
  };

  return (
    <div className="form container-fluid pb-5">
      <h1 className="py-4 my-3 text-center">
        Quelle est votre adresse actuelle ?
      </h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="col-8 col-lg-8 mx-auto">
          <div className="multipleForms row py-3">
            <p className="col-12 col-lg-4 my-lg-auto">Adresse :</p>
            <input
              className=" col-12 col-lg-8"
              type="text"
              placeholder="Adresse"
              label="question49"
              value={answer1}
              onChange={(e) => {
                handleChange1(e.target.value);
              }}
            />
          </div>

          <div className="multipleForms row py-3">
            <p className="col-12 col-lg-4 my-lg-auto">Code postal :</p>
            <input
              className="col-12 col-lg-8"
              type="text"
              placeholder="Code postal"
              label="question49"
              value={answer2}
              onChange={(e) => {
                handleChange2(e.target.value);
              }}
            />
          </div>

          <div className="multipleForms row py-3">
            <p className="col-12 col-lg-4 my-lg-auto">Ville :</p>
            <input
              className="col-12 col-lg-8"
              type="text"
              placeholder="Ville"
              label="question49"
              value={answer3}
              onChange={(e) => {
                handleChange3(e.target.value);
              }}
            />
          </div>
          <div className="multipleForms row py-3">
            <p className="col-12 col-lg-4 my-lg-auto">
              Si vous vivez à l&apos;étranger, merci d&apos;indiquer votre
              numéro carte de séjour ainsi que la date de début et de fin de
              validité :
            </p>
            <input
              className="col-12 col-lg-8"
              type="text"
              placeholder="Numéro carte de séjour + date de début et de fin de validité"
              label="question49"
              value={answer4}
              onChange={(e) => {
                handleChange4(e.target.value);
              }}
            />
          </div>
        </div>
        <button type="button">GO</button>
      </form>
    </div>
  );
}

export default Question49;
