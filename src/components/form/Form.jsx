import React, { useState } from 'react';
import Stepper from './Stepper';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';

const Form = () => {
  const [data, setData] = useState({
    question1: '',
    question2: '',
  });

  const [step, setStep] = useState(1);

  // Proceed to next step
  const nextStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  // Proceed to next step
  const prevStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  // Handle fields change
  const handleChange = (e, input) => {
    e.preventDefault();
    setData({ ...data, [input]: e.target.value });
  };

  // const { step } = step;
  const { firstName, lastName, email, occupation, city, bio } = data;
  const values = { firstName, lastName, email, occupation, city, bio };

  switch (step) {
    case 1:
      return (
        <>
          <div>
            <Stepper />
          </div>
          <div>
            <Question1
              values={values}
              step={step}
              handleChange={handleChange}
              nextStep={nextStep}
            />
          </div>
        </>
      );
    case 2:
      return (
        <div>
          <Question2
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
            step={step}
          />
        </div>
      );
    case 3:
      return (
        <div>
          <Question3
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
            step={step}
          />
        </div>
      );
    case 4:
      return null;
    default:
      return null;
  }
};

export default Form;
