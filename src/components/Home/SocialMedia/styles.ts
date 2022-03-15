import { makeStyles } from '@material-ui/core/styles'

const Styles = makeStyles(theme => ({
  boxPadding: {
    padding: theme.spacing(0, 34, 20, 34),
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(10, 3)
    }
  },
  iconStyle: {
    width: 50
  }
}))

export default Styles
