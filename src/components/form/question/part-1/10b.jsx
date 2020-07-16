import React, { useState } from 'react';

import '../styleForm.css';

import { useDispatch } from 'react-redux';

const Question10b = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleNameChange = (e) => setName(e.target.value);
  dispatch({ type: 'ADDTEXT', text: name });

  return (
    <div>
      <div className="form container-fluid pb-5">
        <div className="row-cols-12 py-4 p-lg-5 text-center my-3 mb-lg-5">
          <h1>Merci d&apos;indiquer le montant</h1>
        </div>
        <form className="">
          <input
            className="questionEnter col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
            type="text"
            placeholder="Montant du loyer"
            label="question10a"
            onChange={handleNameChange}
            value={name}
          />
        </form>
      </div>
    </div>
  );
};

export default Question10b;