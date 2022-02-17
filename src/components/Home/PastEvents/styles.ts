import { makeStyles } from '@material-ui/core/styles'
import { extraColors } from 'config/theme'

const Styles = makeStyles(theme => ({
  boxPadding: {
    padding: theme.spacing(10, 43, 10, 43),
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(10, 3)
    }
  },
  borderBox: {
    borderWidth: '2px',
    borderRight: 'solid',
    borderImage: `radial-gradient(${extraColors.boxBorderPrimary}, ${extraColors.boxBorderSecondary}) 1`
  }
}))

export default Styles
