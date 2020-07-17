import React from 'react';
import '../../styleForm.css';

function Question27b1() {
  return (
    <div>
      <div className="form container-fluid pb-5">
        <div className="row-cols-12 py-4 p-lg-5 text-center my-3 mb-lg-5">
          <h1>Capital restant dû :</h1>
        </div>
        <form className="">
          <input
            className="questionEnter col-10 col-sm-6 py-4 px-0 px-3 px-lg-5 mb-5 mx-auto d-flex justify-content-between"
            type="text"
            placeholder="Capital restant dû"
            label="question27b1"
          />
        </form>
      </div>
    </div>
  );
}
export default Question27b1;
