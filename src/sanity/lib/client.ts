import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // If your app is statically generated, set this to `false`.
  // If you're using ISR or tag-based revalidation, set this to `false` and enable perspective.
  useCdn: process.env.NODE_ENV === 'production',
})
