import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {presentationTool} from '@sanity/presentation'
import {schemaTypes} from './schemas'

const singletonTypes = new Set([
  'about',
  'banner',
  'experience',
  'footer',
  'frameworks',
  'philosophy',
  'projects',
  'skillset',
])

export default defineConfig({
  name: 'default',
  title: 'Wesley Ukadike Portfolio',

  projectId: 'orygd7ym',
  dataset: 'production',

  plugins: [
    deskTool(),
    ...(process.env.NODE_ENV !== 'production' ? [visionTool()] : []),
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_ORIGIN || 'http://localhost:3000',
        preview: '/',
        draftMode: {
          enable: '/preview/enable',
        },
      },
      locate: async ({documentId, documentType}) => {
        // For this portfolio site, most content is on the home page
        // Projects page for projects content
        if (documentType === 'projects') {
          return {
            documentId,
            documentType,
            path: '/projects',
          }
        }

        // All other content types are displayed on the home page
        return {
          documentId,
          documentType,
          path: '/',
        }
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    newDocumentOptions: previous => previous.filter(
      template => !singletonTypes.has(template.templateId),
    ),
    actions: (previous, context) => singletonTypes.has(context.schemaType)
      ? previous.filter(action => !['delete', 'duplicate'].includes(action.action))
      : previous,
  },
})
