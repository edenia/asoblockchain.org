import Image from 'next/image'
import { Grid, Box, Typography } from '@material-ui/core'
import { useTranslation } from 'next-i18next'

import video from '/public/images/gris-image.jpg'
import icon from '/public/icons/like-icon.svg'
import { PercentageChart } from 'components'

import useStyles from './styles'

const contents = [
  {
    id: 0,
    icon: icon,
    title: 'EOSCR',
    description: 'EOSCRDes'
  },
  {
    id: 1,
    icon: icon,
    title: 'CRServers',
    description: 'CRServicesDes'
  },
  {
    id: 2,
    icon: icon,
    title: 'edeniaLabs',
    description: 'edeniaLabsDes'
  }
]

const percentageData = [
  {
    id: 0,
    color: '#ffccff',
    progress: 50,
    label: 'data'
  },
  {
    id: 1,
    color: '#ccffcc',
    progress: 80,
    label: 'data'
  },
  {
    id: 2,
    color: '#ccccff',
    progress: 90,
    label: 'data'
  },
  {
    id: 2,
    color: '#ccccff',
    progress: 94,
    label: 'data'
  }
]

type ContentItemProps = {
  icon: StaticImageData
  title: string
  description: string
}

const ContentItem: React.FC<ContentItemProps> = ({
  icon,
  title,
  description
}) => {
  const { t } = useTranslation('common')
  const classes = useStyles()

  return (
    <Grid item md={4} xs={12}>
      <Grid container justifyContent='center'>
        <Grid item md={12} xs={12}>
          <Box
            width='100%'
            textAlign='center'
            className={classes.borderBox}
            paddingX={4}
            pt={6}
            pb={2}
          >
            <Box pb={4}>
              <Image src={icon} alt={t(title)} />
            </Box>
            <Typography variant='h4'>{t(title)}</Typography>
            <Typography variant='body2'>{t(description)}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}

const InformingEducation: React.FC = () => {
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
          <Typography variant='h1'>{t('informingEducation')}</Typography>
        </Box>
        <Box textAlign='center' pb={8}>
          <Typography variant='body1'>{t('committedFuture')}</Typography>
        </Box>
        <Box textAlign='center' pb={8} width='100%'>
          <Image src={video} width='800px' height='500px' />
        </Box>
      </Grid>
      <Grid item md={12}>
        <Box textAlign='center' pb={8}>
          <Typography variant='h1'>{t('committedFuture')}</Typography>
        </Box>
      </Grid>
      <Grid item md={12}>
        <Box textAlign='center' pb={8}>
          <Typography variant='body1'>{t('committedFuture')}</Typography>
        </Box>
      </Grid>
      {contents.map(item => (
        <ContentItem
          key={item.id}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
      <Grid item md={12}>
        <Box textAlign='center' pt={10}>
          <Typography variant='h1'>{t('interestingData')}</Typography>
        </Box>
      </Grid>
      {percentageData.map(data => (
        <Box key={data.id} textAlign='center' pt={8}>
          <PercentageChart progress={data.progress} color={data.color} />
          <Typography variant='body2'>{t(data.label)}</Typography>
        </Box>
      ))}
    </Grid>
  )
}

export default InformingEducation
