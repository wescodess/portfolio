import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityImage } from '~/types/portfolio'

const builder = createImageUrlBuilder({
  dataset: 'production',
  projectId: 'orygd7ym',
})

export function sanityImage(source: SanityImage | null | undefined) {
  return source ? builder.image(source).auto('format') : null
}
