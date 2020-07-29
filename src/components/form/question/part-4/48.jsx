import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../styleForm.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '100ch',
      background: '#fff',
    },
  },
  button: {
    margin: theme.spacing(4),
  },
}));

function Question48() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');

  const handleChange1 = (value) => {
    setAnswer1(value);
  };

  const handleChange2 = (value) => {
    setAnswer2(value);
  };

  const handleChange3 = (value) => {
    setAnswer3(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ANSWER',
      question: 'question48',
      text: {
        portable: answer1,
        fixe: answer2,
        mail: answer3,
      },
    });
  };

  return (
    <div className="form container-fluid pb-5">
      <h1 className="py-4 mb-3 text-center">Quel est:</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="col-8 col-lg-8 mx-auto">
          <div className="multipleForms row py-3">
            <p className="col-12 col-lg-4 my-lg-auto">Numéro de portable :</p>
            <input
              className=" col-12 col-lg-8"
              type="text"
              placeholder="Numéro de portable"
              label="question48"
              value={answer1}
              onChange={(e) => {
                handleChange1(e.target.value);
              }}
            />
          </div>

          <div className="multipleForms row py-3">
            <p className="col-12 col-lg-4 my-lg-auto">Numéro de fixe :</p>
            <input
              className="col-12 col-lg-8"
              type="text"
              placeholder="Numéro de fixe"
              label="question48"
              value={answer2}
              onChange={(e) => {
                handleChange2(e.target.value);
              }}
            />
          </div>

          <div className="multipleForms row py-3">
            <p className="col-12 col-lg-4 my-lg-auto">Mail :</p>
            <input
              className="col-12 col-lg-8"
              type="text"
              placeholder="Mail"
              label="question48"
              value={answer3}
              onChange={(e) => {
                handleChange3(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="text-center">
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
          >
            Valider
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Question48;
