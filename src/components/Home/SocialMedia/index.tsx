import { Grid, Box, Typography, Link } from '@material-ui/core'
import { LinkedIn, Twitter } from '@material-ui/icons'
import { useTranslation } from 'next-i18next'

import { useSizes } from 'hooks'

import useStyles from './styles'

const socialMediaList = [
  {
    id: 0,
    icon: <LinkedIn color='action' style={{ fontSize: '50px' }} />,
    altText: 'LinkedIn icon',
    link: 'https://www.linkedin.com/company/asoblockchain/about/'
  },
  {
    id: 1,
    icon: <Twitter color='action' style={{ fontSize: '50px' }} />,
    altText: 'Twitter icon',
    link: 'https://mobile.twitter.com/AsoBlockchainCR'
  }
]

const SocialMedia: React.FC = () => {
  const { t } = useTranslation()
  const { smDown } = useSizes()
  const classes = useStyles()

  return (
    <Grid
      container
      justifyContent={smDown ? 'space-around' : 'center'}
      className={classes.boxPadding}
    >
      <Grid item md={12} xs={12}>
        <Box textAlign='center' pb={7}>
          <Typography variant='h2'>{t('socialMedia')}</Typography>
        </Box>
      </Grid>
      {socialMediaList.map(item => (
        <Grid key={item.id} item md={2} xs={4}>
          <Box textAlign='center'>
            <Link href={item.link} target='_blank'>
              {item.icon}
            </Link>
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}

export default SocialMedia
