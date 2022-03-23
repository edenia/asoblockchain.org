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

    const name = routeUtils.getAsString(query?.name)
    const telephone = routeUtils.getAsString(query?.telephone)
    const email = routeUtils.getAsString(query?.email)
    const message = routeUtils.getAsString(query?.message)

    const entryText = `entry.2005620554=${name}&entry.1166974658=${telephone}&entry.1045781291=${email}&entry.839337160=${message}`

    const fetchedResult = await fetch(
      `${GOOGLE_FORMS_URL}/e/1FAIpQLSftGcrRtFBBb9v-fdnqBC-Le7sl2NmbntXHLFmnze7_4orNkA/formResponse?&${entryText}&submit=Submit`,
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
