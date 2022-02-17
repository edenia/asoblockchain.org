import { makeStyles } from '@material-ui/core/styles'

const Styles = makeStyles(theme => ({
  progressBarColor: {
    width: '148px !important',
    height: '148px !important',
    [theme.breakpoints.down('md')]: {
      width: '120px !important',
      height: '120px !important'
    }
  }
}))

export default Styles
