import { makeStyles } from '@material-ui/core/styles'

const Styles = makeStyles(theme => ({
  boxPadding: {
    padding: theme.spacing(14, 34, 12, 34),
    backgroundColor: theme.palette.grey[100],
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(10, 3)
    }
  },
  photoStyle: {
    borderRadius: '50%'
  }
}))

export default Styles
