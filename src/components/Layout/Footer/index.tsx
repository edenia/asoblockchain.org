import React from 'react'
import { Typography, Box, Grid } from '@material-ui/core'
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
                  <Typography variant='subtitle2'>{t('footerText')}</Typography>
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
                      <Box width={smDown ? '60%' : '70%'}>
                        <input
                          className={classes.formStyle}
                          type='text'
                          id='email'
                          name='email'
                          placeholder='Email'
                        />
                      </Box>
                      <Box width={smDown ? '40%' : '30%'}>
                        <BaseButton
                          className={classes.button}
                          color='secondary'
                          fullWidth={smDown}
                          variant='contained'
                        >
                          {t('subscribe')}
                        </BaseButton>
                      </Box>
                    </Box>
                  </form>
                  <Box pt={1}>
                    <Typography variant='caption'>{t('newsletter')}</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={5} xs={12}>
            <Box pt={smDown ? 5 : 7}>
              <Typography variant='caption'>{t('copyright')}</Typography>
            </Box>
          </Grid>
          <Grid item md={5} xs={12}>
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
                  color='secondary'
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
