import {
  Dialog,
  Grid,
  Box,
  IconButton,
  DialogTitle,
  Typography,
  DialogActions
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { useTranslation } from 'next-i18next'
import { ReactNode } from 'react'

import { BaseButton, StepperComponent } from 'components'

type BaseDialogProps = {
  open: boolean
  title: string
  description: string
  handleClose(): void
  content: ReactNode
}

const BaseDialog: React.FC<BaseDialogProps> = ({
  open,
  handleClose,
  description,
  content,
  title
}) => {
  const { t } = useTranslation('common')

  return (
    <Dialog
      // fullScreen={true}
      maxWidth={'sm'}
      // className={classes.dialog}
      open={open}
      onClose={handleClose}
      aria-labelledby='responsive-dialog-title'
    >
      <Grid container>
        <Grid item md={12}>
          <Box bgcolor='primary.main'>
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={handleClose}
            >
              <CloseIcon fontSize='inherit' />
            </IconButton>
          </Box>
        </Grid>
        <Grid item md={12}>
          <DialogTitle
            id='responsive-dialog-title'
            // className={classes.title}
          >
            <Typography variant='h2'>{t(title)}</Typography>
            <Box pt={2}>
              <Typography variant='h4'>{description}</Typography>
            </Box>
          </DialogTitle>
        </Grid>
        <Grid item md={12}>
          {content}
        </Grid>
      </Grid>
    </Dialog>
  )
}

export default BaseDialog
