import { makeStyles } from '@material-ui/core/styles'

const Styles = makeStyles(theme => ({
  boxPadding: {
    padding: theme.spacing(0, 43, 20, 43),
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(10, 3)
    }
  }
}))

export default Styles
