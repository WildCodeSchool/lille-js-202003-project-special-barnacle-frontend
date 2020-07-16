import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { useSelector } from 'react-redux';

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

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const activeStep = useSelector((state) => state.counter.activeStep);
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
