import React, { useState } from 'react';
import Stepper from './Stepper';
import Question1 from './question/part-1/1';
import Question2 from './question/part-1/2';
import Question3 from './question/part-1/3';
import Question4 from './question/part-1/4';
import Question4a from './question/part-1/4a';
import Question5 from './question/part-1/5';
import Question5a from './question/part-1/5a';
import Question5b from './question/part-1/5b';
import Question6 from './question/part-1/6';
import Question7 from './question/part-1/7';
import Question7a from './question/part-1/7a';
import Question7b from './question/part-1/7b';
import Question8 from './question/part-1/8';
import Question8a from './question/part-1/8a';
import Question9 from './question/part-1/9';
import Question10 from './question/part-1/10';
import Question10a from './question/part-1/10a';
import Question10b from './question/part-1/10b';
import Question11 from './question/part-1/11';
import Question12 from './question/part-1/12';
import Question14 from './question/part-1/14';
import Question15 from './question/part-1/15';
import Question16 from './question/part-1/16';
import Question16a from './question/part-1/16a';
import Question16b from './question/part-1/16b';
import Question17 from './question/part-1/17';
import Question18 from './question/part-1/18';
import Question18a from './question/part-1/18a';

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
    question7: '',
    question7a: '',
    question7b: '',
    question8: '',
    question8a: '',
    question9: '',
    question10: '',
    question10a: '',
    question10b: '',
    question11: '',
    question12: '',
    question14: '',
    question15: '',
    question16: '',
    question16a: '',
    question16b: '',
    question17: '',
    question18: '',
    question18a: '',
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
          <Question4
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
          <Question4a
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
    case 10:
      return (
        <div>
          <Question7
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 11:
      return (
        <div>
          <Question7a
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 12:
      return (
        <div>
          <Question7b
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 13:
      return (
        <div>
          <Question8
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 14:
      return (
        <div>
          <Question8a
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 15:
      return (
        <div>
          <Question9
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 16:
      return (
        <div>
          <Question10
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 17:
      return (
        <div>
          <Question10a
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 18:
      return (
        <div>
          <Question10b
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 19:
      return (
        <div>
          <Question11
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 20:
      return (
        <div>
          <Question12
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 21:
      return (
        <div>
          <Question14
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 22:
      return (
        <div>
          <Question15
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 23:
      return (
        <div>
          <Question16
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 24:
      return (
        <div>
          <Question16a
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 25:
      return (
        <div>
          <Question16b
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 26:
      return (
        <div>
          <Question17
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 27:
      return (
        <div>
          <Question18
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 28:
      return (
        <div>
          <Question18a
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
