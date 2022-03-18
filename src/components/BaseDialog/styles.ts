import { makeStyles } from '@material-ui/core/styles'

const Styles = makeStyles({
  dialog: {
    '& .MuiDialog-paperScrollPaper': {
      minHeight: '366px'
    }
  },
  buttonStyle: {
    float: 'right'
  }
})

export default Styles
