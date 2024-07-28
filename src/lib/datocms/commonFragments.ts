import { gql } from '@/lib/datocms/graphql'

/*
 * This file lists a series of fragments not related to any specific React
 * component, but necessary in various parts of the code.
 */

export const TagFragment = gql(/* GraphQL */ `
  fragment TagFragment on Tag @_unmask {
    tag
    attributes
    content
  }
`)
