import { Grid, Box, Typography } from '@material-ui/core'
import { useTranslation } from 'next-i18next'

import Carrusel from '../../Carrusel'

import useStyles from './styles'

const PastEvents: React.FC = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid
      container
      justifyContent='space-evenly'
      className={classes.boxPadding}
    >
      <Grid item md={12}>
        <Box textAlign='center' pb={3}>
          <Typography variant='h1'>{t('PastEvents')}</Typography>
        </Box>
      </Grid>
      <Grid item md={12}>
        <Carrusel />
      </Grid>
    </Grid>
  )
}

export default PastEvents
