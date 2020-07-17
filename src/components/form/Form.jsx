import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Stepper from './Stepper';
import Question1 from './question/part-1/1';
import Question2 from './question/part-1/2';
// import Question3 from './question/part-1/3';
// import Question4 from './question/part-1/4';
// import Question4a from './question/part-1/4a';
// import Question5 from './question/part-1/5';
// import Question5a from './question/part-1/5a';
// import Question5b from './question/part-1/5b';
// import Question6 from './question/part-1/6';
// import Question7 from './question/part-1/7';
// import Question7a from './question/part-1/7a';
// import Question7b from './question/part-1/7b';
// import Question8 from './question/part-1/8';
// import Question8a from './question/part-1/8a';
// import Question9 from './question/part-1/9';
// import Question10 from './question/part-1/10';
// import Question10a from './question/part-1/10a';
// import Question10b from './question/part-1/10b';
// import Question11 from './question/part-1/11';
import Question12 from './question/part-1/12';
import Question14 from './question/part-1/14';
import Question15 from './question/part-1/15';
// import Question16 from './question/part-1/16';
// import Question16a from './question/part-1/16a';
// import Question16b from './question/part-1/16b';
// import Question17 from './question/part-1/17';
// import Question18 from './question/part-1/18';
// import Question18a from './question/part-1/18a';
import Contact from './Contact';
import BackButton from './BackButton';

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

      <BackButton />
    </>
  );
};

export default Form;
