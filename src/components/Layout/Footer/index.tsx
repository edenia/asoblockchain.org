import React from 'react'
import { Typography, Box, Grid, Link } from '@material-ui/core'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { BaseButton } from 'components'

import Styles from './styles'
import asoblokchainLogo from '/public/logos/asoblokchain-white-logo.svg'

type FooterProps = {
  isDarkTheme: boolean
  toggleThemeType(): void
}

const useStyles = Styles

const Footer: React.FC<FooterProps> = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <>
      <Box className={classes.root}>
        <Grid justifyContent='space-between' container>
          <Grid item md={5} xs={12}>
            <Grid container>
              <Grid item md={12} xs={12}>
                <Image src={asoblokchainLogo} alt='AsoBlockchain Logo' />
                <Box pt={3}>
                  <Typography variant='subtitle2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    rutrum suscipit nibh sed ultricies. Suspendisse in consequat
                    urna. Pellentesque mauris neque, efficitur ac egestas non,
                    euismod vehicula turpis. Donec sed nisl tristique, sagittis
                    nibh non, imperdiet magna.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={5} xs={12}>
            <Grid container>
              <Grid item md={12} xs={12}>
                <Box className={classes.floatBox}>
                  <Typography variant='h3'>
                    {t('subscribeNewsletter')}
                  </Typography>
                  <Box>
                    <form>
                      <input
                        className={classes.formStyle}
                        type='text'
                        id='email'
                        name='email'
                        placeholder='Email'
                      />
                      <BaseButton color='primary' variant='contained'>
                        Submit
                      </BaseButton>
                    </form>
                  </Box>
                  <Box>
                    <Typography variant='subtitle2'>
                      *Sollicitudin vitae dignissim elementum, cursus bibendum
                      lacus.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={5} xs={12}>
            <Typography variant='subtitle2'>
              © Derechos reservados. Creado por Edenia Labs.
            </Typography>
          </Grid>
          <Grid item md={5} xs={12}>
            <Box display='flex' className={classes.floatBox}>
              <Box display='flex'>
                <Box margin='auto'>
                  <Typography variant='subtitle2'>Subir al Inicio</Typography>
                </Box>
                <BaseButton
                  className={classes.bottonStyle}
                  color='primary'
                  variant='contained'
                >
                  ^
                </BaseButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Footer
