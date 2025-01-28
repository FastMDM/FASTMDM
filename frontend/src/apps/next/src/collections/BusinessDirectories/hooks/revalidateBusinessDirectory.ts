import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { BusinessDirectory } from '../../../payload-types'

export const revalidateBusinessDirectory: CollectionAfterChangeHook<BusinessDirectory> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/business-directories/${doc.slug}`

      payload.logger.info(`Revalidating business directories at path: ${path}`)

      revalidatePath(path)
      revalidateTag('business-directories-sitemap')
    }

    // If the business directory was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/business-directories/${previousDoc.slug}`

      payload.logger.info(`Revalidating old business directory at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('business-directory-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<BusinessDirectory> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/business-directories/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('business-directories-sitemap')
  }

  return doc
}
