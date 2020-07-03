import React, { useState } from 'react';
import Question1 from './projet/Question1';
import Question2 from './projet/Question2';

const Form = () => {
  const [data, setData] = useState({
    question1: '',
    question2: '',
  });

  const [step, setStep] = useState(1);

  // const [isClick, setIsClick] = useState(false)

  // // Proceed to next step
  const nextStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  // Go back to prev step
  // const prevStep = () => {
  //   setData({
  //     // ...data,
  //     step: -1,
  //   });
  // };

  // Handle fields change
  const handleChange = (e, input) => {
    e.preventDefault();
    setData({ ...data, [input]: e.target.value });
  };

  // const handleClick = () => {
  //   const isClick = !isClick
  //   setIsClick( isClick ? )
  // }

  // const { step } = step;
  const { firstName, lastName, email, occupation, city, bio } = data;
  const values = { firstName, lastName, email, occupation, city, bio };

  switch (step) {
    case 1:
      return (
        <div>
          <Question1
            values={values}
            step={step}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        </div>
      );
    case 2:
      return (
        <div>
          <Question2
            nextStep={nextStep}
            // prevStep={prevStep}
            handleChange={handleChange}
            values={values}
            step={step}
          />
        </div>
      );
    case 3:
      return null;
    case 4:
      return null;
    default:
      return null;
  }
};

export default Form;
