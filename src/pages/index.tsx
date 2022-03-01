import type { NextPage, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'next-i18next'

import {
  Header,
  InformingEducation,
  PastEvents,
  News,
  SocialMedia,
  JoinAssociation
} from 'components'
import { routeUtils } from 'utils'
import i18nUtils from 'utils/i18n'

const Home: NextPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <NextSeo title={t('homeMetaTitle')} />
      <Header />
      <InformingEducation />
      <JoinAssociation />
      <PastEvents />
      <News />
      <SocialMedia />
    </>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const locale = routeUtils.getAsString(context.locale)
  const translations = await i18nUtils.getServerSideTranslations(locale)

  return {
    props: {
      ...translations
    }
  }
}

export default Home
