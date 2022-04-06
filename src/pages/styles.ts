import { makeStyles } from '@material-ui/core/styles'

const Styles = makeStyles(theme => ({
  fabButtonPosition: {
    zIndex: 2,
    right: theme.spacing(3),
    bottom: theme.spacing(1),
    position: 'absolute',
    fontFamily: 'Ubuntu',
    fontSize: '16px',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      right: theme.spacing(0.5)
    }
  }
}))

export default Styles
