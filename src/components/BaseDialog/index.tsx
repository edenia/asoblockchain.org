import {
  Dialog,
  Grid,
  Box,
  IconButton,
  DialogTitle,
  Typography
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { useTranslation } from 'next-i18next'
import { ReactNode } from 'react'

import useStyles from './styles'

type BaseDialogProps = {
  fullScreen: boolean
  description: string
  handleClose(): void
  content: ReactNode
  title: string
  open: boolean
}

const BaseDialog: React.FC<BaseDialogProps> = ({
  handleClose,
  description,
  fullScreen,
  content,
  open,
  title
}) => {
  const { t } = useTranslation('common')
  const classes = useStyles()

  return (
    <Dialog
      fullScreen={fullScreen}
      maxWidth={'sm'}
      className={classes.dialog}
      open={open}
      onClose={handleClose}
      aria-labelledby='responsive-dialog-title'
    >
      <Grid container>
        <Grid item md={12} xs={12}>
          <Box bgcolor='primary.main' pr={1} pt={1}>
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              className={classes.buttonStyle}
              onClick={handleClose}
            >
              <CloseIcon fontSize='inherit' />
            </IconButton>
          </Box>
        </Grid>
        <Grid item md={12} xs={12}>
          <DialogTitle id='responsive-dialog-title'>
            <Typography variant='h2'>{t(title)}</Typography>
            <Box pt={2}>
              <Typography variant='h4'>{description}</Typography>
            </Box>
          </DialogTitle>
        </Grid>
        <Grid item md={12} xs={12}>
          {content}
        </Grid>
      </Grid>
    </Dialog>
  )
}

export default BaseDialog
