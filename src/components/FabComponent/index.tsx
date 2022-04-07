import { Link, Fab } from '@material-ui/core'
import { useTranslation } from 'next-i18next'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'

import { useSizes } from 'hooks'

import useStyles from './styles'

const FabComponent: React.FC = () => {
  const classes = useStyles()
  const { xsDown } = useSizes()
  const { t } = useTranslation('common')

  return (
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
  )
}

export default FabComponent
