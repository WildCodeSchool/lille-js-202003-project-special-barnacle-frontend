import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../styleForm.css';

function Question29({ setActiveStep }) {
  const dispatch = useDispatch();

  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ANSWER',
      question: 'question29',
      text: `question29 - ${answer}`,
    });
  };
  useEffect(() => {
    dispatch({ type: 'ANSWER' });
    setActiveStep(1);
  }, [dispatch, setActiveStep]);

  const handleChange = (value) => {
    setAnswer(value);
  };
  return (
    <div className="form container-fluid pb-5">
      <div className="row-cols-12 py-4 p-lg-5 text-center my-3 mb-lg-5">
        <h1>
          Veuillez indiquer pour chacun de des prêts que vous souhaitez
          racheter, le capital restant dû, le taux, le type de taux, la date de
          1ère échéance, la durée de l&apos;emprunt en mois et le montant de la
          mensualité assurance comprise.
        </h1>
      </div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          className="questionEnter col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
          type="text"
          placeholder="Détail des crédits"
          label="question29"
          value={answer}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
      </form>
    </div>
  );
}

Question29.propTypes = {
  setActiveStep: PropTypes.number.isRequired,
};

export default Question29;
