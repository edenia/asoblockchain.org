import { DefaultSeoProps } from 'next-seo'
const title = 'Asoblockchain website'
const description = 'Asoblockchain website'
const url = 'https://asoblockchain.org/'

const SEO: DefaultSeoProps = {
  titleTemplate: 'Asoblockchain | %s',
  title,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    locale: 'en',
    url,
    title,
    description,
    site_name: 'Asoblockchain',
    images: [
      {
        url: `${url}/images/preview-image.png`,
        alt: title
      }
    ]
  },
  twitter: {
    handle: 'Asoblockchain',
    site: 'Asoblockchain',
    cardType: 'summary_large_image'
  }
}

export default SEO
