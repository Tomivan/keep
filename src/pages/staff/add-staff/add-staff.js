import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UserInfo from './user-info/user-info';
import JobInfo from './job-info/job-info';
import Authentication from './authentication/authentication';
import Review from './Review/review';
import Sidebar from '../../../components/sidebar/sidebar';
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import { navigate } from '@reach/router';
import './add-staff.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['User Information', 'Job Information', 'Authentication', 'Review'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <UserInfo />;
    case 1:
      return <JobInfo />;
    case 2:
      return <Authentication />;
    case 3:
      return <Review />;
    default:
      return 'Unknown stepIndex';
  }
}
const goBack = () => {
  navigate('/justification-of-award');
}
export default function AddStaff() {
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
    <>
    <Sidebar />
    <div className="heading">
                <div className="heading-left">
                <Icon path={mdiArrowLeft} size={1.5} class="icon" onClick={goBack}/>
                <h3>Create Award</h3>
                </div>
                <div className="heading-right">
                    <img src="" alt="" />
                    <p>Gift Okobia</p>
                </div>
      </div>
    <div className={classes.root} id="staff-container">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
