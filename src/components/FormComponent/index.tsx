import { GoogleFormProvider, useGoogleForm } from 'react-google-forms-hooks'
import { Box, Typography, Grid, Button } from '@material-ui/core'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useCallback, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Formik, Form, Field } from 'formik'
import { useRouter } from 'next/router'

import { BaseSnackbar, BaseTextField, StepperComponent } from 'components'
// import { EventCategory, Header } from 'config/constants'
import { googleFormUtils } from 'utils'
import { useSizes, useFetch } from 'hooks'
import { membershipSchema } from 'schemas'
import form from '../../scripts/contact-form.json'

import useStyles from './styles'

const { defaultValues, schema } = membershipSchema

const FormComponent: React.FC = () => {
  const methods = useGoogleForm({ form })
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [succeeded, setSucceeded] = useState(false)
  const { t } = useTranslation()
  const { mdDown } = useSizes()
  const classes = useStyles()
  const router = useRouter()

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

  function getStepContent(stepIndex: number) {
    switch (stepIndex) {
      case 0:
        return (
          <Grid item xs={12} sm={12}>
            <Box pt={4} pb={2}>
              <Typography variant='body1'>
                Categoría de Afiliación/Membresía: *
              </Typography>
            </Box>
            <Box role='group' aria-labelledby='my-radio-group'>
              <Typography variant='body2'>
                <Field
                  type='radio'
                  name='membershipCategory'
                  value='Empresarial'
                />
                Empresarial
              </Typography>
              <Typography variant='body2'>
                <Field
                  type='radio'
                  name='membershipCategory'
                  value='Personal'
                />
                Personal
              </Typography>
            </Box>
          </Grid>
        )
      case 1:
        return (
          <Grid item xs={12} sm={12}>
            <Box pt={4} pb={2}>
              <Typography variant='h6'>Registro Persona Fisica</Typography>
            </Box>
            <Box pt={2} pb={2}>
              <Typography variant='caption' display='block'>
                Este registro es personal. Porfavor seleccione su categoría de
                afiliación.
              </Typography>
              <Typography variant='caption' display='block'>
                Asociado:
              </Typography>
              <Typography variant='caption' display='block'>
                - Se brinda acceso a eventos de la organización a precio de
                descuento, vos y voto en la toma de decisiones.
              </Typography>
              <Typography variant='caption' display='block'>
                -Acceso a información sobre oportunidades en el área de
                BLOCKCHAIN en Costa Rica. Asesoría para aprovechar oportunidades
                en el área BLOCKCHAIN.
              </Typography>
              <Typography variant='caption' display='block'>
                - Networking entre empresarios.
              </Typography>
              <Typography variant='caption' display='block'>
                Afiliado:
              </Typography>
              <Typography variant='caption' display='block'>
                - Se brinda acceso a eventos de la organización a precio de
                descuento, con vos (pero sin voto en la toma de decisiones)
              </Typography>
              <Typography variant='caption' display='block'>
                - Acceso individual al chat de Asoblockchain CR en whats app.
              </Typography>
            </Box>
            <Box pt={4} pb={2}>
              <Typography variant='body1'>
                Seleccione su categoría de afiliación *
              </Typography>
            </Box>
            <Box role='group' aria-labelledby='my-radio-group'>
              <Typography variant='body2'>
                <Field
                  type='radio'
                  name='personalMembershipCategory'
                  value='Asociado con Derecho de Voz y Voto - Costo Anual: $150'
                />
                Asociado con Derecho de Voz y Voto - Costo Anual: $150
              </Typography>
              <Typography variant='body2'>
                <Field
                  type='radio'
                  name='personalMembershipCategory'
                  value='Afiliado - Costo Anual: $50'
                />
                Afiliado - Costo Anual: $50
              </Typography>
            </Box>
            <Box pt={4}>
              <Typography variant='body1'>Nombre completo *</Typography>
              <Field
                id='name'
                name='name'
                className={classes.borderField}
                as={BaseTextField}
                label={t('name')}
                // error={!!(touched.lastName && errors.lastName)}
                // helperText={touched.lastName && t(errors.lastName || '')}
              />
            </Box>
            <Box pt={4}>
              <Typography>Profesión u Ocupación *</Typography>
              <Field
                id='profession'
                name='profession'
                className={classes.borderField}
                as={BaseTextField}
                label={t('profession')}
                // error={!!(touched.lastName && errors.lastName)}
                // helperText={touched.lastName && t(errors.lastName || '')}
              />
            </Box>
            <Box pt={4}>
              <Typography variant='body1'>Motivo para Asociarse *</Typography>
              <Typography variant='body2'>
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
                // error={!!(touched.lastName && errors.lastName)}
                // helperText={touched.lastName && t(errors.lastName || '')}
              />
            </Box>
            <Box pt={4}>
              <Typography variant='body1'>Teléfono *</Typography>
              <Field
                id='telephone'
                name='telephone'
                className={classes.borderField}
                as={BaseTextField}
                label={t('telephone')}
                // error={!!(touched.lastName && errors.lastName)}
                // helperText={touched.lastName && t(errors.lastName || '')}
              />
            </Box>
            <Box pt={4}>
              <Typography variant='body1'>Correo electrónico *</Typography>
              <Field
                id='email'
                name='email'
                className={classes.borderField}
                as={BaseTextField}
                label={t('email')}
                // error={!!(touched.lastName && errors.lastName)}
                // helperText={touched.lastName && t(errors.lastName || '')}
              />
            </Box>
          </Grid>
        )
      default:
        return (
          <Grid item xs={12} sm={12}>
            <Box pt={4} pb={2}>
              <Typography variant='h6'>Registro Persona Jurídica</Typography>
            </Box>
            <Box pt={2} pb={2}>
              <Typography variant='caption' display='block'>
                Este registro es para empresas u organizaciones.
              </Typography>
              <Typography variant='caption' display='block'>
                Beneficios:
              </Typography>
              <Typography variant='caption' display='block'>
                - Se brinda acceso a eventos de la organización, vos y voto en
                la toma de decisiones.
              </Typography>
              <Typography variant='caption' display='block'>
                - Acceso a información sobre oportunidades en el área de
                BLOCKCHAIN en Costa Rica.
              </Typography>
              <Typography variant='caption' display='block'>
                - Asesoría para aprovechar oportunidades en el área BLOCKCHAIN.
              </Typography>
              <Typography variant='caption' display='block'>
                - Networking entre empresarios.
              </Typography>
              <Typography variant='caption' display='block'>
                - Principalmente con el sector público.
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
            <Box pt={4} pb={2}>
              <Typography variant='body1'>
                Seleccione su categoría de Empresa. La membresía de empresa es
                de Asociado con Derecho a Voz y Voto.
              </Typography>
            </Box>
            <Box role='group' aria-labelledby='my-radio-group'>
              <Typography variant='body2'>
                <Field
                  type='radio'
                  name='companyCategory'
                  value='Empresa de 1 a 15 empleados - US$400.00 anual'
                />
                Empresa de 1 a 15 empleados - US$400.00 anual
              </Typography>
              <Typography variant='body2'>
                <Field
                  type='radio'
                  name='companyCategory'
                  value='Empresa de 16 a 30 empleados - US$600.00 anual'
                />
                Empresa de 16 a 30 empleados - US$600.00 anual
              </Typography>
              <Typography variant='body2'>
                <Field
                  type='radio'
                  name='companyCategory'
                  value='Empresa de 31+ empleados - US$1.200.00 anual'
                />
                Empresa de 31+ empleados - US$1.200.00 anual
              </Typography>
            </Box>
            <Box pt={4}>
              <Typography variant='body1'>Persona de contacto *</Typography>
              <Field
                id='name'
                name='name'
                className={classes.borderField}
                as={BaseTextField}
                label={t('name')}
                // error={!!(touched.lastName && errors.lastName)}
                // helperText={touched.lastName && t(errors.lastName || '')}
              />
            </Box>
            <Box pt={4}>
              <Typography variant='body1'>Cargo / Puesto *</Typography>
              <Field
                id='position'
                name='position'
                className={classes.borderField}
                as={BaseTextField}
                label={t('position')}
                // error={!!(touched.lastName && errors.lastName)}
                // helperText={touched.lastName && t(errors.lastName || '')}
              />
            </Box>
            <Box pt={4}>
              <Typography variant='body1'>Teléfono *</Typography>
              <Field
                id='telephone'
                name='telephone'
                className={classes.borderField}
                as={BaseTextField}
                label={t('telephone')}
                // error={!!(touched.lastName && errors.lastName)}
                // helperText={touched.lastName && t(errors.lastName || '')}
              />
            </Box>
            <Box pt={4}>
              <Typography variant='body1'>Correo electrónico *</Typography>
              <Field
                id='email'
                name='email'
                className={classes.borderField}
                as={BaseTextField}
                label={t('email')}
                // error={!!(touched.lastName && errors.lastName)}
                // helperText={touched.lastName && t(errors.lastName || '')}
              />
            </Box>
          </Grid>
        )
    }
  }

  return (
    <GoogleFormProvider {...methods}>
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

                // formikHelpers.resetForm()
              } catch (error) {
                console.error(error)
              }
            }}
          >
            {({ errors, touched, values }) => (
              <Form>
                <Grid container spacing={2}>
                  <StepperComponent
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
                      <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                        disabled={loading}
                      >
                        Send
                      </Button>
                    }
                  />
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </GoogleFormProvider>
  )
}

export default FormComponent
