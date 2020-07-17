import React from 'react';
import '../../styleForm.css';

function Question32() {
  return (
    <div>
      <div className="form container-fluid pb-5">
        <div className="row-cols-12 py-4 p-lg-5 text-center my-3 mb-lg-5">
          <h1>Confirmez le montant à racheter :</h1>
        </div>
        <form className="">
          <input
            className="questionEnter col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
            type="number"
            placeholder="Montant"
            label="question32"
          />
        </form>
      </div>
    </div>
  );
}

export default Question32;
