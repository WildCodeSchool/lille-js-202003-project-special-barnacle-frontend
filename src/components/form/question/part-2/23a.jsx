import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../../styleForm.css';

function Question23a() {
  const dispatch = useDispatch();

  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ANSWER',
      question: 'question23a',
      text: `question23a - ${answer}`,
    });
  };

  const handleChange = (value) => {
    setAnswer(value);
  };
  return (
    <div>
      <div className="form container-fluid pb-5">
        <div className="row-cols-12 py-4 p-lg-5 text-center my-3 mb-lg-5">
          <h1>Montant souhaité de votre projet principal:</h1>
        </div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            className="questionEnter col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
            type="text"
            placeholder="Montant"
            label="question23a"
            value={answer}
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default Question23a;
