import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

// function getStepContent(step) {
//   switch (step) {
//     case 1:
//       return 'Formulaire Projet';
//     case 2:
//       return 'Formulaire Financement';
//     case 3:
//       return 'Formulaire Situation Pro';
//     case 4:
//       return 'Formulaire idéntité';
//     case 5:
//       return 'Résumé des réponses';
//     case 6:
//       return 'Merci, le formulaire est bien envoyé!';
//     default:
//       return 'Unknown step';
//   }
// }

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const activeStep = React.useState(0);
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
