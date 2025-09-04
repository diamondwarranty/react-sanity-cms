import { createClient } from '@sanity/client'

export default createClient ({
    projectId: "96qtlbls",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-10-01"
})