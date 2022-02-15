import { makeStyles } from '@material-ui/core/styles'

const Styles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(8, 43),
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3, 3)
    }
  },
  formStyle: {
    padding: theme.spacing(1),
    borderRadius: '4px',
    border: 'solid 1px rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.12)'
  },
  floatBox: {
    float: 'right'
  },
  bottonStyle: {
    minWidth: 40,
    width: 40,
    height: 40,
    borderRadius: 4,
    padding: 0,
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: 'Ubuntu'
  }
}))

export default Styles
