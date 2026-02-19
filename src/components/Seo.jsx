import { useEffect } from 'react'
import { SITE } from '../data/siteData'

function Seo({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE.name}` : `${SITE.name} | Premium Forex Broker`

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description)
    }
  }, [title, description])

  return null
}

export default Seo
