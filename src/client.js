import { createClient } from '@sanity/client'

export default createClient ({
    projectId: "r9lui59o",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-10-01"
})