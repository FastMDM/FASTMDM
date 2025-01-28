import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Business } from '../../../payload-types'

export const revalidateBusiness: CollectionAfterChangeHook<Business> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/businesses/${doc.slug}`

      payload.logger.info(`Revalidating businesses at path: ${path}`)

      revalidatePath(path)
      revalidateTag('businesses-sitemap')
    }

    // If the business was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/businesses/${previousDoc.slug}`

      payload.logger.info(`Revalidating old business at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('business-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Business> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/businesses/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('businesses-sitemap')
  }

  return doc
}
