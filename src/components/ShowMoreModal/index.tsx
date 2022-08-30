import React from 'react'
import { Dialog, DialogContent, Divider, List, ListItem, Typography } from '@material-ui/core'
import { plans } from 'data/plans.data'

type ShowMoreModalType = {
  index: number
  open: boolean
  handleClose: () => void
}


const ShowMoreModal = ({ index, open, handleClose }: ShowMoreModalType) => {

  return (
    <Dialog
      open={open}
      onClose={handleClose}>
      <DialogContent>
        <List>
          {plans[index].items.map((item, idx) => (
            <div key={idx}>
              <ListItem style={{ padding: '5px 16px' }}>
                <Typography variant='subtitle2'> {item}</Typography>
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