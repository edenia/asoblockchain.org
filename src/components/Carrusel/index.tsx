import { SetStateAction, useState } from 'react'
import { Grid, Box, Typography } from '@material-ui/core'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import ItemsCarousel from 'react-items-carousel'
import { ArrowForwardIos, ArrowBackIos } from '@material-ui/icons'

import image from '/public/images/gris-image.jpg'

import useStyles from './styles'

const contents = [
  {
    id: 0,
    image: image,
    title: 'smartEIR',
    subTitle: 'blockchainBased',
    link: 'https://smartgate.tech/es'
  },
  {
    id: 1,
    image: image,
    title: 'evodexDefiSubtitle',
    subTitle: 'evodexDefiSubtitle',
    link: 'https://evodex.io/exchange'
  },
  {
    id: 2,
    image: image,
    title: 'evodexDefiSubtitle',
    subTitle: 'evodexDefiSubtitle',
    link: 'https://www.protonchain.com/'
  }
]

type ContentItemProps = {
  image: StaticImageData
  title: string
  subTitle: string
}

const ContentItem: React.FC<ContentItemProps> = ({
  image,
  title,
  subTitle
}) => {
  const { t } = useTranslation('common')
  const classes = useStyles()

  return (
    <Grid className={classes.itemsPadding} item md={12} xs={12}>
      <Box
        marginX={4}
        mb={5}
        borderRadius={1}
        boxShadow='0 4px 4px -4px rgba(30, 33, 44, 0.03), 0 12px 10px -6px rgba(154, 156, 165, 0.04), 0 30px 24px -10px rgba(154, 156, 165, 0.05), 0 80px 80px -20px rgba(154, 156, 165, 0.08)'
      >
        <Box height='300px' textAlign='center' display='flex' margin='auto'>
          <Box display='flex' margin='auto'>
            <Image className={classes.logoSizes} src={image} alt='Header' />
          </Box>
        </Box>
        <Box pt={2} textAlign='center'>
          <Typography className={classes.marginTitles} variant='h4'>
            {t(title)}
          </Typography>
          <Typography variant='h5'>{t(subTitle)}</Typography>
        </Box>
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
