import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../styleForm.css';

function Question45bis() {
  const dispatch = useDispatch();

  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');
  const [answer5, setAnswer5] = useState('');

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

  const handleChange5 = (value) => {
    setAnswer5(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ANSWER',
      question: 'question45bis',
      text: {
        nom: answer1,
        nomdejeunefille: answer2,
        prenom: answer3,
        datedenaissance: answer4,
        nationalite: answer5,
      },
    });
  };

  return (
    <div className="form container-fluid pb-5">
      <h1 className="py-4 mb-3 text-center">Identité</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="col-8 col-lg-8 mx-auto">
          <div className="multipleForms row py-3">
            <p className="col-12 col-lg-4 my-lg-auto"> Nom :</p>
            <input
              className=" col-12 col-lg-8"
              type="text"
              placeholder="Nom"
              label="question45bis"
              value={answer1}
              onChange={(e) => {
                handleChange1(e.target.value);
              }}
            />
          </div>

          <div className="multipleForms row py-3">
            <p className="col-12 col-lg-4 my-lg-auto">Nom de jeune fille :</p>
            <input
              className="col-12 col-lg-8"
              type="text"
              placeholder="Nom de jeune fille"
              label="question45bis"
              value={answer2}
              onChange={(e) => {
                handleChange2(e.target.value);
              }}
            />
          </div>

          <div className="multipleForms row py-3">
            <p className="col-12 col-lg-4 my-lg-auto">Prénom</p>
            <input
              className="col-12 col-lg-8"
              type="text"
              placeholder="Prénom"
              label="question45bis"
              value={answer3}
              onChange={(e) => {
                handleChange3(e.target.value);
              }}
            />
          </div>

          <div className="multipleForms row py-3">
            <p className="col-12 col-lg-4 my-lg-auto">Date de naissance :</p>
            <input
              className="col-12 col-lg-8"
              type="date"
              placeholder="Date de naissance"
              label="question45bis"
              value={answer4}
              onChange={(e) => {
                handleChange4(e.target.value);
              }}
            />
          </div>

          <div className="multipleForms row py-3">
            <p className="col-12 col-lg-4 my-lg-auto">Nationalité</p>
            <input
              className="col-12 col-lg-8"
              type="text"
              placeholder="Nationalité"
              label="question45bis"
              value={answer5}
              onChange={(e) => {
                handleChange5(e.target.value);
              }}
            />
          </div>
        </div>
        <button type="button">GO</button>
      </form>
    </div>
  );
}

export default Question45bis;
