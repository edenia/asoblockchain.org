import React from 'react'
import { Typography, Box, Grid, Link } from '@material-ui/core'
import { ExpandLess } from '@material-ui/icons'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { BaseButton } from 'components'

import asoblokchainLogo from '/public/logos/asoblokchain-white-logo.svg'
import { useSizes } from 'hooks'

import Styles from './styles'

type FooterProps = {
  isDarkTheme: boolean
  scrollTop?(): void
  toggleThemeType(): void
}

const useStyles = Styles

const Footer: React.FC<FooterProps> = ({ scrollTop }) => {
  const { t } = useTranslation()
  const { smDown } = useSizes()
  const classes = useStyles()

  return (
    <>
      <Box className={classes.root}>
        <Grid justifyContent='space-between' container>
          <Grid item md={5} xs={12}>
            <Grid container>
              <Grid item md={12} xs={12}>
                <Box width='50%'>
                  <Image src={asoblokchainLogo} alt='AsoBlockchain Logo' />
                </Box>
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
                  <form>
                    <Box pt={smDown ? 2 : 5} display='flex'>
                      <Box width='70%'>
                        <input
                          className={classes.formStyle}
                          type='text'
                          id='email'
                          name='email'
                          placeholder='Email'
                        />
                      </Box>
                      <Box width='30%'>
                        <BaseButton color='primary' variant='contained'>
                          {t('submit')}
                        </BaseButton>
                      </Box>
                    </Box>
                  </form>
                  <Box pt={1}>
                    <Typography variant='caption'>
                      *Sollicitudin vitae dignissim elementum, cursus bibendum
                      lacus.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={5} xs={6}>
            <Box pt={smDown ? 5 : 7}>
              <Typography variant='caption'>{t('copyright')}</Typography>
            </Box>
          </Grid>
          <Grid item md={5} xs={6}>
            <Box
              display='flex'
              pt={smDown ? 4 : 6}
              className={classes.floatButton}
            >
              <Box display='flex'>
                <Box margin='auto' pr={2}>
                  <Typography variant='subtitle2'>{t('goUp')}</Typography>
                </Box>
                <BaseButton
                  className={classes.bottonStyle}
                  onClick={scrollTop}
                  color='primary'
                  variant='contained'
                >
                  <ExpandLess />
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
