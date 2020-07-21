import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
// import Question16 from './question/part-1/16';
import Question16a from './question/part-1/16a';
import Question16b from './question/part-1/16b';
// import Question17 from './question/part-1/17';
import Question18 from './question/part-1/18';
import Question18a from './question/part-1/18a';
import Contact from './Contact';

const Form = () => {
  const answers = useSelector((state) => state.question);
  const [question, setQuestion] = useState(<Question1 />);

  function switchQuestion() {
    if (answers.question18 === 'question18 - non') {
      return <Question8 />;
    }
    if (answers.question18 === 'question18 - oui') {
      return <Question18a />;
    }
    if (answers.question17 === 'question17') {
      return <Question18 />;
    }
    if (answers.question16 === 'question16 - A l étranger') {
      return <Question16b />;
    }
    if (answers.question16 === 'question16 - En France') {
      return <Question16a />;
    }
    if (answers.question14 === 'question14 - Autre') {
      return <Question5 />;
    }
    if (answers.question14 === 'question14 - Appartement') {
      return <Question5 />;
    }
    if (answers.question14 === 'question14 - Maison') {
      return <Question5 />;
    }
    if (
      answers.question12 ===
      'question12 - Acquérir le terrain et réaliser une construction'
    ) {
      return <Question5 />;
    }
    if (answers.question12 === 'question12 - Réaliser une construction seule') {
      return <Question5 />;
    }
    if (
      answers.question11 === 'question11 - J ai signé un compromis de vente'
    ) {
      return <Question7 />;
    }
    if (answers.question11 === 'question11 - Je recherche un terrain') {
      return <Question7 />;
    }
    if (answers.question10 === 'question10 - Mixte') {
      return <Question10b />;
    }
    if (answers.question10 === 'question10 - Locatif') {
      return <Question10a />;
    }
    if (answers.question10 === 'question10 - Personnel') {
      return <Question11 />;
    }
    if (answers.question9 === 'question9 - A plus de deux') {
      return <Contact />;
    }
    if (answers.question8 === 'question8 - Hébergé à titre gratuit') {
      return <Question9 />;
    }
    if (
      answers.question8 === 'question8 - Bénéficiaire d un logement de fonction'
    ) {
      return <Question9 />;
    }
    if (answers.question8 === 'question8 - Propriétaire') {
      return <Question9 />;
    }
    if (answers.question8 === 'question8 - Locataire') {
      return <Question8a />;
    }
    if (answers.question7b !== '') {
      return <Question8 />;
    }
    if (answers.question7a !== '') {
      return <Question8 />;
    }
    if (answers.question7 === 'question7 - A l étranger') {
      return <Question7b />;
    }
    if (answers.question7 === 'question7 - En France') {
      return <Question7a />;
    }
    if (answers.question6 === 'question6 - J ai signé un compromis de vente') {
      return <Question7 />;
    }
    if (answers.question6 === 'question6 - Je fais des simulations') {
      return <Question7 />;
    }
    if (answers.question5 === 'question5 - Résidence mixte') {
      return <Question5b />;
    }
    if (answers.question5a !== '') {
      return <Question6 />;
    }
    if (answers.question5b !== '') {
      return <Question6 />;
    }
    if (answers.question5 === 'question5 - Résidence secondaire') {
      return <Question6 />;
    }
    if (answers.question5 === 'question5 - Résidence locative') {
      return <Question5a />;
    }
    if (answers.question5 === 'question5 - Résidence principale') {
      return <Question6 />;
    }
    if (answers.question4a !== '') {
      return <Question5 />;
    }
    if (answers.question4 === 'question4 - Non') {
      return <Question5 />;
    }
    if (answers.question4 === 'question4 - Oui') {
      return <Question4a />;
    }
    if (answers.question3 === 'question3 - En état futur d achevement') {
      return <Question5 />;
    }
    if (answers.question3 === 'question3 - Neuf') {
      return <Question5 />;
    }
    if (answers.question3 === 'question3 - Ancien') {
      return <Question4 />;
    }
    if (answers.question2 === 'question2 - Autre') {
      return <Question3 />;
    }
    if (answers.question2 === 'question2 - Un terrain seul') {
      return <Question10 />;
    }
    if (answers.question2 === 'question2 - Un appartement') {
      return <Question3 />;
    }
    if (answers.question2 === 'question2 - Une maison') {
      return <Question3 />;
    }
    if (answers.question1 === 'question1 - Autres projets') {
      return <Contact />;
    }
    if (answers.question1 === 'question1 - Renégocier') {
      return <Question15 />;
    }
    if (answers.question1 === 'question1 - Faire des travaux') {
      return <Question14 />;
    }
    if (answers.question1 === 'question1 - Faire construire') {
      return <Question12 />;
    }
    if (answers.question1 === 'question1 - Acheter un bien') {
      return <Question2 />;
    }
    if (answers.question1 === '') {
      return <Question1 />;
    }
    return <Question1 />;
  }

  useEffect(() => {
    setQuestion(switchQuestion());
  }, [answers]);

  return (
    <>
      <Stepper />

      <div>{question}</div>
    </>
  );
};

export default Form;
