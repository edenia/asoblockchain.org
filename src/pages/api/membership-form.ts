// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise'
import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'

import { routeUtils } from 'utils'
// import { Header } from 'config/constants'
// import { reCaptchaConfig, hubspotConfig } from 'config'

export const GOOGLE_FORMS_URL = 'https://docs.google.com/forms/d'

type Response = {
  message: string
}

// const reCaptchaClient = new RecaptchaEnterpriseServiceClient()

const createTicket = async (
  req: NextApiRequest,
  res: NextApiResponse<Response>
): Promise<void> => {
  try {
    const query = req?.query
    // const reCaptchaToken = routeUtils.getAsString(
    //   req?.headers?.[Header.RE_CAPTCHA_TOKEN]
    // )

    const membershipCategory = routeUtils.getAsString(query?.membershipCategory)
    const name = routeUtils.getAsString(query?.name)
    const personalMembershipCategory = routeUtils.getAsString(
      query?.personalMembershipCategory
    )
    const profession = routeUtils.getAsString(query?.profession)
    const reasonJoin = routeUtils.getAsString(query?.reasonJoin)
    const telephone = routeUtils.getAsString(query?.telephone)
    const email = routeUtils.getAsString(query?.email)
    const companyCategory = routeUtils.getAsString(query?.companyCategory)
    const position = routeUtils.getAsString(query?.position)

    const entryText = `entry.904123975=${membershipCategory}&entry.568611833=${companyCategory}&entry.359165225=${name}&entry.1834504625=${position}&entry.1103985887=${telephone}&entry.935974330=${email}&entry.136081518=${personalMembershipCategory}&entry.1731221126=${name}&entry.888535422=${profession}&entry.1095448539=${reasonJoin}`

    const fetchedResult = await fetch(
      `${GOOGLE_FORMS_URL}/e/1FAIpQLSekqLCXiM1S5tCGDVOoXA_I86scU0c0TKepiMUhUWFfyib_fQ/formResponse?&${entryText}&submit=Submit`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    // if (response?.status === 200) {
    //   res.status(200).json({
    //     message:
    //       'Gracias por contactar a Edenia. Le responderemos lo antes posible'
    //   })
    // } else {
    //   res.status(500).json({ message: 'failed to contact form data' })
    // }
  } catch (error) {
    res.status(500).json({ message: 'Interval server error' })
  }
}

export default createTicket
