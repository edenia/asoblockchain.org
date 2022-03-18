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

const { defaultValues, schema } = membershipSchema

const FormComponent: React.FC = () => {
  const [succeeded, setSucceeded] = useState(false)
  const { t } = useTranslation()
  const classes = useStyles()

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
                -{t('individualAccessAsoblockchainChat')}
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
                Seleccione su categoría de afiliación *
              </Typography>
            </Box>
            <Box role='group' aria-labelledby='my-radio-group'>
              <Typography variant='subtitle2'>
                <Field
                  type='radio'
                  name='personalMembershipCategory'
                  value='Asociado con Derecho de Voz y Voto - Costo Anual: $150'
                />
                Asociado con Derecho de Voz y Voto - Costo Anual: $150
              </Typography>
              <Typography variant='subtitle2'>
                <Field
                  type='radio'
                  name='personalMembershipCategory'
                  value='Afiliado - Costo Anual: $50'
                />
                Afiliado - Costo Anual: $50
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
                Profesión u Ocupación *
              </Typography>
              <Field
                id='profession'
                name='profession'
                className={classes.borderField}
                as={BaseTextField}
                label={t('profession')}
                error={!!(touched.profession && errors.profession)}
                helperText={touched.profession && t(errors.profession || '')}
              />
            </Box>
            <Box pt={4}>
              <Typography variant='subtitle1'>
                Motivo para Asociarse *
              </Typography>
              <Typography variant='subtitle2'>
                Por favor bríndenos mas detalles sobre su interés en la
                Asociación y la industria Blockchain / Crypto. Si se dedica a la
                industria por favor brinde detalles y sitio web (para
                autorización de membresía). Si solo tiene interés sobre la
                industria por favor indíquelo.
              </Typography>
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
              <Typography variant='h6'>Registro Persona Jurídica</Typography>
            </Box>
            <Box pt={1} pb={1}>
              <Typography variant='caption' display='block'>
                Este registro es para empresas u organizaciones.
              </Typography>
              <Typography variant='caption' display='block'>
                <Box fontWeight='bold'>Beneficios:</Box>
              </Typography>
              <Typography variant='caption' display='block'>
                - Se brinda acceso a eventos de la organización, vos y voto en
                la toma de decisiones.
              </Typography>
              <Typography variant='caption' display='block'>
                - Acceso a información sobre oportunidades en el área de
                BLOCKCHAIN en Costa Rica.Asesoría para aprovechar oportunidades en el área BLOCKCHAIN.
              </Typography>
              <Typography variant='caption' display='block'>
                -{t('networkingBetweenBusinessmen')}
              </Typography>
              <Typography variant='caption' display='block'>
                - Anuncios con costo especial en la página web de ASOBLOCKCHAIN.
                Apoyo y asesoría en relaciones intersectoriales, principalmente
                con el sector público.
              </Typography>
              <Typography variant='caption' display='block'>
                - Descuento de un 15% en actividades organizadas por
                ASOBLOCKCHAIN y un 7.5% de descuento para familiares de primer
                grado de consanguinidad.
              </Typography>
              <Typography variant='caption' display='block'>
                - Acceso para 5 personas de la empresa al chat de Asoblockchain
                CR en whats app.
              </Typography>
            </Box>
            <Box pt={4} pb={1}>
              <Typography variant='subtitle1'>
                Seleccione su categoría de Empresa. La membresía de empresa es
                de Asociado con Derecho a Voz y Voto.
              </Typography>
            </Box>
            <Box role='group' aria-labelledby='my-radio-group'>
              <Typography variant='subtitle2'>
                <Field
                  type='radio'
                  name='companyCategory'
                  value='Empresa de 1 a 15 empleados - US$400.00 anual'
                />
                Empresa de 1 a 15 empleados - US$400.00 anual
              </Typography>
              <Typography variant='subtitle2'>
                <Field
                  type='radio'
                  name='companyCategory'
                  value='Empresa de 16 a 30 empleados - US$600.00 anual'
                />
                Empresa de 16 a 30 empleados - US$600.00 anual
              </Typography>
              <Typography variant='subtitle2'>
                <Field
                  type='radio'
                  name='companyCategory'
                  value='Empresa de 31+ empleados - US$1.200.00 anual'
                />
                Empresa de 31+ empleados - US$1.200.00 anual
              </Typography>
            </Box>
            <Box pt={4}>
              <Typography variant='subtitle1'>Persona de contacto *</Typography>
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
              <Typography variant='subtitle1'>Cargo / Puesto *</Typography>
              <Field
                id='position'
                name='position'
                className={classes.borderField}
                as={BaseTextField}
                label={t('position')}
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
                  getStepContent={getStepContent}
                  nextPage={
                    touched.membershipCategory
                      ? values.membershipCategory !== 'Empresarial'
                        ? 1
                        : 2
                      : 0
                  }
                  ButtonSend={
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
