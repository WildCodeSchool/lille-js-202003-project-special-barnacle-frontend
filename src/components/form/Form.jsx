import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Stepper from './Stepper';
import Question1 from './question/part-1/1';
import Question2 from './question/part-1/2';
import Question5 from './question/part-1/5';
import Question6 from './question/part-1/6';
import Question8 from './question/part-1/8';
import Question12 from './question/part-1/12';
import Question14 from './question/part-1/14';
import Question15 from './question/part-1/15';
import Contact from './Contact';

const Form = () => {
  const question1 = useSelector((state) => state.question.question1);
  const question2 = useSelector((state) => state.question.question2);
  const question3 = useSelector((state) => state.question.question3);
  const question4 = useSelector((state) => state.question.question4);
  const curStep = useSelector((state) => state.question.curStep);
  const [question, setQuestion] = useState(<Question1 />);

  function switchQuestion() {
    if (question1 === '') {
      return <Question1 />;
    }
    if (question1 === 'question1 - Acheter un bien') {
      return <Question2 />;
    }
    if (question1 === 'question1 - Faire construire') {
      return <Question12 />;
    }
    if (question1 === 'faire des travaux' && curStep === 1) {
      return <Question14 />;
    }
    if (question1 === 'question1 - Renégocier') {
      return <Question15 />;
    }
    if (question1 === 'question1 - Autres projets') {
      return <Contact />;
    }
    if (question1 === 'question2 - Une maison') {
      return <Contact />;
    }
    if (
      (question2 === 'une maison' ||
        question2 === 'un appartement' ||
        question2 === 'un terrain seul') &&
      curStep === 2 &&
      question1 === 'faire des travaux'
    ) {
      return <Question5 />;
    }

    if (
      (question3 === 'residence principale' ||
        question3 === 'residence locative' ||
        question3 === 'residence secondaire' ||
        question3 === 'autre') &&
      curStep === 3 &&
      question1 === 'faire des travaux'
    ) {
      return <Question6 />;
    }

    if (
      (question4 === 'simulation' || question4 === 'compromis') &&
      curStep === 4 &&
      question1 === 'faire des travaux'
    ) {
      return <Question8 />;
    }

    return <Question1 />;
  }

  useEffect(() => {
    setQuestion(switchQuestion());
  }, [question1, question2, question3, question4]);

  return (
    <>
      <Stepper />
      <div>{question}</div>
    </>
  );
};

export default Form;
