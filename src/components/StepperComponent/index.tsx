import React, { ReactNode } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { number } from 'yup'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    backButton: {
      marginRight: theme.spacing(1)
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  })
)

// function getStepContent(stepIndex: number) {
//   switch (stepIndex) {
//     case 0:
//       return 'Select campaign settings...'
//     case 1:
//       return 'What is an ad group anyways?'
//     case 2:
//       return 'This is the bit I really care about!'
//     default:
//       return 'Unknown stepIndex'
//   }
// }

type StepperComponentProps = {
  getStepContent(activeStep: number): ReactNode
  amountPages: number
  nextPage: number
}

const StepperComponent: React.FC<StepperComponentProps> = ({
  getStepContent,
  amountPages,
  nextPage
}) => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep(nextPage)
  }

  const handleBack = () => {
    setActiveStep(0)
  }

  return (
    <div className={classes.root}>
      <div>
        {activeStep === amountPages ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button
                disabled={nextPage === 0}
                variant='contained'
                color='primary'
                onClick={handleNext}
              >
                {activeStep === amountPages - 1 ? 'Send' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default StepperComponent
