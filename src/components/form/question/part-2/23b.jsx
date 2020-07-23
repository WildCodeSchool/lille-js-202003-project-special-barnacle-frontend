import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../../styleForm.css';

function Question23b() {
  const dispatch = useDispatch();

  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ANSWER',
      question: 'question23b',
      text: `question23b - ${answer}`,
    });
  };

  const handleChange = (value) => {
    setAnswer(value);
  };
  return (
    <div>
      <div className="form container-fluid pb-5">
        <div className="row-cols-12 py-4 p-lg-5 text-center my-3 mb-lg-5">
          <h1>Mensualité maximum souhaitée assurance comprise:</h1>
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
            label="question23b"
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

export default Question23b;