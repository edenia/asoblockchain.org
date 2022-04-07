import type { NextPage, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'next-i18next'

import {
  InformingEducation,
  JoinAssociation,
  FabComponent,
  SocialMedia,
  PastEvents,
  ContactUs,
  Header,
  News
} from 'components'
import { routeUtils } from 'utils'
import i18nUtils from 'utils/i18n'

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <NextSeo
        title={t('homeMetaTitle')}
        description={t('homeMetaDescription')}
      />
      <FabComponent />
      <Header />
      <InformingEducation />
      <JoinAssociation />
      {/* <AssociationMembers /> */}
      <PastEvents />
      <News />
      <SocialMedia />
      <ContactUs />
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
