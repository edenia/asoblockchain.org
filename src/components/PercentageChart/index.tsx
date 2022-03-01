import React from 'react'
import { CircularProgress, Typography, Box } from '@material-ui/core'

import { extraColors } from 'config/theme'

import useStyles from './styles'

type PercentageChartProps = {
  progress: number
  color: number
  isPercentage: boolean
}

const PercentageChart: React.FC<PercentageChartProps> = ({
  progress,
  color,
  isPercentage
}) => {
  const classes = useStyles()

  const SelectedColor = (color: number) => {
    switch (color) {
      case 1: {
        return extraColors.percentageFirtsColor
      }
      case 2: {
        return extraColors.percentageSecondColor
      }
      case 3: {
        return extraColors.percentageThirdColor
      }
      default: {
        return extraColors.percentageQuarterColor
      }
    }
  }

  return (
    <Box position='relative' display='inline-flex'>
      <CircularProgress
        className={classes.progressBarColor}
        style={{ color: SelectedColor(color) }}
        variant='determinate'
        value={progress}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position='absolute'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Typography variant='h2' component='div'>{`${Math.round(progress)}${
          isPercentage ? '%' : ''
        }`}</Typography>
      </Box>
    </Box>
  )
}

export default PercentageChart
