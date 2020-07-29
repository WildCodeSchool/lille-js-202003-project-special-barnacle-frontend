import React from 'react';
import './styleContact.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

  return (
    <div className="contact">
      <h1>Contact</h1>
      <form noValidate autoComplete="off">
        <span className={classes.root}>
          <TextField id="outlined-basic" label="Nom" variant="outlined" />
          <TextField id="outlined-basic" label="Prénom" variant="outlined" />
          <TextField id="outlined-basic" label="E-mail" variant="outlined" />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            variant="outlined"
            multiline
            rows={9}
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
    </div>
  );
};

export default Contact;
