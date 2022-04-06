import { makeStyles } from '@material-ui/core/styles'

const Styles = makeStyles(theme => ({
  fabButtonPosition: {
    zIndex: 2,
    right: theme.spacing(3),
    bottom: theme.spacing(1),
    position: 'absolute',
    fontFamily: 'Ubuntu',
    fontSize: '16px',
    fontWeight: 'bold'
  }
}))

export default Styles
