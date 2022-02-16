import {
  Grid,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent
} from '@material-ui/core'

import { useTranslation } from 'next-i18next'

import useStyles from './styles'

const news = [
  {
    id: 0,
    image: '/images/gris-image.jpg',
    title: 'smartEIR',
    date: 'Jun 24, 2020',
    description: 'blockchainBased',
    link: 'https://smartgate.tech/es'
  },
  {
    id: 1,
    image: '/images/gris-image.jpg',
    title: 'evodexDefidescription',
    date: 'Jun 24, 2020',
    description: 'evodexDefiSubtitle',
    link: 'https://evodex.io/exchange'
  }
]

type ContentItemProps = {
  image: string
  title: string
  date: string
  description: string
}

const ContentItem: React.FC<ContentItemProps> = ({
  image,
  title,
  date,
  description
}) => {
  const { t } = useTranslation('common')
  const url = 'http://localhost:3000'
  const classes = useStyles()

  return (
    <Grid item md={6} xs={12}>
      <Box
        marginX={1}
        mb={5}
        borderRadius={1}
        boxShadow='0 4px 4px -4px rgba(30, 33, 44, 0.03), 0 12px 10px -6px rgba(154, 156, 165, 0.04), 0 30px 24px -10px rgba(154, 156, 165, 0.05), 0 80px 80px -20px rgba(154, 156, 165, 0.08)'
      >
        <Card className={classes.cardStyle} variant='outlined'>
          <CardMedia
            className={classes.cardImageStyle}
            image={`${url}${image}`}
          />
          <CardContent>
            <Typography variant='h4'>{t(title)}</Typography>
            <Typography variant='subtitle2'>{`${t(
              'news'
            )} | ${date}`}</Typography>
            <Typography variant='body2'>{description}</Typography>
          </CardContent>
        </Card>
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
        <Box textAlign='center' pb={7}>
          <Typography variant='h1'>{t('news')}</Typography>
        </Box>
      </Grid>
      {news.map(news => (
        <ContentItem
          key={news.id}
          title={news.title}
          date={news.date}
          description={news.description}
          image={news.image}
        />
      ))}
    </Grid>
  )
}

export default News
