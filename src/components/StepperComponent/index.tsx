import { Typography, Box } from '@material-ui/core'
import React, { ReactNode, useState } from 'react'

import { BaseButton } from 'components'

import useStyles from './styles'

type StepperComponentProps = {
  getStepContent(activeStep: number, touched: any, errors: any): ReactNode
  ButtonSend: ReactNode
  amountPages: number
  nextPage: number
  touched: any
  errors: any
}

const StepperComponent: React.FC<StepperComponentProps> = ({
  getStepContent,
  amountPages,
  ButtonSend,
  nextPage,
  touched,
  errors
}) => {
  const [activeStep, setActiveStep] = useState(0)
  const classes = useStyles()

  const handleNext = () => {
    if (nextPage !== 0) setActiveStep(nextPage)
  }

  const handleBack = () => {
    setActiveStep(0)
  }

  return (
    <Box className={classes.root}>
      <Box>
        {activeStep === amountPages ? (
          <Box>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
          </Box>
        ) : (
          <Box>
            {getStepContent(activeStep, touched, errors)}
            <Box pt={4} pb={2}>
              <BaseButton
                disabled={activeStep === 0}
                onClick={handleBack}
                color='secondary'
                variant='outlined'
                className={classes.backButton}
              >
                Back
              </BaseButton>
              {activeStep === 0 ? (
                <BaseButton
                  color='secondary'
                  variant='contained'
                  onClick={handleNext}
                >
                  Next
                </BaseButton>
              ) : (
                ButtonSend
              )}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default StepperComponent
