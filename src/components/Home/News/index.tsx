import {
  CardContent,
  Typography,
  CardMedia,
  Card,
  Link,
  Grid,
  Box
} from '@material-ui/core'

import { useTranslation } from 'next-i18next'

import useStyles from './styles'

const news = [
  {
    id: 0,
    image: 'https://miro.medium.com/max/1400/1*b3ORe08C48TAMhRlDh9h5Q.jpeg',
    title: 'titleFourthNew',
    date: 'mar2022',
    description: 'Blog Web3 Costa Rica',
    link: 'https://medium.com/blockchaincr/nueva-junta-directiva-asociaci%C3%B3n-blockchain-costa-rica-81ec2d58c217'
  },
  {
    id: 1,
    image: 'https://miro.medium.com/max/1400/1*alIndkGkemLgBlqNR2iD0Q.jpeg',
    title: 'titleFirtsNew',
    date: 'november2021',
    description: 'Blog Web3 Costa Rica',
    link: 'https://medium.com/blockchaincr/posici%C3%B3n-de-la-asociaci%C3%B3n-blockchain-de-costa-rica-con-respecto-a-la-propuesta-de-impuestos-a-4d4e90c74858'
  },
  {
    id: 2,
    image: 'https://miro.medium.com/max/700/1*EnMmpBe0yY7uCVOXvRQv9w.png',
    title: 'titleFifthNew',
    date: 'april2022',
    description: 'Blog Web3 Costa Rica',
    link: 'https://medium.com/blockchaincr/razones-para-prevenir-a-crcoin-como-una-inversi%C3%B3n-b883a6df131b'
  },
  {
    id: 3,
    image:
      'https://www.elfinancierocr.com/resizer/eHDO1eHD3mBn6FT0AsTe4V1h428=/1440x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gruponacion/EHZVL2UIDNHCDGS2PW4HYPMYS4.jpg',
    title: 'titleSecondNew',
    date: 'febrero2021',
    description: 'El Financiero',
    link: 'https://www.elfinancierocr.com/opinion/el-panorama-en-el-2021-para-blockchain-y/QBQUKZL6EVCQ5FHJ4BVRSNXJME/story/'
  },
  {
    id: 4,
    image:
      'https://www.larepublica.net/storage/images/authors/walter_header.jpg',
    title: 'titleThreeNew',
    date: 'enero2019',
    description: 'La República',
    link: 'https://www.larepublica.net/noticia/asoblockchain-y-el-futuro-de-blockchain-en-costa-rica'
  }
]

type ContentItemProps = {
  image: string
  title: string
  date: string
  description: string
  link: string
}

const ContentItem: React.FC<ContentItemProps> = ({
  image,
  title,
  date,
  description,
  link
}) => {
  const { t } = useTranslation('common')
  const classes = useStyles()

  return (
    <Grid item md={6} xs={12}>
      <Box
        marginX={2}
        mb={5}
        borderRadius={1}
        boxShadow='0 4px 4px -4px rgba(30, 33, 44, 0.03), 0 12px 10px -6px rgba(154, 156, 165, 0.04), 0 30px 24px -10px rgba(154, 156, 165, 0.05), 0 80px 80px -20px rgba(154, 156, 165, 0.08)'
      >
        <Link href={link} target='_blank' rel='noopener'>
          <Card className={classes.cardStyle} variant='outlined'>
            <CardMedia className={classes.cardImageStyle} image={image} />
            <CardContent>
              <Typography variant='h4' noWrap>
                {t(title)}
              </Typography>
              <Typography variant='subtitle2'>{`${t('news')} | ${t(
                date
              )}`}</Typography>
              <Typography variant='body2'>{description}</Typography>
            </CardContent>
          </Card>
        </Link>
      </Box>
    </Grid>
  )
}

const News: React.FC = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid id={'news'} container className={classes.boxPadding}>
      <Grid item md={12} xs={12}>
        <Box textAlign='center' pb={7}>
          <Typography variant='h1' className={classes.uppercaseText}>
            {t('newBlogs')}
          </Typography>
        </Box>
      </Grid>
      {news.map(news => (
        <ContentItem
          key={news.id}
          title={news.title}
          date={news.date}
          description={news.description}
          image={news.image}
          link={news.link}
        />
      ))}
    </Grid>
  )
}

export default News
