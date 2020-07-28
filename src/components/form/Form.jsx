import React, { useState } from 'react';
import Stepper from './Stepper';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question3a from './Question3a';
import Question44 from './question/part-4/44';
import Question45 from './question/part-4/45';
import Question46 from './question/part-4/46';
import Question47 from './question/part-4/47';
import Question47a from './question/part-4/47a';
import Question48 from './question/part-4/48';
import Question49 from './question/part-4/49';
import Question50 from './question/part-4/50';
import Question51 from './question/part-4/51';
import Question52 from './question/part-4/52';

const Form = () => {
  const [data, setData] = useState({
    question1: '',
    question2: '',
    question3: '',
    questio44: '',
    questio45: '',
    questio46: '',
    questio47: '',
    questio47a: '',
    questio48: '',
    questio48b: '',
    questio48c: '',
    questio49a: '',
    questio49b: '',
    questio49c: '',
    questio49d: '',
    question50: '',
    question51: '',
    question52: '',
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
    case 87:
      return (
        <div>
          <Question44
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 88:
      return (
        <div>
          <Question45
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 89:
      return (
        <div>
          <Question46
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 90:
      return (
        <div>
          <Question47
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 91:
      return (
        <div>
          <Question47a
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 94:
      return (
        <div>
          <Question48
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );

    case 95:
      return (
        <div>
          <Question49
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );

    case 99:
      return (
        <div>
          <Question50
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 100:
      return (
        <div>
          <Question51
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 101:
      return (
        <div>
          <Question52
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
