import { makeStyles } from '@material-ui/core/styles'

const Styles = makeStyles(theme => ({
  drawerPaper: {
    width: '100%',
    height: '65px',
    padding: theme.spacing(0, 2),
    transition: 'height .9s ease-out'
  },
  hideDrawerPaper: {
    height: 0,
    transition: 'height .9s ease-out'
  },
  topBarStyle: {
    backgroundColor: theme.palette.primary.main,
    padding: '0 !important',
    minHeight: '0 !important'
  },
  topBarMobileStyle: {
    [theme.breakpoints.down('md')]: {
      backgroundColor: theme.palette.primary.main,
      height: 60,
      transition: 'height .6s ease-out'
    }
  },
  hideTopBar: {
    [theme.breakpoints.down('md')]: {
      backgroundColor: theme.palette.primary.main,
      height: 0,
      transition: 'height .6s ease-out'
    }
  },
  appBar: {
    [theme.breakpoints.down('sm')]: {
      boxShadow: 'none'
    }
  },
  paddingHeader: {
    marginLeft: theme.spacing(21),
    marginRight: theme.spacing(21),
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3)
    }
  },
  logo: {
    paddingTop: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  colorText: {
    color: theme.palette.common.white
  },
  drawerContent: {
    width: '65vw'
  },
  btnDrawer: {
    position: 'absolute',
    right: theme.spacing(1)
  },
  linkGruopBox: {
    margin: theme.spacing(2, 0)
  },
  logoBox: {
    margin: theme.spacing(2, 0, 4, 0),
    paddingLeft: theme.spacing(1)
  },
  linkGruopLabel: {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
    marginLeft: theme.spacing(3),
    color: theme.palette.common.black
  },
  drawer: {
    '& .MuiDrawer-paper': {
      backgroundColor: theme.palette.primary.main
    }
  },
  langItemBox: {
    padding: theme.spacing(0, 0.5)
  },
  langItemActive: {
    borderBottom: `solid 4px ${theme.palette.secondary.main}`,
    cursor: 'pointer'
  },
  langItem: {
    cursor: 'pointer',
    '&:hover': {
      fontWeight: 'bold'
    }
  },
  languageIndicator: {
    color: theme.palette.primary.dark
  },
  padding: {
    padding: theme.spacing(0.5, 1)
  },
  menuIconColor: {
    color: theme.palette.primary.dark
  }
}))

export default Styles
