import { SetStateAction, useState } from 'react'
import {
  Grid,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent
} from '@material-ui/core'
import { useTranslation } from 'next-i18next'
import ItemsCarousel from 'react-items-carousel'
import { ArrowForwardIos, ArrowBackIos } from '@material-ui/icons'

import useStyles from './styles'

const contents = [
  {
    id: 0,
    image: '/images/gris-image.jpg',
    title: 'smartEIR',
    subTitle: 'blockchainBased',
    link: 'https://smartgate.tech/es'
  },
  {
    id: 1,
    image: '/images/gris-image.jpg',
    title: 'evodexDefiSubtitle',
    subTitle: 'evodexDefiSubtitle',
    link: 'https://evodex.io/exchange'
  },
  {
    id: 2,
    image: '/images/gris-image.jpg',
    title: 'evodexDefiSubtitle',
    subTitle: 'evodexDefiSubtitle',
    link: 'https://www.protonchain.com/'
  }
]

type ContentItemProps = {
  image: string
  title: string
  subTitle: string
}

const ContentItem: React.FC<ContentItemProps> = ({
  image,
  title,
  subTitle
}) => {
  const { t } = useTranslation('common')
  const url = 'http://localhost:3000'
  const classes = useStyles()

  return (
    <Grid item className={classes.itemsPadding} xs={12} md={12}>
      <Box
        marginX={1}
        borderRadius={1}
        boxShadow='0 4px 4px -4px rgba(30, 33, 44, 0.03), 0 12px 10px -6px rgba(154, 156, 165, 0.04), 0 30px 24px -10px rgba(154, 156, 165, 0.05), 0 80px 80px -20px rgba(154, 156, 165, 0.08)'
      >
        <Card className={classes.cardStyle} variant='outlined'>
          <CardMedia
            className={classes.cardImageStyle}
            image={`${url}${image}`}
          />
          <CardContent>
            <Typography variant='h4' align='center'>
              {t(title)}
            </Typography>
            <Typography variant='subtitle2' align='center'>
              {t(subTitle)}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  )
}

const Carrusel: React.FC = () => {
  const [active, setaAtive] = useState(0)

  return (
    <Grid item md={12} xs={11}>
      <ItemsCarousel
        infiniteLoop={true}
        gutter={0}
        activePosition={'center'}
        chevronWidth={10}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={3}
        slidesToScroll={1}
        outsideChevron={true}
        showSlither={true}
        firstAndLastGutter={false}
        activeItemIndex={active}
        requestToChangeActive={(value: SetStateAction<number>) =>
          setaAtive(value)
        }
        rightChevron={<ArrowForwardIos />}
        leftChevron={<ArrowBackIos />}
      >
        {contents.map(content => {
          return (
            <ContentItem
              key={content.id}
              image={content.image}
              title={content.title}
              subTitle={content.subTitle}
            />
          )
        })}
      </ItemsCarousel>
    </Grid>
  )
}

export default Carrusel
