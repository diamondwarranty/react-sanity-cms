import client, { getClient } from '../client'

export const globalSeoQuery = `*[_type == "siteSettings"][0]{
  globalSeo{ title, description }
}`

export async function fetchGlobalSeo(preview=false) {
  const c = preview ? getClient(true) : client
  const data = await c.fetch(globalSeoQuery)
  return data?.globalSeo || {}
}

export function resolveSeo({ page, fallback }) {
  const baseTitle = page?.seoTitle || fallback?.title || 'Diamond Warranty'
  const brand = 'Diamond Warranty'
  const title = baseTitle.includes(brand) ? baseTitle : `${baseTitle} | ${brand}`
  const description = page?.seoDescription || fallback?.description || ''
  return { title, description }
}
