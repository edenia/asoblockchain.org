import { Box, Grid, Typography } from '@material-ui/core'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import Image from 'next/image'

import { useSizes } from 'hooks'
import { BaseButton, BaseDialog, FormComponent } from 'components'
import bgImage from '/public/images/background-image.jpg'
import asoblokchainLogo from '/public/logos/asoblokchain-white-logo.svg'
import likeIcon from '/public/icons/like-icon.svg'

const Header: React.FC = () => {
  const { t } = useTranslation('common')
  const { mdDown } = useSizes()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

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
        height={typeof window !== 'undefined' ? window.innerHeight : 0}
      >
        <Grid container justifyContent='flex-end'>
          <Grid item md={12} xs={12}>
            <Box marginY={8} px={mdDown ? 2 : 0}>
              <Image src={asoblokchainLogo} alt='Asoblokchain Logo' />
            </Box>
            <Typography color='textSecondary' variant='h5' component='div'>
              <Box marginY={8} px={mdDown ? 2 : 55}>
                {t('homeHeaderSubtitleOne')}
              </Box>
            </Typography>
            <Box mb={8}>
              <BaseButton
                onClick={handleOpen}
                color='secondary'
                variant='contained'
              >
                {t('joinAssociation')}
              </BaseButton>
            </Box>
          </Grid>
          <BaseDialog
            open={open}
            title='Formulario de afiliación ASOBLOCKCHAIN'
            handleClose={handleClose}
            description='Agradecemos su interés por ser parte de esta iniciativa, favor completar la información que se solicita.'
            content={<FormComponent />}
          />
          {/* <Grid item md={2}>
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
          </Grid> */}
        </Grid>
      </Box>
    </Box>
  )
}

export default Header
