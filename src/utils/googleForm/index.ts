type getMembershipFormUrlClientProps = {
  membershipCategory: string
  name: string
  personalMembershipCategory: string
  profession: string
  reasonJoin: string
  telephone: string
  email: string
  companyCategory: string
  position: string
}

const getMembershipFormUrlClient = ({
  membershipCategory,
  name,
  personalMembershipCategory,
  profession,
  reasonJoin,
  telephone,
  email,
  companyCategory,
  position
}: getMembershipFormUrlClientProps): string =>
  `/api/membership-form/?membershipCategory=${membershipCategory}&name=${name}&personalMembershipCategory=${personalMembershipCategory}&profession=${profession}&email=${email}&reasonJoin=${reasonJoin}&telephone=${telephone}&companyCategory=${companyCategory}&position=${position}`

type getContactFormUrlClientProps = {
  telephone: string
  message: string
  email: string
  name: string
}

const getContactFormUrlClient = ({
  telephone,
  message,
  email,
  name
}: getContactFormUrlClientProps): string =>
  `/api/contact-form/?&name=${name}&email=${email}&telephone=${telephone}&message=${message}`

export default {
  getMembershipFormUrlClient,
  getContactFormUrlClient
}
