import { Box, Typography, Grid } from '@material-ui/core'
import { useCallback, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Formik, Form, Field } from 'formik'

import { membershipSchema } from 'schemas'
import { googleFormUtils } from 'utils'
import { useFetch } from 'hooks'
import {
  StepperComponent,
  BaseTextField,
  BaseSnackbar,
  BaseButton
} from 'components'

import useStyles from './styles'
import { number } from 'yup'

const { defaultValues, schema } = membershipSchema

const FormComponent: React.FC = () => {
  const [succeeded, setSucceeded] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const { t } = useTranslation()
  const classes = useStyles()

  const handleNext = (nextPage: number) => {
    if (nextPage !== 0) setActiveStep(nextPage)
  }

  const { fetch, loading, error } = useFetch({
    onCompleted: () => {
      setSucceeded(true)
    }
  })

  const onCloseSnackBar = useCallback(
    (event?: React.SyntheticEvent, reason?: string) => {
      if (reason === 'clickaway') {
        return
      }
      setSucceeded(false)
    },
    []
  )

  const getStepContent = (stepIndex: number, touched: any, errors: any) => {
    switch (stepIndex) {
      case 0:
        return (
          <Grid item xs={12} sm={12}>
            <Box pt={4} pb={1}>
              <Typography variant='subtitle1'>
                {t('AffiliationCategory')}
              </Typography>
            </Box>
            <Box role='group' aria-labelledby='my-radio-group'>
              <Typography variant='subtitle2'>
                <Field
                  type='radio'
                  name='membershipCategory'
                  value='Empresarial'
                />
                {t('business')}
              </Typography>
              <Typography variant='subtitle2'>
                <Field
                  type='radio'
                  name='membershipCategory'
                  value='Personal'
                />
                {t('personal')}
              </Typography>
            </Box>
          </Grid>
        )
      case 1:
        return (
          <Grid item xs={12} sm={12}>
            <Box pt={4}>
              <Typography variant='h6'>
                {t('naturalPersonRegistration')}
              </Typography>
            </Box>
            <Box pt={1} pb={1}>
              <Typography variant='caption' display='block'>
                {t('recordPersonal')}
              </Typography>
              <Typography variant='caption' display='block'>
                <Box fontWeight='bold'>{t('associated')}</Box>
              </Typography>
              <Typography variant='caption' display='block'>
                {t('associatedFirstPoint')}
              </Typography>
              <Typography variant='caption' display='block'>
                {t('associatedSecondPoint')}
              </Typography>
              <Typography variant='caption' display='block'>
                -{t('networkingBetweenBusinessmen')}
              </Typography>
              <Typography variant='caption' display='block'>
                -{t('accessAsoblockchainChat')}
              </Typography>
              <Typography variant='caption' display='block'>
                <Box fontWeight='bold'>{t('affiliate')}</Box>
              </Typography>
              <Typography variant='caption' display='block'>
                {t('affiliateFirstPoint')}
              </Typography>
              <Typography variant='caption' display='block'>
                -{t('individualAccessAsoblockchainChat')}
              </Typography>
            </Box>
            <Box pt={4} pb={1}>
              <Typography variant='subtitle1'>
                {t('selectMembershipCategory')}
              </Typography>
            </Box>
            <Box role='group' aria-labelledby='my-radio-group'>
              <Typography variant='subtitle2'>
                <Field
                  type='radio'
                  name='personalMembershipCategory'
                  value='Asociado con Derecho de Voz y Voto - Costo Anual: $150'
                />
                {t('associateVoiceVotingRights')}
              </Typography>
              <Typography variant='subtitle2'>
                <Field
                  type='radio'
                  name='personalMembershipCategory'
                  value='Afiliado - Costo Anual: $50'
                />
                {t('affiliateAnnualCost')}
              </Typography>
            </Box>
            <Box pt={4}>
              <Typography variant='subtitle1'>{t('name')}</Typography>
              <Field
                id='name'
                name='name'
                className={classes.borderField}
                as={BaseTextField}
                label={t('name')}
                error={!!(touched.name && errors.name)}
                helperText={touched.name && t(errors.name || '')}
              />
            </Box>
            <Box pt={4}>
              <Typography variant='subtitle1'>
                {t('professionOccupation')}
              </Typography>
              <Field
                id='profession'
                name='profession'
                className={classes.borderField}
                as={BaseTextField}
                label={t('professionOccupation')}
                error={!!(touched.profession && errors.profession)}
                helperText={touched.profession && t(errors.profession || '')}
              />
            </Box>
            <Box pt={4}>
              <Typography variant='subtitle1'>{t('reasonJoin')}</Typography>
              <Typography variant='subtitle2'>{t('reasonJoinDes')}</Typography>
              <Field
                id='reasonJoin'
                name='reasonJoin'
                className={classes.borderField}
                as={BaseTextField}
                label={t('reasonJoin')}
                error={!!(touched.reasonJoin && errors.reasonJoin)}
                helperText={touched.reasonJoin && t(errors.reasonJoin || '')}
              />
            </Box>
            <Box pt={4}>
              <Typography variant='subtitle1'>{t('telephone')}</Typography>
              <Field
                id='telephone'
                name='telephone'
                className={classes.borderField}
                as={BaseTextField}
                label={t('telephone')}
                error={!!(touched.telephone && errors.telephone)}
                helperText={touched.telephone && t(errors.telephone || '')}
              />
            </Box>
            <Box pt={4}>
              <Typography variant='subtitle1'>{t('email')}</Typography>
              <Field
                id='email'
                name='email'
                className={classes.borderField}
                as={BaseTextField}
                label={t('email')}
                error={!!(touched.email && errors.email)}
                helperText={touched.email && t(errors.email || '')}
              />
            </Box>
          </Grid>
        )
      default:
        return (
          <Grid item xs={12} sm={12}>
            <Box pt={4}>
              <Typography variant='h6'>
                {t('legalEntityRegistration')}
              </Typography>
            </Box>
            <Box pt={1} pb={1}>
              <Typography variant='caption' display='block'>
                {t('registryCompaniesOrganizations')}
              </Typography>
              <Typography variant='caption' display='block'>
                <Box fontWeight='bold'>{t('profits')}</Box>
              </Typography>
              <Typography variant='caption' display='block'>
                - {t('accessEventsOrganizationVoiceVote')}
              </Typography>
              <Typography variant='caption' display='block'>
                - {t('accessInformationAboutOpportunitiesBLOCKCHAIN')}
              </Typography>
              <Typography variant='caption' display='block'>
                -{t('networkingBetweenBusinessmen')}
              </Typography>
              <Typography variant='caption' display='block'>
                - {t('specialCostASOBLOCKCHAINWebsite')}
              </Typography>
              <Typography variant='caption' display='block'>
                - {t('discountActivitiesOrganizedASOBLOCKCHAIN')}
              </Typography>
              <Typography variant='caption' display='block'>
                - {t('accessPeopleCompanyAsoblockchainChat')}
              </Typography>
            </Box>
            <Box pt={4} pb={1}>
              <Typography variant='subtitle1'>
                {t('selectCompanyCategory')}
              </Typography>
            </Box>
            <Box role='group' aria-labelledby='my-radio-group'>
              <Typography variant='subtitle2'>
                <Field
                  type='radio'
                  name='companyCategory'
                  value='Empresa de 1 a 15 empleados - US$400.00 anual'
                />
                {t('companyEmployeesPerYear')}
              </Typography>
              <Typography variant='subtitle2'>
                <Field
                  type='radio'
                  name='companyCategory'
                  value='Empresa de 16 a 30 empleados - US$600.00 anual'
                />
                {t('company16to30EmployeesPerYear')}
              </Typography>
              <Typography variant='subtitle2'>
                <Field
                  type='radio'
                  name='companyCategory'
                  value='Empresa de 31+ empleados - US$1.200.00 anual'
                />
                {t('company31+EmployeesPerYear')}
              </Typography>
            </Box>
            <Box pt={4}>
              <Typography variant='subtitle1'>{t('contactPerson')}</Typography>
              <Field
                id='name'
                name='name'
                className={classes.borderField}
                as={BaseTextField}
                label={t('name')}
                error={!!(touched.name && errors.name)}
                helperText={touched.name && t(errors.name || '')}
              />
            </Box>
            <Box pt={4}>
              <Typography variant='subtitle1'>{t('titlePosition')}</Typography>
              <Field
                id='position'
                name='position'
                className={classes.borderField}
                as={BaseTextField}
                label={t('titlePosition')}
                error={!!(touched.position && errors.position)}
                helperText={touched.position && t(errors.position || '')}
              />
            </Box>
            <Box pt={4}>
              <Typography variant='subtitle1'>{t('telephone')}</Typography>
              <Field
                id='telephone'
                name='telephone'
                className={classes.borderField}
                as={BaseTextField}
                label={t('telephone')}
                error={!!(touched.telephone && errors.telephone)}
                helperText={touched.telephone && t(errors.telephone || '')}
              />
            </Box>
            <Box pt={4}>
              <Typography variant='subtitle1'>{t('email')}</Typography>
              <Field
                id='email'
                name='email'
                className={classes.borderField}
                as={BaseTextField}
                label={t('email')}
                error={!!(touched.email && errors.email)}
                helperText={touched.email && t(errors.email || '')}
              />
            </Box>
          </Grid>
        )
    }
  }

  const enableSendButton = (touched: any, values: any, errors: any) => {
    if (!touched.membershipCategory) return true

    if (values.membershipCategory !== 'Empresarial')
      if (
        values.name !== '' &&
        values.profession !== '' &&
        values.reasonJoin !== '' &&
        values.telephone !== '' &&
        values.email !== '' &&
        !errors.email
      )
        return false
      else return true
    else {
      if (
        values.name !== '' &&
        values.position !== '' &&
        values.telephone !== '' &&
        values.email !== '' &&
        !errors.email
      )
        return false
      else return true
    }
  }

  return (
    <Box position='relative' zIndex={2}>
      <BaseSnackbar
        snackbarProps={{
          open: succeeded,
          onClose: onCloseSnackBar
        }}
        alertProps={{
          severity: 'success'
        }}
        message={t('sentSuccessfully')}
      />

      <BaseSnackbar
        snackbarProps={{
          open: !!error
        }}
        message={error ?? undefined}
      />
      <Box px={4}>
        <Formik
          enableReinitialize
          initialValues={defaultValues}
          validationSchema={schema}
          onSubmit={async (
            {
              membershipCategory,
              name,
              personalMembershipCategory,
              profession,
              reasonJoin,
              telephone,
              email,
              companyCategory,
              position
            },
            formikHelpers
          ) => {
            try {
              if (!(name && email && membershipCategory && telephone)) return

              const membershipFormUrl =
                googleFormUtils.getMembershipFormUrlClient({
                  membershipCategory,
                  name,
                  personalMembershipCategory,
                  profession,
                  reasonJoin,
                  telephone,
                  email,
                  companyCategory,
                  position
                })

              await fetch(membershipFormUrl)

              formikHelpers.resetForm()
            } catch (error) {
              console.error(error)
            }
          }}
        >
          {({ errors, touched, values }) => (
            <Form>
              <Grid container spacing={2}>
                <StepperComponent
                  errors={errors}
                  touched={touched}
                  amountPages={3}
                  setActiveStep={setActiveStep}
                  activeStep={activeStep}
                  getStepContent={getStepContent}
                  nextButton={
                    <BaseButton
                      color='secondary'
                      variant='contained'
                      onClick={() =>
                        handleNext(
                          touched.membershipCategory
                            ? values.membershipCategory !== 'Empresarial'
                              ? 1
                              : 2
                            : 0
                        )
                      }
                    >
                      {t('next')}
                    </BaseButton>
                  }
                  buttonSend={
                    <BaseButton
                      color='secondary'
                      variant='contained'
                      type='submit'
                      disabled={
                        loading || enableSendButton(touched, values, errors)
                      }
                    >
                      {t('submit')}
                    </BaseButton>
                  }
                />
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  )
}

export default FormComponent
