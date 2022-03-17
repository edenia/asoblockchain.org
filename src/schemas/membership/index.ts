import * as yup from 'yup'

export type MembershipType = {
  membershipCategory?: string
  name?: string
  personalMembershipCategory?: string
  profession?: string
  reasonJoin?: string
  telephone?: string
  email?: string
  companyCategory?: string
  position?: string
}

const defaultValues = {
  membershipCategory: '',
  name: '',
  personalMembershipCategory: '',
  profession: '',
  reasonJoin: '',
  telephone: '',
  email: '',
  companyCategory: '',
  position: ''
}

const schema = yup.object().shape({
  membershipCategory: yup.string().required('requiredField'),
  name: yup.string().required('requiredField'),
  personalMembershipCategory: yup.string().required('requiredField'),
  profession: yup.string().required('requiredField'),
  reasonJoin: yup.string().required('requiredField'),
  telephone: yup.number().required('requiredField'),
  email: yup.string().email('invalidEmail').required('requiredField'),
  companyCategory: yup.string().required('requiredField'),
  position: yup.string().required('requiredField')
})

export default {
  defaultValues,
  schema
}
