import type { NextPage, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'next-i18next'
import { Link, Fab } from '@material-ui/core'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'

import {
  InformingEducation,
  AssociationMembers,
  JoinAssociation,
  SocialMedia,
  PastEvents,
  ContactUs,
  Header,
  News
} from 'components'
import { routeUtils } from 'utils'
import i18nUtils from 'utils/i18n'
import { useSizes } from 'hooks'

import useStyles from './styles'

const Home: NextPage = () => {
  const classes = useStyles()
  const { xsDown } = useSizes()
  const { t } = useTranslation('common')

  return (
    <>
      <NextSeo
        title={t('homeMetaTitle')}
        description={t('homeMetaDescription')}
      />
      <Link
        target='_blank'
        href='https://btcnode2.crservers.com/apps/47egazbG6mVHUypcAfMVV67gQSQp/pos'
      >
        <Fab
          variant={xsDown ? 'circular' : 'extended'}
          size='medium'
          color='secondary'
          aria-label='add'
          className={classes.fabButtonPosition}
        >
          <AttachMoneyIcon />
          {!xsDown && t('pay')}
        </Fab>
      </Link>
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
