import { FiberManualRecord, RadioButtonUnchecked } from '@material-ui/icons'
import { Grid, Box, Typography } from '@material-ui/core'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'

import { BaseButton, BaseDialog, FormComponent } from 'components'
import { useSizes } from 'hooks'

import useStyles from './styles'

const membershipsList = [
  {
    id: 0,
    title: 'organizationsCompanies',
    description: 'rightVoiceVote',
    content: [
      'accessOrganizationEvents',
      'accessInformationAboutBlockchain',
      'networkingBetweenBusinessmen',
      'websiteAnnouncementsIndustry',
      'discountsActivitiesOrganized',
      'accessAsoblockchainChat'
    ]
  },
  {
    id: 1,
    title: 'individualAssociates',
    description: 'rightVoiceVote',
    content: [
      'accessOrganizationEvents',
      'accessInformationAboutBlockchain',
      'networkingBetweenBusinessmen',
      'individualAccessAsoblockchainChat'
    ]
  },
  {
    id: 2,
    title: 'affiliates',
    description: 'noRightVote',
    content: [
      'accessEventsOrganizationSpecial',
      'individualAccessAsoblockchainChat'
    ]
  }
]

const JoinAssociation: React.FC = () => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  const { xsDown } = useSizes()
  const classes = useStyles()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Grid container justifyContent={'center'} className={classes.boxPadding}>
      <Grid item md={9} xs={12}>
        <Box textAlign='center' pb={7}>
          <Typography variant='h1'>{t('joinTheAssociation')}</Typography>
        </Box>
        <Box textAlign='center' pb={7}>
          <Typography variant='body1'>{t('joinAssociationDesc')}</Typography>
        </Box>
        {membershipsList.map(item => (
          <Box key={item.id} pb={2}>
            <Box display='flex'>
              <Box pr={1}>
                <FiberManualRecord
                  className={classes.pointStyle}
                  color='secondary'
                />
              </Box>
              <Typography align='left' variant='body1'>
                <Typography variant='subtitle1' display='inline'>
                  {t(item.title)}
                </Typography>{' '}
                {t(item.description)}
              </Typography>
            </Box>
            {item.content.map((bulllet, index) => (
              <Box key={index} display='flex'>
                <Box pr={1} pl={3}>
                  <RadioButtonUnchecked
                    className={classes.pointStyle}
                    color='secondary'
                  />
                </Box>
                <Typography variant='body1'>{t(bulllet)}</Typography>
              </Box>
            ))}
          </Box>
        ))}
        <Box textAlign='center' mt={8}>
          <BaseButton
            color='secondary'
            onClick={handleOpen}
            variant='contained'
          >
            {t('joinAssociation')}
          </BaseButton>
        </Box>
        <BaseDialog
          open={open}
          fullScreen={xsDown}
          title={t('ASOBLOCKCHAINAffiliationForm')}
          handleClose={handleClose}
          description={t('appreciateInterestBeingPartInitiative')}
          content={<FormComponent />}
        />
      </Grid>
    </Grid>
  )
}

export default JoinAssociation
