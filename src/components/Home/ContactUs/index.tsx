import { Box, Grid, Typography } from '@material-ui/core'
import { useCallback, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Formik, Form, Field } from 'formik'
import Image from 'next/image'

import { BaseButton, BaseTextField, BaseSnackbar } from 'components'
import bgImage from '/public/images/background-contact.jpg'
import { useSizes, useFetch } from 'hooks'
import { googleFormUtils } from 'utils'
import { contactSchema } from 'schemas'

import useStyles from './styles'

const { defaultValues, schema } = contactSchema

const ContactUs: React.FC = () => {
  const [succeeded, setSucceeded] = useState(false)
  const { t } = useTranslation()
  const { smDown } = useSizes()
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

  return (
    <Box position='relative' id='contact' zIndex={0}>
      <Box zIndex={1}>
        <Image src={bgImage} alt='ContactUs' layout='fill' objectFit='cover' />
      </Box>
      <Box display='flex' position='relative' zIndex={2}>
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
        <Grid container justifyContent='flex-end'>
          <Grid item md={5} xs={12}>
            <Box
              width={smDown ? '90%' : '82%'}
              marginY={10}
              marginX='auto'
              paddingY={6}
              paddingX={5}
              bgcolor='common.white'
              borderRadius={4}
            >
              <Box pb={3}>
                <Typography align='center' variant='h2'>
                  {t('contactUsNow')}
                </Typography>
              </Box>
              <Formik
                enableReinitialize
                initialValues={defaultValues}
                validationSchema={schema}
                onSubmit={async (
                  { telephone, message, email, name },
                  formikHelpers
                ) => {
                  try {
                    const contactFormUrl =
                      googleFormUtils.getContactFormUrlClient({
                        telephone,
                        message,
                        email,
                        name
                      })

                    await fetch(contactFormUrl)

                    formikHelpers.resetForm()
                  } catch (error) {
                    console.error(error)
                  }
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Box pt={2}>
                          <Typography variant='subtitle1'>
                            {t('name')}
                          </Typography>
                        </Box>
                        <Field
                          id='name'
                          name='name'
                          className={classes.borderField}
                          as={BaseTextField}
                          label={t('name')}
                          error={!!(touched.name && errors.name)}
                          helperText={touched.name && t(errors.name || '')}
                        />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Box pt={2}>
                          <Typography variant='subtitle1'>
                            {t('telephone')}
                          </Typography>
                        </Box>
                        <Field
                          id='telephone'
                          name='telephone'
                          className={classes.borderField}
                          as={BaseTextField}
                          label={t('telephone')}
                          error={!!(touched.telephone && errors.telephone)}
                          helperText={
                            touched.telephone && t(errors.telephone || '')
                          }
                        />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Box pt={2}>
                          <Typography variant='subtitle1'>
                            {t('email')}
                          </Typography>
                        </Box>
                        <Field
                          id='email'
                          name='email'
                          className={classes.borderField}
                          as={BaseTextField}
                          label={t('email')}
                          error={!!(touched.email && errors.email)}
                          helperText={touched.email && t(errors.email || '')}
                        />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Box pt={2}>
                          <Typography variant='subtitle1'>
                            {t('message')}
                          </Typography>
                        </Box>
                        <Field
                          id='message'
                          name='message'
                          className={classes.borderField}
                          as={BaseTextField}
                          multiline
                          rows={3}
                          label={t('message')}
                          error={!!(touched.message && errors.message)}
                          helperText={
                            touched.message && t(errors.message || '')
                          }
                        />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Box pt={3} textAlign='center'>
                          <BaseButton
                            variant='contained'
                            type='submit'
                            color='secondary'
                            disabled={loading}
                            fullWidth={false}
                          >
                            {t('submit')}
                          </BaseButton>
                        </Box>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default ContactUs
