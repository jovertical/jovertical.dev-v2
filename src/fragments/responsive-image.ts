import { graphql } from '@/lib/graphql'

export const ResponsiveImageFragment = graphql(`
  fragment ResponsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    base64
  }
`)
