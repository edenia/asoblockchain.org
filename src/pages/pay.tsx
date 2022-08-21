import { NextPage } from 'next'
import { Box, Button, TextField } from '@material-ui/core'
import { useState } from 'react'

const Pay: NextPage = () => {
  const [email, setEmail] = useState<string>()

  const handleSubmit = async () => {
    const result = await fetch('/api/pay-membership', {
      method: "POST",
      body: JSON.stringify({ buyer_email: email })
    })

    console.log(result)
  }

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='100vh'
    >
      <TextField
        onChange={event => setEmail(event.target.value)}
        placeholder='Your email'
        variant='outlined'
      />
      <br />
      <Button disabled={!email} onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  )
}

export default Pay
