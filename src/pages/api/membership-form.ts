// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'

import { routeUtils } from 'utils'

export const GOOGLE_FORMS_URL = 'https://docs.google.com/forms/d'

type Response = {
  message: string
}

const createTicket = async (
  req: NextApiRequest,
  res: NextApiResponse<Response>
): Promise<void> => {
  try {
    const query = req?.query

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

    const entryText = `entry.749559349=${membershipCategory}&entry.1343021760=${companyCategory}&entry.175540967=${name}&entry.222007779=${position}&entry.134812330=${telephone}&entry.1300913304=${email}&entry.778273237=${personalMembershipCategory}&entry.833142240=${name}&entry.1584595545=${profession}&entry.1743773150=${reasonJoin}`

    const fetchedResult = await fetch(
      `${GOOGLE_FORMS_URL}/e/1FAIpQLSfS9Scja8Zz3n5PTnx7lBlSiRafynVeS3wnNCasLDaOkNBy7w/formResponse?&${entryText}&submit=Submit`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    if (fetchedResult?.status === 200) {
      res.status(200).json({
        message:
          'Gracias por contactar a Asoblockchain. Le responderemos lo antes posible'
      })
    } else {
      res.status(500).json({ message: 'failed to contact form data' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Interval server error' })
  }
}

export default createTicket
