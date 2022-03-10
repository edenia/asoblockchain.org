import { makeStyles } from '@material-ui/core/styles'

const Styles = makeStyles(theme => ({
  boxPadding: {
    padding: theme.spacing(0, 34, 10, 34),
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(10, 3)
    }
  },
  pointStyle: {
    width: '10px',
    marginTop: theme.spacing(0.5)
  }
}))

export default Styles
