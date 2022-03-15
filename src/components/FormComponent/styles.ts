import { grey } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'

const Styles = makeStyles(theme => ({
  centerTextMobile: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    }
  },
  specialColorText: {
    color: theme.palette.primary.main
  },
  borderField: {
    borderRadius: 4,
    // border: `solid 1px ${grey[500]}`,
    backgroundColor: grey[300],
    '& .MuiInputBase-root': {
      color: theme.palette.common.black
      // '&:hover': {
      //   border: `solid 0.1px ${theme.palette.grey[500]}`,
      //   borderRadius: 4
      // }
    },
    '& .MuiFormLabel-root': {
      color: theme.palette.grey[500]
    }
  },
  bottonColor: {
    color: theme.palette.common.black,
    borderRadius: 18,
    padding: theme.spacing(1, 3),
    fontSize: '25px',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: '20px'
    }
  }
}))

export default Styles
