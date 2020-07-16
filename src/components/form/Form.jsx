import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Stepper from './Stepper';
import Question1 from './question/part-1/1';
import Question2 from './question/part-1/2';
import Question3 from './question/part-1/3';

const Form = () => {
  const text = useSelector((state) => state.question.question1);
  const [question, setQuestion] = useState(<Question1 />);

  function switchQuestion() {
    if (text === '') {
      return <Question1 />;
    }
    if (text === 'Acheter un bien') {
      return <Question2 />;
    }
    if (text === 'construire') {
      return <Question3 />;
    }
    return <Question1 />;
  }

  useEffect(() => {
    setQuestion(switchQuestion());
  }, [text]);

  return (
    <>
      <div>
        <Stepper />
      </div>

      <div>{question}</div>
    </>
  );
};

export default Form;
