import React, { useState } from 'react';
import Stepper from './Stepper';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question3a from './Question3a';
import Question19a from './question/part-2/19a';
import Question19b from './question/part-2/19b';
import Question20a from './question/part-2/20a';
import Question20b from './question/part-2/20b';
import Question20c from './question/part-2/20c';
import Question20d from './question/part-2/20d';
import Question21 from './question/part-2/21';

const Form = () => {
  const [data, setData] = useState({
    question1: '',
    question2: '',
    question3: '',
    question19a: '',
    question19b: '',
    question20a: '',
    question20b: '',
    question20c: '',
    question20d: '',
    question21: '',
  });

  const { question3a } = data;
  const values = question3a;

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

  const handleChangeTest = (e, input) => {
    // e.preventDefault();
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
      return (
        <div>
          <Question3a
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 30:
      return (
        <div>
          <Question19a
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 31:
      return (
        <div>
          <Question19b
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 32:
      return (
        <div>
          <Question20a
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 33:
      return (
        <div>
          <Question20b
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 34:
      return (
        <div>
          <Question20c
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 35:
      return (
        <div>
          <Question20d
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 36:
      return (
        <div>
          <Question21
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
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
