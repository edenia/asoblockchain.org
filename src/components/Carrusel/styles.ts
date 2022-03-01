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
    marginTop: theme.spacing(10),
    background: theme.palette.common.white,
    paddingBottom: theme.spacing(15),
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
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
