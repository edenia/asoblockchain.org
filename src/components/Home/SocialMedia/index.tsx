import { Grid, Box, Typography, Link } from '@material-ui/core'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import facebookIcon from '/public/icons/facebook-icon.svg'
import messangerIcon from '/public/icons/messanger-icon.svg'
import twitterIcon from '/public/icons/twitter-icon.svg'
import whatsappIcon from '/public/icons/whatsapp-icon.svg'
import youtubeIcon from '/public/icons/youtube-icon.svg'
import { useSizes } from 'hooks'

import useStyles from './styles'

const socialMediaList = [
  {
    id: 0,
    icon: whatsappIcon,
    altText: '',
    link: 'https://evodex.io/exchange'
  },
  {
    id: 1,
    icon: messangerIcon,
    altText: '',
    link: 'https://evodex.io/exchange'
  },
  {
    id: 2,
    icon: facebookIcon,
    altText: '',
    link: 'https://smartgate.tech/es'
  },
  {
    id: 3,
    icon: twitterIcon,
    altText: '',
    link: 'https://evodex.io/exchange'
  },
  {
    id: 4,
    icon: youtubeIcon,
    altText: '',
    link: 'https://evodex.io/exchange'
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
        <Grid key={item.id} item md={1} xs={2}>
          <Box width={smDown ? '85%' : '60%'}>
            <Link href={item.link} target='_blank'>
              <Image src={item.icon} />
            </Link>
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}

export default SocialMedia
