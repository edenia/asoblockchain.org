import React from 'react'
import {
  Dialog,
  DialogContent,
  Divider,
  List,
  ListItem,
  Typography
} from '@material-ui/core'
import { plans } from 'data/plans.data'
import { GetStaticProps } from 'next'
import { routeUtils } from 'utils'
import { useTranslation } from 'next-i18next'
import i18nUtils from 'utils/i18n'

type ShowMoreModalType = {
  index: number
  open: boolean
  handleClose: () => void
}

const ShowMoreModal = ({
  index,
  open,
  handleClose,
  ...props
}: ShowMoreModalType) => {
  const { t } = useTranslation()

  return (
    <Dialog open={open} onClose={handleClose} {...props}>
      <DialogContent>
        <List>
          {plans[index].items.map((item, idx) => (
            <div key={idx}>
              <ListItem style={{ padding: '5px 16px' }}>
                <Typography variant='subtitle2'> {t(item)}</Typography>
                <Divider />
              </ListItem>
            </div>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  )
}

export default ShowMoreModal
