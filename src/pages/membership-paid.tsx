import { Box, List, ListItem, Typography } from '@material-ui/core'
import { plans } from 'data/plans.data'
import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { routeUtils } from 'utils'
import i18nUtils from 'utils/i18n'

const MembershipPaid: NextPage = () => {
  const router = useRouter()
  const { t } = useTranslation()
  const { fullname, email, cpl_id, plan } = router.query

  return (
    <Box
      margin='auto'
      height='70vh'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Typography color='secondary' align='center' variant='h1'>
        {t('membershipPaid')}
      </Typography>
      <List style={{ width: '80%', maxWidth: '643px' }}>
        <ListItem>
          <Typography align='left' variant='h6'>
            <strong>{t('order')}:</strong> {cpl_id}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography align='left' variant='h6'>
            <strong>{t('fullName')}:</strong> {fullname || ''}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography align='left' variant='h6'>
            <strong>{t('email')}:</strong> {email || ''}
          </Typography>
        </ListItem>
        {plan ? (
          <ListItem>
            <Typography align='left' variant='h6'>
              <strong>{t('plan')}:</strong> {t(plans[Number(plan)].title)}
            </Typography>
          </ListItem>
        ) : null}
      </List>
    </Box>
  )
}

export default MembershipPaid

export const getStaticProps: GetStaticProps = async context => {
  const locale = routeUtils.getAsString(context.locale)
  const translations = await i18nUtils.getServerSideTranslations(locale)

  return {
    props: {
      ...translations
    }
  }
}
