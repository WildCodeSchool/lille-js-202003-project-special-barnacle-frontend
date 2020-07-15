import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Stepper from './Stepper';
import Question1 from './question/1';

import Question2 from './question/2';
import Question3 from './question/3';
// import Question4 from './question/4';
// import Question4a from './question/4a';
// import Question5 from './question/5';
// import Question5a from './question/5a';
// import Question5b from './question/5b';
// import Question6 from './question/6';
// import Question7 from './question/7';
// import Question7a from './question/7a';
// import Question7b from './question/7b';
// import Question10 from './question/10';
// import Question10a from './question/10a';
// import Question10b from './question/10b';
// import Question11 from './question/11';

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
