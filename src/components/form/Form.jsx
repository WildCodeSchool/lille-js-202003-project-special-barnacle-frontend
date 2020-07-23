import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Stepper from './Stepper';
import Question19a from './question/part-2/19a';
import Question19a1 from './question/part-2/19a1';
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
import Question27b1 from './question/part-2/27b1';
import Question28 from './question/part-2/28';
import Question28a from './question/part-2/28a';
import Question29 from './question/part-2/29';
import Question30 from './question/part-2/30';
import Question31a from './question/part-2/31a';
import Question31b from './question/part-2/31b';
import Question31c from './question/part-2/31c';
import Question31d from './question/part-2/31d';
import Question32 from './question/part-2/32';
import Question33 from './question/part-2/33';
import Question34 from './question/part-3/34';
import Question35 from './question/part-3/35';
import Question36 from './question/part-3/36';
import Question37 from './question/part-3/37';
import Question38a from './question/part-3/38a';
import Question38b from './question/part-3/38b';
import Question38bisa from './question/part-3/38bisa';
import Question38bisb from './question/part-3/38bisb';
import Question38bisc from './question/part-3/38bisc';
import Question38c from './question/part-3/38c';
import Question39a from './question/part-3/39a';
import Question39b from './question/part-3/39b';
import Question40 from './question/part-3/40';
import Question40a from './question/part-3/40a';
import Question41 from './question/part-3/41';
import Question42 from './question/part-3/42';
import Question42bis from './question/part-3/42bis';
import Question43 from './question/part-3/43';
import Question431 from './question/part-3/431';
import Question432 from './question/part-3/432';

