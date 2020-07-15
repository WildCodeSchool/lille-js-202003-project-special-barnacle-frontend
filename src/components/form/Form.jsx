import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Stepper from './Stepper';
import Question1 from './question/1';

import Question2 from './question/2';
import Question3 from './question/3';

const Form = () => {
  const choice = useSelector((state) => state.bool.choice);

  function render() {
    if (choice === '') {
      return <Question1 />;
    }

    if (choice === 'achat') {
      return <Question2 />;
    }
    if (choice === 'construire') {
      return <Question3 />;
    }
    return <Question1 />;
  }

  useEffect(() => {
    render();
  }, [choice, render]);

  return (
    <>
      <div>
        <Stepper />
      </div>

      <div>{render()}</div>
    </>
  );
};

export default Form;
