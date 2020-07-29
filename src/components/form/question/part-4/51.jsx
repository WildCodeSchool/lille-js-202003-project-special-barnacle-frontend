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

function Question51() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');
  const [answer5, setAnswer5] = useState('');
  const [answer6, setAnswer6] = useState('');

  const handleChange1 = (value) => {
    setAnswer1(value);
  };

  const handleChange2 = (value) => {
    setAnswer2(value);
  };

  const handleChange3 = (value) => {
    setAnswer3(value);
  };

  const handleChange4 = (value) => {
    setAnswer4(value);
  };

  const handleChange5 = (value) => {
    setAnswer5(value);
  };

  const handleChange6 = (value) => {
    setAnswer6(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ANSWER',
      question: 'question51',
      text: {
        raisonsociale: answer1,
        cp: answer2,
        ville: answer3,
        siret: answer4,
        creation: answer5,
        taxation: answer6,
      },
    });
  };

  return (
    <div className="form container-fluid pb-5">
      <h1 className="py-4 mb-3 text-center">Merci d&apos;indiquer :</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="col-8 col-lg-8 mx-auto">
          <div className="multipleForms row py-3">
            <p className="col-12 col-lg-4 my-lg-auto">La raison sociale :</p>
            <input
              className=" col-12 col-lg-8"
              type="text"
              placeholder="La raison sociale"
              label="question51"
              value={answer1}
              onChange={(e) => {
                handleChange1(e.target.value);
              }}
            />
          </div>

          <div className="multipleForms row py-3">
            <p className="col-12 col-lg-4 my-lg-auto">Code postal :</p>
            <input
              className="col-12 col-lg-8"
              type="text"
              placeholder="Code postal"
              label="question51"
              value={answer2}
              onChange={(e) => {
                handleChange2(e.target.value);
              }}
            />
          </div>

          <div className="multipleForms row py-3">
            <p className="col-12 col-lg-4 my-lg-auto">Ville :</p>
            <input
              className="col-12 col-lg-8"
              type="text"
              placeholder="Ville"
              label="question51"
              value={answer3}
              onChange={(e) => {
                handleChange3(e.target.value);
              }}
            />
          </div>

          <div className="multipleForms row py-3">
            <p className="col-12 col-lg-4 my-lg-auto">SIRET :</p>
            <input
              className="col-12 col-lg-8"
              type="text"
              placeholder="SIRET"
              label="question51"
              value={answer4}
              onChange={(e) => {
                handleChange4(e.target.value);
              }}
            />
          </div>

          <div className="multipleForms row py-3">
            <p className="col-12 col-lg-4 my-lg-auto">Date de création :</p>
            <input
              className="col-12 col-lg-8"
              type="text"
              placeholder="Date de création"
              label="question51"
              value={answer5}
              onChange={(e) => {
                handleChange5(e.target.value);
              }}
            />
          </div>

          <div className="multipleForms row py-3">
            <p className="col-12 col-lg-4 my-lg-auto">
              Mode de taxation (IR / IS / Je ne sais pas) :
            </p>
            <input
              className="col-12 col-lg-8"
              type="text"
              placeholder="Mode de taxation"
              label="question51"
              value={answer6}
              onChange={(e) => {
                handleChange6(e.target.value);
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

export default Question51;
