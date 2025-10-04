import { createClient } from '@sanity/client'

export const projectId = 'q26e4dqa'
export const dataset = 'production'
export const apiVersion = '2023-10-01'

export function getClient(preview = false) {
  const token = preview ? import.meta.env.VITE_SANITY_READ_TOKEN : undefined
  const usePreview = Boolean(token && preview)
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: !usePreview,
    token,
    perspective: usePreview ? 'previewDrafts' : 'published',
  })
}

const client = getClient(false)
export default client
