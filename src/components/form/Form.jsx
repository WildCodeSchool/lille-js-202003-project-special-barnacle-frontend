import React, { useState } from 'react';
import Stepper from './Stepper';
import Question1 from './question/1';
import Question2 from './question/2';
import Question3 from './question/3';
import Question5 from './question/5';
import Question5a from './question/5a';
import Question5b from './question/5b';
import Question6 from './question/6';

const Form = () => {
  const [data, setData] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question4a: '',
    question5: '',
    question5a: '',
    question5b: '',
    question6: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  switch (step) {
    case 1:
      return (
        <>
          <div>
            <Stepper />
          </div>
          <div>
            <Question1
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
            step={step}
          />
        </div>
      );
    case 4:
      return (
        <div>
          <Question3
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            step={step}
          />
        </div>
      );
    case 5:
      return (
        <div>
          <Question3
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            step={step}
          />
        </div>
      );
    case 6:
      return (
        <div>
          <Question5
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 7:
      return (
        <div>
          <Question5a
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 8:
      return (
        <div>
          <Question5b
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 9:
      return (
        <div>
          <Question6
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    default:
      return null;
  }
};

export default Form;
