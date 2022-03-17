import * as yup from 'yup'

export type ContactType = {
  telephone?: string
  message?: string
  email?: string
  name?: string
}

const defaultValues = {
  telephone: '',
  message: '',
  email: '',
  name: ''
}

const schema = yup.object().shape({
  name: yup.string().required('requiredField'),
  telephone: yup.number().required('requiredField'),
  email: yup.string().email('invalidEmail').required('requiredField'),
  message: yup.string().required('requiredField')
})

export default {
  defaultValues,
  schema
}
