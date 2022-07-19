import { useCallback, useEffect, useState } from 'react'
import { NextComponentType } from 'next'
import { AppProps, AppContext, AppInitialProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { DefaultSeo } from 'next-seo'
import { LocalizationProvider } from '@material-ui/pickers'
import DateFnsAdapter from '@material-ui/pickers/adapter/date-fns'
import { useRouter } from 'next/router'
import { appWithTranslation } from 'next-i18next'

import { themeConfig, seoConfig, analyticsConfig, i18nConfig } from 'config'
import { Locale } from 'config/i18n'
import { analyticsUtils } from 'utils'
import { Layout } from 'components'
import './styles.css'

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps
}: AppProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)
  const { locale, events } = useRouter()
  const currentLocale = (locale as Locale) || i18nConfig.defaultLocale

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      analyticsUtils.pageview(url)
    }

    events.on('routeChangeComplete', handleRouteChange)

    return () => {
      events.off('routeChangeComplete', handleRouteChange)
    }
  }, [events])

  const toggleThemeType = useCallback((): void => {
    setIsDarkTheme(isDark => !isDark)
  }, [])

  return (
    <>
      <DefaultSeo {...seoConfig} />

      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.trackingCode}`}
      />

      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${analyticsConfig.trackingCode}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
      <Script
        id='newsletter-script'
        dangerouslySetInnerHTML={{
          __html: `
            window.CustomSubstackWidget = {
            substackUrl: "asoblockchain.substack.com",
            placeholder: "example@gmail.com",
            buttonText: "Join Newsletter",
            theme: "orange"
            }
          `
        }}
      />
      <Script src='https://substackapi.com/widget.js' async></Script>

      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <meta
          name='theme-color'
          content={
            isDarkTheme
              ? themeConfig.darkTheme.palette.primary.main
              : themeConfig.lightTheme.palette.primary.main
          }
        />
      </Head>
      <ThemeProvider
        theme={isDarkTheme ? themeConfig.darkTheme : themeConfig.lightTheme}
      >
        <LocalizationProvider
          dateAdapter={DateFnsAdapter}
          locale={i18nConfig?.dateFnsLocaleMap?.[currentLocale]}
        >
          <CssBaseline />
          <Layout isDarkTheme={isDarkTheme} toggleThemeType={toggleThemeType}>
            <Component {...pageProps} />
          </Layout>
        </LocalizationProvider>
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(MyApp)
