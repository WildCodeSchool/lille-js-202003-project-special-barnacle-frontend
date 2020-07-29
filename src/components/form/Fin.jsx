import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledFin = styled.section`
  h1 {
    color: #2b95ad;
    text-transform: uppercase;
  }

  h2 {
    color: #2b95ad;
    margin-top: 1.2em;
    margin-bottom: 0.7em;
  }
  h3 {
    color: #2b95ad;
    margin-top: 1.2em;
    margin-bottom: 0.7em;
  }

  .title {
    color: #2b95ad;
    text-align: center;
  }

  p {
    color: grey;
    font-size: 1rem;
    text-align: justify;
    line-height: 2em;
    padding: 0 2vw;
  }

  li {
    list-style: inside;
  }

  thead {
    color: #8cc542;
    height: 200px;
    border: 1px solid #808083;
  }

  tbody {
    height: 200px;
  }

  .redPrice {
    color: #dc143c;
  }

  ol li {
    list-style-type: decimal;
  }
  button {
    width: 15vw;
    margin: 40px 20px;
  }

  @media screen and (max-width: 640px) {
    th,
    td {
      font-size: 12px;
    }

    h2 {
      text-align: center;
    }
  }
`;

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

function Fin({ setActiveStep }) {
  const classes = useStyles();

  useEffect(() => {
    setActiveStep(5);
  }, [setActiveStep]);

  return (
    <StyledFin>
      <div className="container-fluid p-lg-5 p-2">
        <div className="apropos">
          <h1 className="text-center my-5">MERCI</h1>
          <h3 className="text-center">
            Negodi vous remercie d&apos;avoir rempli notre formulaire!
          </h3>
          <p className="text-center">
            Vos réponses ont bien été enregistrées, nous prendrons contact avec
            vous dès que possible afin de finaliser vos démarches.
          </p>
        </div>
        <div className="text-center">
          <Link to="/">
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
            >
              Retour accueil
            </Button>
          </Link>
        </div>
      </div>
    </StyledFin>
  );
}

Fin.propTypes = {
  setActiveStep: PropTypes.number.isRequired,
};

export default Fin;
