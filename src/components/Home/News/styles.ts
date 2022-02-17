import { makeStyles } from '@material-ui/core/styles'
import { extraColors } from 'config/theme'

const Styles = makeStyles(theme => ({
  boxPadding: {
    padding: theme.spacing(0, 43, 20, 43),
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(10, 3)
    }
  },
  borderBox: {
    borderWidth: '2px',
    borderRight: 'solid',
    borderImage: `radial-gradient(${extraColors.boxBorderPrimary}, ${extraColors.boxBorderSecondary}) 1`
  },
  logoSizes: {
    [theme.breakpoints.down('sm')]: {
      transform: 'scale(0.9)'
    }
  },
  cardImageStyle: {
    objectFit: 'cover',
    objectPosition: 'bottom',
    height: '300px'
  },
  cardStyle: {
    border: 'none !important'
  }
}))

export default Styles
