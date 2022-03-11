import { SetStateAction, useState } from 'react'
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  Link
} from '@material-ui/core'
import { useTranslation } from 'next-i18next'
import ItemsCarousel from 'react-items-carousel'
import { ArrowForwardIos, ArrowBackIos } from '@material-ui/icons'

import { useSizes } from 'hooks'

import useStyles from './styles'

type ContentItemProps = {
  id?: number
  title: string
  subTitle: string
  link: string
}

const ContentItem: React.FC<ContentItemProps> = ({ title, subTitle, link }) => {
  const { t } = useTranslation('common')
  const classes = useStyles()

  return (
    <Grid item className={classes.itemsPadding} xs={12} md={12}>
      <Box
        marginX={1}
        borderRadius={1}
        boxShadow='0 4px 4px -4px rgba(30, 33, 44, 0.03), 0 12px 10px -6px rgba(154, 156, 165, 0.04), 0 30px 24px -10px rgba(154, 156, 165, 0.05), 0 80px 80px -20px rgba(154, 156, 165, 0.08)'
      >
        <Card className={classes.cardStyle} variant='outlined'>
          <Link href={link} color='textPrimary'>
            <CardContent>
              <Typography variant='h4' align='center'>
                {t(title)}
              </Typography>
              <Typography variant='subtitle2' align='center'>
                {t(subTitle)}
              </Typography>
            </CardContent>
          </Link>
        </Card>
      </Box>
    </Grid>
  )
}

type CarruselProps = {
  contents: Array<ContentItemProps>
}

const Carrusel: React.FC<CarruselProps> = ({ contents }) => {
  const [active, setaAtive] = useState(0)
  const { smDown } = useSizes()

  return (
    <Grid item md={12} xs={12}>
      <ItemsCarousel
        infiniteLoop={false}
        gutter={0}
        activePosition={'center'}
        chevronWidth={10}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={smDown ? 1 : 2}
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
              title={content.title}
              subTitle={content.subTitle}
              link={content.link}
            />
          )
        })}
      </ItemsCarousel>
    </Grid>
  )
}

export default Carrusel
