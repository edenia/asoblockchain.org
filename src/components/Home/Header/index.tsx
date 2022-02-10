import { Box, Grid, Typography } from '@material-ui/core'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { useSizes } from 'hooks'
import { BaseButton } from 'components'
import bgImage from '/public/images/background-header-home.jpg'
import asoblokchainLogo from '/public/logos/asoblokchain-white-logo.svg'
import likeIcon from '/public/icons/like-icon.svg'

const Header: React.FC = () => {
  const { t } = useTranslation('common')
  const { mdDown } = useSizes()

  return (
    <Box position='relative' textAlign='center'>
      <Box zIndex={1}>
        <Image src={bgImage} alt='Header' layout='fill' objectFit='cover' />
      </Box>
      <Box
        display='flex'
        alignItems='center'
        position='relative'
        zIndex={2}
        mt={mdDown ? 0 : 6}
        // px={mdDown ? 2 : 10}
        height={670}
      >
        <Grid container justifyContent='flex-end'>
          <Grid item md={12} xs={12}>
            <Box marginY={8}>
              <Image src={asoblokchainLogo} alt='Asoblokchain Logo' />
            </Box>
            <Typography color='textPrimary' variant='h5' component='div'>
              <Box marginY={8}>{t('homeHeaderSubtitleOne')}</Box>
            </Typography>
            <Box mb={8}>
              <BaseButton color='primary' variant='contained'>
                {t('joinAssociation')}
              </BaseButton>
            </Box>
          </Grid>
          <Grid item md={2}>
            <Box
              padding={1}
              bgcolor='common.black'
              display='flex'
              justifyContent='space-around'
            >
              <Image src={likeIcon} alt='Like icon' />
              <Typography color='textSecondary' align='right' variant='h5'>
                {t('claim')} <br />
                {t('freeNft')}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Header
