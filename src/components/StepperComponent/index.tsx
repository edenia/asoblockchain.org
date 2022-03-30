import { Typography, Box } from '@material-ui/core'
import React, { ReactNode } from 'react'
import { useTranslation } from 'next-i18next'

import { BaseButton } from 'components'

import useStyles from './styles'

type StepperComponentProps = {
  getStepContent(activeStep: number, touched: any, errors: any): ReactNode
  setActiveStep(activeStep: number): void
  buttonSend: ReactNode
  nextButton: ReactNode
  amountPages: number
  activeStep: number
  touched: any
  errors: any
}

const StepperComponent: React.FC<StepperComponentProps> = ({
  getStepContent,
  setActiveStep,
  amountPages,
  activeStep,
  buttonSend,
  nextButton,
  touched,
  errors
}) => {
  const { t } = useTranslation()
  const classes = useStyles()

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
                {t('back')}
              </BaseButton>
              {activeStep === 0 ? nextButton : buttonSend}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default StepperComponent
