import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
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

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Formulaire Projet';
    case 1:
      return 'Formulaire Financement';
    case 2:
      return 'Formulaire Situation Pro';
    case 3:
      return 'Formulaire idéntité';
    case 4:
      return 'Résumé des réponses';
    case 5:
      return 'Merci, le formulaire est bien envoyé!';
    default:
      return 'Unknown step';
  }
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {/* ESlint refuse le passage de props alors on les a retiré et on a gardé le code d'origin en comm au cas où.
         {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {}; */}
        {steps.map((label) => {
          return (
            // ESlint refuse le passage de props alors on les a retiré et on a gardé le code d'origin en comm au cas où.
            // <Step key={label} {...stepProps}>
            //   <StepLabel {...labelProps}>{label}</StepLabel>
            // </Step>
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
