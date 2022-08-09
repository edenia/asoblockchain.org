/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { ExpandLess } from '@material-ui/icons'
import { Typography, Box, Grid, Link } from '@material-ui/core'

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

const docs = [
  {
    id: 0,
    download: '/files/terms.pdf',
    title: 'firstDocument'
  },
  {
    id: 1,
    download: '/files/crypto.pdf',
    title: 'secondDocument'
  }
]

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
              <Grid item md={12} xs={12} className={classes.docs}>
                <div>
                  <Typography variant='h4'>{t('footerDocsTitle')}</Typography>
                </div>
                <div className={classes.links}>
                  {docs.map(doc => (
                    <div key={doc.id}>
                      <Link href={doc.download} download={t(doc.title)}>
                        <Typography variant='subtitle2'>
                          {t(doc.title)}
                        </Typography>
                      </Link>
                    </div>
                  ))}
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={5} xs={12}>
            <Box display='grid' pt={smDown ? 5 : 7}>
              <Link href='https://edenia.com/es'>
                <img
                  width='20%'
                  src='https://edenia.com/es/logos/logo-edenia-punto-verde.png'
                />
              </Link>
              <Typography variant='caption'>
                {t('copyright')}{' '}
                <Link href='https://edenia.com/es' underline='always'>
                  Edenia
                </Link>
                .
              </Typography>
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
