import React, { useState } from 'react';
import axios from 'axios';
import './styleContact.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { backend } from '../../conf';

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

const Contact = () => {
  const classes = useStyles();

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');

  const handleChangeNom = (value) => {
    setNom(value);
  };

  const handleChangePrenom = (value) => {
    setPrenom(value);
  };
  const handleChangeMail = (value) => {
    setMail(value);
  };
  const handleChangeMessage = (value) => {
    setMessage(value);
  };

  const handleSubmit = (e) => {
    axios.post(`${backend}/contact`, { nom, prenom, mail, message });
    e.preventDefault();
  };

  return (
    <div className="contact">
      <h1>Contact</h1>
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <span className={classes.root}>
          <TextField
            id="outlined-basic"
            label="Nom"
            variant="outlined"
            onChange={(e) => {
              handleChangeNom(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Prénom"
            variant="outlined"
            onChange={(e) => {
              handleChangePrenom(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            onChange={(e) => {
              handleChangeMail(e.target.value);
            }}
          />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            variant="outlined"
            multiline
            rows={9}
            onChange={(e) => {
              handleChangeMessage(e.target.value);
            }}
          />
        </span>
        <br />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
        >
          Envoyer
        </Button>
      </form>

      {nom}
      {prenom}
      {mail}
      {message}
    </div>
  );
};

export default Contact;
