import React, { ReactNode } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'

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
  ButtonSend: ReactNode
  amountPages: number
  nextPage: number
}

const StepperComponent: React.FC<StepperComponentProps> = ({
  getStepContent,
  amountPages,
  ButtonSend,
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
              {activeStep === 0 ? (
                <Button
                  disabled={nextPage === 0}
                  variant='contained'
                  color='primary'
                  onClick={handleNext}
                >
                  Next
                </Button>
              ) : (
                ButtonSend
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default StepperComponent
