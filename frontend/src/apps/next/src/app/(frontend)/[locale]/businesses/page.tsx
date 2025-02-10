import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { TypedLocale } from 'payload'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export const revalidate = 600

type Args = {
  params: Promise<{
    locale: TypedLocale
  }>
}

export default async function Page({ params }: Args) {
  const { locale = 'en' } = await params
  const t = await getTranslations()
  const payload = await getPayload({ config: configPromise })

  const businesses = await payload.find({
    collection: 'businesses',
    locale,
    depth: 1,
    limit: 12,
    overrideAccess: false,
  })
// console.log (businesses);
  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>{t('businesses')}</h1>
        </div>
      </div>

      <div className="container mb-8">
        <PageRange
          collection="businesses"
          currentPage={businesses.page}
          limit={12}
          totalDocs={businesses.totalDocs}
        />
      </div>
{/*
      <CollectionArchive posts={posts.docs} />
*/}
      <div className="container">
        {businesses.totalPages > 1 && businesses.page && (
          <Pagination page={businesses.page} totalPages={businesses.totalPages} />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Businesses`,
  }
}
