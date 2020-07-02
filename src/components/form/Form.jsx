// import React, { useState } from 'react';
// import Question1 from './projet/Question1';
// import Question2 from './projet/Question2';

// const Form = () => {
//   const [data, setData] = useState({
//     step: 1,
//     question1: '',
//     question2: '',
//   });

//   // Proceed to next step
//   const nextStep = () => {
//     setData({
//       ...data,
//       step: step + 1,
//     });
//   };

//   // Go back to prev step
//   const prevStep = () => {
//     setData({
//       ...data,
//       step: step - 1,
//     });
//   };

//   // Handle fields change
//   const handleChange = (e, input) => {
//     console.log(e.target);
//     setData({ ...data, [input]: e.target.value });
//     // setData({ ...data, step: step + 1, [input]: e.target.value });
//   };

//   const { step } = data;
//   const { firstName, lastName, email, occupation, city, bio } = data;
//   const values = { firstName, lastName, email, occupation, city, bio };

//   switch (step) {
//     case 1:
//       return (
//         <div>
//           <Question1
//             nextStep={nextStep}
//             handleChange={handleChange}
//             values={values}
//           />
//         </div>
//       );
//     case 2:
//       return (
//         <div>
//           <Question2
//             nextStep={nextStep}
//             prevStep={prevStep}
//             handleChange={handleChange}
//             values={values}
//           />
//         </div>
//       );
//     case 3:
//       return null;
//     case 4:
//       return null;
//     default:
//       console.log('This is a multi-step form built with React.');
//       return null;
//   }
// };

// export default Form;
