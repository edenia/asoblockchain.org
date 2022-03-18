import { Snackbar, SnackbarProps } from '@material-ui/core'
import { Alert, AlertProps } from '@material-ui/lab'

type BaseSnackbarProps = {
  snackbarProps: SnackbarProps
  alertProps?: AlertProps
  message?: string
}

const BaseSnackbar: React.FC<BaseSnackbarProps> = ({
  snackbarProps,
  alertProps,
  message
}: BaseSnackbarProps) => {
  return (
    <Snackbar autoHideDuration={6000} {...snackbarProps}>
      <Alert elevation={6} variant='filled' severity='error' {...alertProps}>
        {typeof message === 'object' ? JSON.stringify(message) : message}
      </Alert>
    </Snackbar>
  )
}

export default BaseSnackbar
