import { Button, ButtonProps } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const BaseButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const classes = useStyles()

  return (
    <Button
      variant='contained'
      size='large'
      color='secondary'
      className={classes.button}
      {...props}
    />
  )
}

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius: 4,
    padding: theme.spacing(1, 3),
    fontSize: '16px',
    fontWeight: 'bold',
    fontFamily: 'Ubuntu'
  }
}))

export default BaseButton
