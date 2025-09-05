import { useEffect } from 'react'

export default function SEO({ title, description, image, noIndex = false, canonical }) {
  useEffect(() => {
    if (title) {
      document.title = title
    }

    const ensureMeta = (name, attr, content) => {
      if (!content) return
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    const ensureLink = (rel, href) => {
      if (!href) return
      let el = document.querySelector(`link[rel="${rel}"]`)
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
    }

    const url = canonical || window.location.href

    ensureMeta('description', 'name', description)
    ensureMeta('og:title', 'property', title)
    ensureMeta('og:description', 'property', description)
    ensureMeta('og:type', 'property', 'website')
    ensureMeta('og:url', 'property', url)
    if (image) ensureMeta('og:image', 'property', image)
    ensureMeta('twitter:card', 'name', 'summary_large_image')
    ensureMeta('twitter:title', 'name', title)
    ensureMeta('twitter:description', 'name', description)
    if (image) ensureMeta('twitter:image', 'name', image)

    ensureLink('canonical', url)

    // robots
    if (noIndex) {
      ensureMeta('robots', 'name', 'noindex, nofollow')
    }
  }, [title, description, image, noIndex, canonical])

  return null
}
