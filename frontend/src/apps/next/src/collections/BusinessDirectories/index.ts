import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { slugField } from '@/fields/slug'
import { revalidateDelete, revalidateBusinessDirectory } from './hooks/revalidateBusinessDirectory'

export const BusinessDirectories: CollectionConfig = {
  slug: 'business-directories',
  
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      index: true,
      localized: true,
    },
    {
      name: 'titleen',
      type: 'text',
      required: false,
    },
    {
      name: 'parenttitle',
      type: 'text',
      required: false,
    },
    {
      name: 'parentid',
      type: 'number',
      required: false,
    },
    {
      name: 'oldcode',
      type: 'text',
      required: false,
    },
    {
      name: 'old_created_at',
      type: 'date',
      required: false,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime'
        },
      },
    },
    {
      name: 'old_updated_at',
      type: 'date',
      required: false,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime'
        },
      },
    },
    {
      name: 'created_by_id',
      type: 'number',
      required: false,
    },
    {
      name: 'updated_by_id',
      type: 'number',
      required: false,
    },
    {
      name: 'locale',
      type: 'text',
      required: false,
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidateBusinessDirectory],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
