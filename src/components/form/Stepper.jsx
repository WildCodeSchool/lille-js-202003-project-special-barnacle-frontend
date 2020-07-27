import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'background',
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    'Projet',
    'Financement',
    'Situation professionelle',
    'Identité',
    'Résumé',
    'Validation',
  ];
}

export default function HorizontalLinearStepper({ activeStep }) {
  const classes = useStyles();
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} className={classes.root}>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
}

HorizontalLinearStepper.propTypes = {
  activeStep: PropTypes.number.isRequired,
};
