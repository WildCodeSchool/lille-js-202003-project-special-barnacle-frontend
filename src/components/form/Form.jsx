import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Stepper from './Stepper';
import Question1 from './question/part-1/1';
import Question2 from './question/part-1/2';
import Question12 from './question/part-1/12';
import Question14 from './question/part-1/14';
import Question15 from './question/part-1/15';
import Contact from './Contact';

const Form = () => {
  const text = useSelector((state) => state.question.question1);
  const [question, setQuestion] = useState(<Question1 />);

  function switchQuestion() {
    if (text === '') {
      return <Question1 />;
    }
    if (text === 'question1 - Acheter un bien') {
      return <Question2 />;
    }
    if (text === 'question1 - Faire construire') {
      return <Question12 />;
    }
    if (text === 'question1 - Faire des travaux') {
      return <Question14 />;
    }
    if (text === 'question1 - Renégocier') {
      return <Question15 />;
    }
    if (text === 'question1 - Autres projets') {
      return <Contact />;
    }
    if (text === 'question2 - Une maison') {
      return <Contact />;
    }
    return <Question1 />;
  }

  useEffect(() => {
    setQuestion(switchQuestion());
  }, [text]);

  return (
    <>
      <Stepper />
      <div>{question}</div>
    </>
  );
};

export default Form;
