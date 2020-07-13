import React, { useState } from 'react';
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
import Question34 from './question/part-3/34';
import Question35 from './question/part-3/35';
import Question36 from './question/part-3/36';
import Question37 from './question/part-3/37';
import Question38a from './question/part-3/38a';
import Question38b from './question/part-3/38b';
import Question38c from './question/part-3/38c';
import Question39a from './question/part-3/39a';
import Question39b from './question/part-3/39b';
import Question40 from './question/part-3/40';
import Question40a from './question/part-3/40a';
import Question41 from './question/part-3/41';
import Question42 from './question/part-3/42';
import Question43 from './question/part-3/43';
import Question431 from './question/part-3/431';
import Question432 from './question/part-3/432';

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
    question34: '',
    question35: '',
    question36: '',
    question37: '',
    question38a: '',
    question38b: '',
    question38c: '',
    question39a: '',
    question39b: '',
    question40: '',
    question40a: '',
    question41: '',
    question42: '',
    question43: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  switch (step) {
    case 30:
      return (
        <div>
          <Question19a
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChange}
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
            handleChangeTest={handleChange}
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
            handleChangeTest={handleChange}
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
            handleChangeTest={handleChange}
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
            handleChangeTest={handleChange}
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
            handleChangeTest={handleChange}
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
            handleChangeTest={handleChange}
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
            handleChangeTest={handleChange}
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
            handleChangeTest={handleChange}
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
            handleChangeTest={handleChange}
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
            handleChangeTest={handleChange}
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
            handleChangeTest={handleChange}
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
            handleChangeTest={handleChange}
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
            handleChangeTest={handleChange}
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
            handleChangeTest={handleChange}
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
            handleChangeTest={handleChange}
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
            handleChangeTest={handleChange}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 71:
      return (
        <div>
          <Question34
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChange}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 72:
      return (
        <div>
          <Question35
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChange}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 73:
      return (
        <div>
          <Question36
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChange}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 74:
      return (
        <div>
          <Question37
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChange}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 75:
      return (
        <div>
          <Question38a
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChange}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 76:
      return (
        <div>
          <Question38b
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChange}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 77:
      return (
        <div>
          <Question38c
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChange}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 78:
      return (
        <div>
          <Question39a
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChange}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 79:
      return (
        <div>
          <Question39b
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChange}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 80:
      return (
        <div>
          <Question40
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChange}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 81:
      return (
        <div>
          <Question40a
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChange}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 82:
      return (
        <div>
          <Question41
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChange}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 83:
      return (
        <div>
          <Question42
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChange}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 84:
      return (
        <div>
          <Question43
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChange}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 85:
      return (
        <div>
          <Question431
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChange}
            values={values}
            step={step}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 86:
      return (
        <div>
          <Question432
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeTest={handleChange}
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
