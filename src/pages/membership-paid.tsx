import { Box, List, ListItem, Typography } from '@material-ui/core'
import { plans } from 'data/plans.data'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const MembershipPaid: NextPage = () => {
  const router = useRouter()
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
        Membresía pagada
      </Typography>
      <List style={{ width: '80%', maxWidth: '643px' }}>
        <ListItem>
          <Typography align='left' variant='h6'>
            <strong>Orden:</strong> {cpl_id}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography align='left' variant='h6'>
            <strong>Nombre:</strong> {fullname || ''}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography align='left' variant='h6'>
            <strong>Correo:</strong> {email || ''}
          </Typography>
        </ListItem>
        {plan ? (
          <ListItem>
            <Typography align='left' variant='h6'>
              <strong>Plan:</strong> {plans[Number(plan)].title}
            </Typography>
          </ListItem>
        ) : null}
      </List>
    </Box>
  )
}

export default MembershipPaid
