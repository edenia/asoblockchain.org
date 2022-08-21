import { Box, List, ListItem, Typography } from '@material-ui/core'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const MembershipPaid: NextPage = () => {
  const router = useRouter()
  const { fullname, email, cpl_id } = router.query

  return (
    <Box
      margin='auto'
      height='70vh'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems="center"
    >
      <Typography color='secondary' align='center' variant='h1'>
        Membership successfully paid
      </Typography>
      <List style={{ width: '80%', maxWidth: "643px" }}>
        <ListItem>
          <Typography align='left' variant='h6'>
            <strong>Order:</strong> {cpl_id}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography align='left' variant='h6'>
            <strong>Name:</strong> {fullname || ''}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography align='left' variant='h6'>
            <strong>Email:</strong> {email || ''}
          </Typography>
        </ListItem>
      </List>
    </Box>
  )
}

export default MembershipPaid