const Form = () => {
  const answers = useSelector((state) => state.question);
  const [question, setQuestion] = useState(<Question19a />);

  function switchQuestion() {
    if (answers.question432 !== '') {
      return <Question40 />;
    }
    if (answers.question431 !== '') {
      return <Question432 />;
    }
    if (answers.question43 !== '') {
      return <Question39a />;
    }
    if (answers.question42bis === 'question42bis - Public') {
      return <Question431 />;
    }
    if (answers.question42bis === 'question42bis - Privé') {
      return <Question431 />;
    }
    if (answers.question42 !== '') {
      return <Question38bisa />;
    }
    if (answers.question41 === 'question41 - Retraité') {
      return <Question42bis />;
    }
    if (answers.question41 === 'question41 - Auto-entrepreneur') {
      return <Question42 />;
    }
    if (answers.question41 === 'question41 - Travailleur indépendant') {
      return <Question42 />;
    }
    if (answers.question41 === 'question41 - Agriculteur') {
      return <Question42 />;
    }
    if (answers.question41 === 'question41 - Artisant commerçant') {
      return <Question42 />;
    }
    if (answers.question41 === 'question41 - Profession libérale') {
      return <Question42 />;
    }
    if (answers.question41 === 'question41 - Chef d entreprise') {
      return <Question42 />;
    }
    if (answers.question40a !== '') {
      // TODO return 44
      return <Question40a />;
    }
    if (answers.question40 === 'question40 - Non') {
      // TODO return 44
      return <Question40 />;
    }
    if (answers.question40 === 'question40 - Oui') {
      return <Question40a />;
    }
    if (answers.question39b !== '') {
      return <Question40 />;
    }
    if (answers.question39a !== '') {
      return <Question39b />;
    }
    if (answers.question38c !== '') {
      return <Question39a />;
    }
    if (answers.question38bisc !== '') {
      return <Question43 />;
    }
    if (answers.question38bisb !== '') {
      return <Question38bisc />;
    }
    if (answers.question38bisa !== '') {
      return <Question38bisb />;
    }
    if (answers.question38b !== '') {
      return <Question38c />;
    }
    if (answers.question38a !== '') {
      return <Question38b />;
    }
    if (answers.question37 !== '') {
      return <Question38a />;
    }
    if (answers.question36 !== '') {
      return <Question37 />;
    }
    if (answers.question35 === 'question35 - Autre Contrat') {
      return <Question36 />;
    }
    if (answers.question35 === 'question35 - Intermittent du spectacle') {
      return <Question36 />;
    }
    if (answers.question35 === 'question35 - Stagiaire') {
      return <Question36 />;
    }
    if (answers.question35 === 'question35 - Interim') {
      return <Question36 />;
    }
    if (answers.question35 === 'question35 - Contractuel') {
      return <Question36 />;
    }
    if (answers.question35 === 'question35 - CDD') {
      return <Question36 />;
    }
    if (answers.question35 === 'question35 - Titulaire') {
      return <Question36 />;
    }
    if (answers.question35 === 'question35 - CDI') {
      return <Question36 />;
    }
    if (answers.question34 === 'question34 - Salarié du privé') {
      return <Question35 />;
    }
    if (answers.question34 === 'question34 - Salarié du public') {
      return <Question35 />;
    }
    if (answers.question34 === 'question34 - Travailleur non salarié') {
      return <Question41 />;
    }
    if (answers.question34 === 'question34 - Autre') {
      return <Question41 />;
    }
    if (answers.question33 !== '') {
      return <Question34 />;
    }
    if (answers.question32 !== '') {
      return <Question33 />;
    }
    if (answers.question31d !== '') {
      return <Question32 />;
    }
    if (answers.question31c !== '') {
      return <Question31d />;
    }
    if (answers.question31b !== '') {
      return <Question31c />;
    }
    if (answers.question31a !== '') {
      return <Question31b />;
    }
    if (answers.question30 !== '') {
      return <Question31a />;
    }
    if (answers.question29 !== '') {
      return <Question30 />;
    }
    if (answers.question28a !== '') {
      return <Question29 />;
    }
    if (answers.question28 === 'question28 - Non') {
      return <Question29 />;
    }
    if (answers.question28 === 'question28 - Oui') {
      return <Question28a />;
    }
    if (answers.question27b1 !== '') {
      return <Question28 />;
    }
    if (answers.question27 === 'question27 - Non') {
      return <Question28 />;
    }
    if (answers.question27 === 'question27 - Oui') {
      return <Question27b1 />;
    }
    if (answers.question26 === 'question26 - Non') {
      return <Question27 />;
    }
    if (answers.question26 === 'question26 - Oui') {
      return <Question27 />;
    }
    if (answers.question25 === 'question25 - Non') {
      return <Question26 />;
    }
    if (answers.question25 === 'question25 - Oui') {
      return <Question26 />;
    }
    if (answers.question24 === 'question24 - Non') {
      return <Question25 />;
    }
    if (answers.question24 === 'question24 - Oui') {
      return <Question25 />;
    }
    if (answers.question23b !== '') {
      return <Question24 />;
    }
    if (answers.question23a !== '') {
      return <Question23b />;
    }
    if (answers.question22c !== '') {
      return <Question23a />;
    }
    if (answers.question22b !== '') {
      return <Question22c />;
    }
    if (answers.question22a !== '') {
      return <Question22b />;
    }
    if (answers.question22 === 'question22 - Non') {
      return <Question23a />;
    }
    if (answers.question22 === 'question22 - Oui') {
      return <Question22a />;
    }
    if (answers.question21a !== '') {
      return <Question22 />;
    }
    if (answers.question21 === 'question21 - Non') {
      return <Question22 />;
    }
    if (answers.question21 === 'question21 - Oui') {
      return <Question21a />;
    }
    if (answers.question20d !== '') {
      return <Question21 />;
    }
    if (answers.question20c !== '') {
      return <Question20d />;
    }
    if (answers.question20b !== '') {
      return <Question20c />;
    }
    if (answers.question20a !== '') {
      return <Question20b />;
    }
    if (answers.question19b !== '') {
      return <Question20a />;
    }
    if (answers.question19a1 === 'question19a1 - Non') {
      return <Question20a />;
    }
    if (answers.question19a1 === 'question19a1 - Oui') {
      return <Question19b />;
    }
    if (answers.question19a !== '') {
      return <Question19a1 />;
    }
    return <Question19a />;
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
