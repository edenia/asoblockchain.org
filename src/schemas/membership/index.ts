import * as yup from 'yup'

export type MembershipType = {
  membershipCategory: string
  name: string
  personalMembershipCategory?: string
  profession?: string
  reasonJoin?: string
  telephone: string
  email: string
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
  personalMembershipCategory: yup.string().notRequired(),
  profession: yup.string().notRequired(),
  reasonJoin: yup.string().notRequired(),
  telephone: yup.string().required('requiredField'),
  email: yup.string().email('invalidEmail').required('requiredField'),
  companyCategory: yup.string().notRequired(),
  position: yup.string().notRequired()
})

export default {
  defaultValues,
  schema
}
