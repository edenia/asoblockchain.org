import { Grid, Box, Typography } from '@material-ui/core'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import image from '/public/images/gris-image.jpg'

import useStyles from './styles'

const imagesMembers = [
  { image: image, alt: '' },
  { image: image, alt: '' },
  { image: image, alt: '' },
  { image: image, alt: '' },
  { image: image, alt: '' },
  { image: image, alt: '' },
  { image: image, alt: '' },
  { image: image, alt: '' },
  { image: image, alt: '' },
  { image: image, alt: '' },
  { image: image, alt: '' },
  { image: image, alt: '' }
]

const members = [
  {
    photo: image,
    description:
      'Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco. ',
    name: 'Nombre Apellido',
    company: 'Compañía miembro'
  },
  {
    photo: image,
    description:
      'Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco. ',
    name: 'Nombre Apellido',
    company: 'Compañía miembro'
  }
]

type ContentItemProps = {
  photo: StaticImageData
  description: string
  name: string
  company: string
}

const ContentItem: React.FC<ContentItemProps> = ({
  photo,
  description,
  name,
  company
}) => {
  const { t } = useTranslation('common')
  const classes = useStyles()

  return (
    <Grid item md={6} xs={12}>
      <Box pt={10} pr={4}>
        <Box width={60} height={60}>
          <Image className={classes.photoStyle} src={photo} alt='Header' />
        </Box>
        <Box pt={3}>
          <Typography variant='body1'>{t(description)}</Typography>
        </Box>
        <Box pt={3}>
          <Typography variant='body1'>{t(name)}</Typography>
        </Box>
        <Box pt={0.5}>
          <Typography variant='caption'>{t(company)}</Typography>
        </Box>
      </Box>
    </Grid>
  )
}

const AssociationMembers: React.FC = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid
      id={'members'}
      container
      justifyContent='space-evenly'
      className={classes.boxPadding}
    >
      <Grid item md={12} xs={12}>
        <Box textAlign='center' pb={7}>
          <Typography variant='h1' className={classes.uppercaseText}>
            {t('news')}
          </Typography>
        </Box>
      </Grid>
      <Grid item md={12}>
        <Grid container>
          {imagesMembers.map((member, index) => (
            <Grid key={index} item md={2}>
              <Box padding={1}>
                <Image src={member.image} alt={member.alt} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item md={12}>
        <Grid container>
          {members.map((member, index) => (
            <ContentItem
              key={index}
              company={member.company}
              description={member.description}
              name={member.name}
              photo={member.photo}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default AssociationMembers
