import { makeStyles } from '@material-ui/core/styles'

const Styles = makeStyles(theme => ({
  boxPadding: {
    padding: theme.spacing(20, 25),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(10, 3)
    }
  },
  marginTitles: {
    marginBottom: theme.spacing(2)
  },
  itemsPadding: {
    marginTop: theme.spacing(10)
  },
  logoSizes: {
    [theme.breakpoints.down('sm')]: {
      transform: 'scale(0.9)'
    }
  }
}))

export default Styles
