import { grey } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'

const Styles = makeStyles(theme => ({
  borderField: {
    borderRadius: 4,
    backgroundColor: grey[300],
    '& .MuiInputBase-root': {
      color: theme.palette.common.black
    },
    '& .MuiFormLabel-root': {
      color: theme.palette.grey[500]
    }
  }
}))

export default Styles
