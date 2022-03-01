import { Grid, Box, Typography } from '@material-ui/core'
import { FiberManualRecord } from '@material-ui/icons'
import { useTranslation } from 'next-i18next'

import { BaseButton } from 'components'
import { useSizes } from 'hooks'

import useStyles from './styles'

const socialMediaList = [
  {
    id: 0,
    title: 'organizationsCompanies',
    content: 'organizationsCompaniesDesc'
  },
  {
    id: 1,
    title: 'startups',
    content: 'startupsDesc'
  },
  {
    id: 2,
    title: 'individualsTitle',
    content: 'individualsDesc'
  }
]

const JoinAssociation: React.FC = () => {
  const { t } = useTranslation()
  const { smDown } = useSizes()
  const classes = useStyles()

  return (
    <Grid container justifyContent={'center'} className={classes.boxPadding}>
      <Grid item md={9} xs={12}>
        <Box textAlign='center' pb={7}>
          <Typography variant='h1'>{t('socialMedia')}</Typography>
        </Box>
        <Box textAlign='center' pb={7}>
          <Typography variant='body1'>{t('joinAssociationDesc')}</Typography>
        </Box>
        {socialMediaList.map(item => (
          <Box key={item.id} display='flex' pb={2}>
            <Box pr={1}>
              <FiberManualRecord
                className={classes.pointStyle}
                color='secondary'
              />
            </Box>
            <Typography align='left' variant='body1'>
              <Typography variant='subtitle1' display='inline'>
                {t(item.title)}
              </Typography>{' '}
              {t(item.content)}
            </Typography>
          </Box>
        ))}
        <Box mt={8}>
          <BaseButton color='secondary' variant='contained'>
            {t('joinAssociation')}
          </BaseButton>
        </Box>
      </Grid>
    </Grid>
  )
}

export default JoinAssociation
