import { graphql } from '@/lib/graphql'

export const TagFragment = graphql(/* GraphQL */ `
  fragment TagFragment on Tag @_unmask {
    tag
    attributes
    content
  }
`)
