import Image from 'next/image'
import { Grid, Box, Typography } from '@material-ui/core'
import { useTranslation } from 'next-i18next'
import clsx from 'clsx'

import video from '/public/images/video.png'
import participationIcon from '/public/icons/participation-icon.svg'
import representationIcon from '/public/icons/representation-icon.svg'
import successIcon from '/public/icons/success-icon.svg'
import { PercentageChart } from 'components'
import { useSizes } from 'hooks'

import useStyles from './styles'

const contents = [
  {
    id: 0,
    icon: representationIcon,
    title: 'representation',
    description: 'representationDes'
  },
  {
    id: 1,
    icon: participationIcon,
    title: 'participation',
    description: 'participationDes'
  },
  {
    id: 2,
    icon: successIcon,
    title: 'promotion',
    description: 'promotionDes'
  }
]

const percentageData = [
  {
    id: 0,
    color: 1,
    progress: 50,
    label: 'data',
    isPercentage: true
  },
  {
    id: 1,
    color: 2,
    progress: 80,
    label: 'memberCompanies',
    isPercentage: false
  },
  {
    id: 2,
    color: 3,
    progress: 90,
    label: 'individuals',
    isPercentage: false
  },
  {
    id: 2,
    color: 4,
    progress: 94,
    label: 'students',
    isPercentage: false
  }
]

type ContentItemProps = {
  id: number
  icon: StaticImageData
  title: string
  description: string
}

const ContentItem: React.FC<ContentItemProps> = ({
  id,
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
            className={clsx({ [classes.borderBox]: id !== 2 })}
            paddingX={4}
            pt={6}
            pb={2}
          >
            <Box pb={4}>
              <Image src={icon} alt={t(title)} />
            </Box>
            <Box pb={1}>
              <Typography variant='h4'>{t(title)}</Typography>
            </Box>
            <Typography variant='body2'>{t(description)}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}

const InformingEducation: React.FC = () => {
  const { t } = useTranslation()
  const { mdDown } = useSizes()
  const classes = useStyles()

  return (
    <Grid
      id='our-mission'
      container
      justifyContent='space-evenly'
      className={classes.boxPadding}
    >
      <Grid item md={12} xs={12}>
        <Box textAlign='center' pb={5}>
          <Typography variant='h1'>{t('ourReasonBeing')}</Typography>
        </Box>
        <Box textAlign='center' pb={5}>
          <Typography variant='body1'>{t('committedFuture')}</Typography>
        </Box>
        <Box textAlign='center' pb={5} px={mdDown ? 0 : 10}>
          <Typography variant='body1'>{t('ourReasonBeingDes')}</Typography>
        </Box>
        <Box textAlign='center' pb={8} width='100%'>
          <Image src={video} />
        </Box>
      </Grid>
      {contents.map(item => (
        <ContentItem
          key={item.id}
          id={item.id}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
      {/* <Grid item md={12} xs={12}>
        <Box textAlign='center' pt={10}>
          <Typography variant='h1'>{t('interestingData')}</Typography>
        </Box>
      </Grid>
      {percentageData.map(data => (
        <Box key={data.id} textAlign='center' pt={8} marginX={3}>
          <PercentageChart
            progress={data.progress}
            color={data.color}
            isPercentage={data.isPercentage}
          />
          <Box pt={2}>
            <Typography variant='body2'>{t(data.label)}</Typography>
          </Box>
        </Box>
      ))} */}
    </Grid>
  )
}

export default InformingEducation
