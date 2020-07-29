import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../styleForm.css';

function Question19a({ setActiveStep }) {
  const dispatch = useDispatch();

  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ANSWER',
      question: 'question19a',
      text: `question19a - ${answer}`,
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
      <div className="row-cols-12 py-4 p-lg-5 text-center mb-3 mb-lg-5">
        <h1>Quel est le montant de l’investissement?</h1>
      </div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          className="questionEnter col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
          type="number"
          placeholder="Montant"
          label="question19a"
          value={answer}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
      </form>
    </div>
  );
}

Question19a.propTypes = {
  setActiveStep: PropTypes.number.isRequired,
};
export default Question19a;
