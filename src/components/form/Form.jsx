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
import Question21a from './question/part-2/21a';
import Question22 from './question/part-2/22';
import Question22a from './question/part-2/22a';
import Question22b from './question/part-2/22b';
import Question22c from './question/part-2/22c';
import Question23a from './question/part-2/23a';
import Question23b from './question/part-2/23b';
import Question24 from './question/part-2/24';
import Question25 from './question/part-2/25';
import Question26 from './question/part-2/26';
import Question27 from './question/part-2/27';
import Question27a from './question/part-2/27a';
import Question27b1 from './question/part-2/27b1';
import Question27b2 from './question/part-2/27b2';
import Question27b3 from './question/part-2/27b3';
import Question27b4 from './question/part-2/27b4';
import Question27b5 from './question/part-2/27b5';
import Question27b6 from './question/part-2/27b6';
import Question28 from './question/part-2/28';
import Question28a from './question/part-2/28a';
import Question29 from './question/part-2/29';
import Question29a1 from './question/part-2/29a1';
import Question29a2 from './question/part-2/29a2';
import Question29a3 from './question/part-2/29a3';
import Question29a4 from './question/part-2/29a4';
import Question29a5 from './question/part-2/29a5';
import Question29a6 from './question/part-2/29a6';

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
    question21a: '',
    question22: '',
    question22a: '',
    question22b: '',
    question22c: '',
    question23a: '',
    question23b: '',
    question24: '',
    question25: '',
    question26: '',
    question27: '',
    question27a: '',
    question27b1: '',
    question27b2: '',
    question27b3: '',
    question27b4: '',
    question27b5: '',
    question27b6: '',
    question28: '',
    question28a: '',
    question29: '',
    question29a1: '',
    question29a2: '',
    question29a3: '',
    question29a4: '',
    question29a5: '',
    question29a6: '',
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
    case 37:
      return (
        <div>
          <Question21a
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 38:
      return (
        <div>
          <Question22
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 39:
      return (
        <div>
          <Question22a
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 40:
      return (
        <div>
          <Question22b
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 41:
      return (
        <div>
          <Question22c
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 42:
      return (
        <div>
          <Question23a
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 43:
      return (
        <div>
          <Question23b
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 44:
      return (
        <div>
          <Question24
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 45:
      return (
        <div>
          <Question25
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 46:
      return (
        <div>
          <Question26
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 47:
      return (
        <div>
          <Question27
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 48:
      return (
        <div>
          <Question27a
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 49:
      return (
        <div>
          <Question27b1
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 50:
      return (
        <div>
          <Question27b2
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 51:
      return (
        <div>
          <Question27b3
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 52:
      return (
        <div>
          <Question27b4
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 53:
      return (
        <div>
          <Question27b5
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 54:
      return (
        <div>
          <Question27b6
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 55:
      return (
        <div>
          <Question28
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 56:
      return (
        <div>
          <Question28a
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 57:
      return (
        <div>
          <Question29
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 58:
      return (
        <div>
          <Question29a1
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 59:
      return (
        <div>
          <Question29a2
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 60:
      return (
        <div>
          <Question29a3
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 61:
      return (
        <div>
          <Question29a4
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 62:
      return (
        <div>
          <Question29a5
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChangeTest}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 63:
      return (
        <div>
          <Question29a6
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
