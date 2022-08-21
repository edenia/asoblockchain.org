import { NextPage } from 'next'
import { Box, Button, TextField, Typography } from '@material-ui/core'
import { useState } from 'react'
import { useSizes } from 'hooks'

type OrderResult = {
  status: string
  order: {
    id: string
    link: string
    brand_name: string
    item_description: string
    fiat_price: number
    fiat_currency_code: string
    status: string
    acepted_currencies: Array<string>
    user: string
    return_url: string
    as_buyer_email: boolean
    order_type: string
  }
}

const Pay: NextPage = () => {
  const [fullname, setFullname] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [isCreatingOrder, setIsCreatingOrder] = useState(false)
  const [order, setOrder] = useState<OrderResult>()

  const { smDown } = useSizes()

  const handleSubmit = async () => {
    setIsCreatingOrder(true)

    const rawResult = await fetch('/api/pay-membership', {
      method: 'POST',
      body: JSON.stringify({
        buyer_email: email,
        fiat_price: 1,
        return_url: `http:localhost:3000/membership-paid?fullname=${fullname}&email=${email}`,
        item_description: `New member join payment request \n
          Name: ${fullname} \n
          Email: ${email}`
      })
    })

    const orderResult = await rawResult.json()
    setOrder(orderResult)
    console.log(orderResult)
    setIsCreatingOrder(false)
  }

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='90vh'
      width={smDown ? '90%' : '450px'}
      margin='auto'
    >
      <Typography></Typography>
      <TextField
        onChange={event => setFullname(event.target.value)}
        placeholder='Your full name'
        fullWidth
        variant='outlined'
      />
      <br />
      <TextField
        onChange={event => setEmail(event.target.value)}
        placeholder='Your email'
        fullWidth
        variant='outlined'
      />
      <br />
      {order && order.status === 'CREATED' ? (
        <Button
          href={order.order.link}
          style={{ backgroundColor: 'green', color: 'white' }}
        >
          Continue
        </Button>
      ) : (
        <Button
          variant='outlined'
          disabled={!fullname || !email || isCreatingOrder}
          onClick={handleSubmit}
        >
          {isCreatingOrder ? 'Creating Order...' : 'Start Payment order'}
        </Button>
      )}
    </Box>
  )
}

export default Pay
