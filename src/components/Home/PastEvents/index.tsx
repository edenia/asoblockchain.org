import { Grid, Box, Typography } from '@material-ui/core'
import { useTranslation } from 'next-i18next'

import Carrusel from '../../Carrusel'

import useStyles from './styles'

const contents = [
  {
    id: 0,
    title: 'ticoblockchain2019',
    subTitle: 'ticoblockchain2019Des',
    link: 'https://medium.com/@gaboesquivel/ticoblockchain-2019-recap-39cf5112394f'
  },
  {
    id: 1,
    title: 'ticoblockchain2021',
    subTitle: 'ticoblockchain2021Des',
    link: 'https://ticoblockchain.cr/Landing'
  }
]

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
        <Carrusel contents={contents} />
      </Grid>
    </Grid>
  )
}

export default PastEvents
