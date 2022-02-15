import { Grid, Box, Typography } from '@material-ui/core'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import image from '/public/images/gris-image.jpg'

import useStyles from './styles'

const news = [
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
    <Grid className={classes.itemsPadding} item md={6} xs={12}>
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
          <Typography variant='h4'>{t(title)}</Typography>
          <Typography variant='h5'>{t(subTitle)}</Typography>
        </Box>
      </Box>
    </Grid>
  )
}

const News: React.FC = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid
      container
      justifyContent='space-evenly'
      className={classes.boxPadding}
    >
      <Grid item md={12}>
        <Box textAlign='center' pb={3}>
          <Typography variant='h1'>{t('news')}</Typography>
        </Box>
      </Grid>
      {news.map(news => (
        <ContentItem
          key={news.id}
          title={news.title}
          subTitle={news.subTitle}
          image={news.image}
        />
      ))}
    </Grid>
  )
}

export default News
