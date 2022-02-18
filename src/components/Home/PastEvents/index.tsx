import { Grid, Box, Typography } from '@material-ui/core'
import { useTranslation } from 'next-i18next'

import Carrusel from '../../Carrusel'

import useStyles from './styles'

const PastEvents: React.FC = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid container justifyContent='center' className={classes.boxPadding}>
      <Grid item md={12} xs={12}>
        <Box textAlign='center'>
          <Typography variant='h1'>{t('pastEvents')}</Typography>
        </Box>
      </Grid>
      <Grid item md={12} xs={11}>
        <Carrusel />
      </Grid>
    </Grid>
  )
}

export default PastEvents
