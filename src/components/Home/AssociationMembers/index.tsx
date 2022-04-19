import { Grid, Box, Link, Typography } from '@material-ui/core'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import joseMPhoto from '/public/images/members/jose-miguel.png'
import federicoPhoto from '/public/images/members/federico.png'
import nicolasPhoto from '/public/images/members/nicolas.png'
import flaviaPhoto from '/public/images/members/flavia.png'
import danielPhoto from '/public/images/members/daniel.png'
import karlaPhoto from '/public/images/members/karla.png'
import edgarPhoto from '/public/images/members/edgar.png'
import nancyPhoto from '/public/images/members/nancy.png'
import ottoPhoto from '/public/images/members/otto.png'
import ilanPhoto from '/public/images/members/ilan.png'

import useStyles from './styles'

const imagesMembers = [
  {
    photo: federicoPhoto,
    link: 'https://www.linkedin.com/in/federicozamora/',
    name: 'Federico Zamora',
    position: 'president',
    occupation: 'presidentOcupation'
  },
  {
    photo: edgarPhoto,
    link: 'https://www.linkedin.com/in/edgarafernandez/',
    name: 'Edgar Fernández',
    position: 'vicePresident',
    occupation: 'vicePresidentOcupation'
  },
  {
    photo: joseMPhoto,
    link: 'https://www.linkedin.com/in/jose-miguel-z-52638932/',
    name: 'José Miguel Zamora',
    position: 'secretary',
    occupation: 'secretaryOcupation'
  },
  {
    photo: ottoPhoto,
    link: 'https://www.linkedin.com/in/otto-mora/',
    name: 'Otto Mora',
    position: 'treasurer',
    occupation: 'treasurerOcupation'
  },
  {
    photo: ilanPhoto,
    link: 'https://www.linkedin.com/in/ilanmelendez/details/education/',
    name: 'Ilan Meléndez',
    position: 'vocal1',
    occupation: 'vocal1Ocupation'
  },
  {
    photo: danielPhoto,
    link: 'https://www.linkedin.com/in/cryptoreds/',
    name: 'Daniel Rojas',
    position: 'vocal2',
    occupation: 'vocal2Ocupation'
  },
  {
    photo: karlaPhoto,
    link: 'https://www.linkedin.com/in/muguika/',
    name: 'Karla Córdoba Brenes',
    position: 'vocal3',
    occupation: 'voval3Ocupation'
  },
  {
    photo: flaviaPhoto,
    link: 'https://www.linkedin.com/in/flavialoeb/',
    name: 'Flavia Loeb',
    position: 'vocal4',
    occupation: 'vocal4Ocupation'
  },
  {
    photo: nancyPhoto,
    link: 'https://www.linkedin.com/in/nancy-quiros-b3736b141/',
    name: 'Nancy Quirós',
    position: 'vocal5',
    occupation: 'vocal5Ocupation'
  },
  {
    photo: nicolasPhoto,
    name: 'Nicolás Sulima',
    position: 'prosecutor',
    occupation: ''
  }
]

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
          <Typography variant='h1'>{t('associationMembers')}</Typography>
        </Box>
      </Grid>
      <Grid item md={12}>
        <Grid container justifyContent='space-around'>
          {imagesMembers.map((member, index) => (
            <Grid key={index} item lg={3} md={5} sm={5} xs={6}>
              <Box padding={2}>
                <Link href={member?.link} color='textPrimary' underline='none'>
                  <Image
                    src={member.photo}
                    alt={`${member.position} ${t('photo')}`}
                  />
                  <Box textAlign='center' pb={3}>
                    <Typography variant='subtitle1'>{member.name}</Typography>
                    <Typography variant='body2'>
                      {t(member.position)} {t(member.occupation)}
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default AssociationMembers
