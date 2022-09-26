import { GetStaticProps, NextPage } from 'next'
import {
  Box,
  Button,
  Card,
  Divider,
  List,
  ListItem,
  TextField,
  Typography
} from '@material-ui/core'
import { useState } from 'react'
import { useSizes } from 'hooks'
import { plans } from 'data/plans.data'
import ShowMoreModal from 'components/ShowMoreModal'
import { useTranslation } from 'next-i18next'
import { routeUtils } from 'utils'
import i18nUtils from 'utils/i18n'

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
  const { t } = useTranslation()
  const [fullname, setFullname] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [isCreatingOrder, setIsCreatingOrder] = useState(false)
  const [order, setOrder] = useState<OrderResult>()
  const [selectedIdx, setSelectedIdx] = useState<number>(0)
  const [openModal, setOpenModal] = useState(false)

  const { smDown } = useSizes()

  const handleSubmit = async () => {
    if (selectedIdx === undefined) return

    setIsCreatingOrder(true)

    const rawResult = await fetch('/api/pay-membership', {
      method: 'POST',
      body: JSON.stringify({
        buyer_email: email,
        fiat_price: plans[selectedIdx || 0].cost,
        return_url: `https://asoblockchain.org/membership-paid?fullname=${fullname}&email=${email}&plan=${selectedIdx}`,
        item_description: `New member join payment request. Name: ${fullname}. Email: ${email}`
      })
    })

    const orderResult = await rawResult.json()
    setOrder(orderResult)
    setIsCreatingOrder(false)
  }

  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        width='100%'
        my={10}
      >
        <Typography variant='h1'>{t('membershipPlans')}</Typography>
        <hr />
        <Box
          width='95%'
          marginBottom={8}
          display='flex'
          flexDirection='row'
          justifyContent='center'
          flexWrap='wrap'
        >
          {plans.map((p, index) => (
            <Card
              style={{
                width: 360,
                margin: 5,
                padding: 5,
                border: `1px solid ${
                  index === selectedIdx ? '#ff5a30' : 'transparent'
                }`
              }}
              key={index}
            >
              <Typography align='center' variant='h4'>
                {t(p.title)}
              </Typography>
              <Typography align='center'>${p.cost}</Typography>
              <Divider />
              <Box
                height={245}
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
              >
                <List>
                  {p.items.slice(0, 3).map((item, idx) => (
                    <div key={idx}>
                      <ListItem style={{ padding: '5px 16px' }}>
                        <Typography variant='subtitle2'> {t(item)}</Typography>
                      </ListItem>
                    </div>
                  ))}
                </List>
                <Box
                  display='flex'
                  width='100%'
                  justifyContent='space-evenly'
                  alignContent='center'
                  alignItems='center'
                >
                  <Button
                    variant='outlined'
                    style={{
                      backgroundColor:
                        index === selectedIdx ? 'transparent' : '#ff5a30',
                      color: index === selectedIdx ? 'black' : 'white',
                      fontWeight: 'bold'
                    }}
                    onClick={() => setSelectedIdx(index)}
                  >
                    {index === selectedIdx ? t('selected') : t('select')}
                  </Button>
                  {p.items.length > 3 ? (
                    <Typography
                      onClick={() => {
                        setSelectedIdx(index)
                        setOpenModal(true)
                      }}
                    >
                      {t('seeMore')}
                    </Typography>
                  ) : null}
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          width={smDown ? '90%' : '450px'}
        >
          <Typography variant='h3' align='center'>
            {t('addYourData')}
          </Typography>
          <hr />
          <TextField
            onChange={event => setFullname(event.target.value)}
            placeholder={t('fullName')}
            fullWidth
            variant='outlined'
          />
          <br />
          <TextField
            onChange={event => setEmail(event.target.value)}
            placeholder={t('email')}
            fullWidth
            variant='outlined'
          />
          <br />
          {selectedIdx !== undefined ? (
            <Typography align='center' color='secondary' variant='caption'>
              {t('totalToPay')}: ${plans[selectedIdx].cost}
            </Typography>
          ) : null}
          {order && order.status === 'CREATED' ? (
            <Button
              href={order.order.link}
              style={{ backgroundColor: 'green', color: 'white' }}
            >
              {t('continue')}
            </Button>
          ) : (
            <Button
              variant='outlined'
              disabled={
                !fullname ||
                !email ||
                isCreatingOrder ||
                selectedIdx === undefined
              }
              onClick={handleSubmit}
            >
              {isCreatingOrder ? t('creatingOrder') : t('createOrder')}
            </Button>
          )}
        </Box>
      </Box>
      <ShowMoreModal
        index={selectedIdx || 0}
        open={openModal}
        handleClose={() => setOpenModal(false)}
      />
    </>
  )
}

export default Pay

export const getStaticProps: GetStaticProps = async context => {
  const locale = routeUtils.getAsString(context.locale)
  const translations = await i18nUtils.getServerSideTranslations(locale)

  return {
    props: {
      ...translations
    }
  }
}
