import type { Metadata } from 'next'

import SocialLinks from '@/app/(home)/_components/social-links'
import { createMetadata } from '@/lib/seo'
import { executeQuery } from '@/lib/datocms/executeQuery'
import { gql } from '@/lib/datocms/graphql'
import { header } from '@/app/(home)/header'
import withPageHeader from '@/components/with-page-header'

const query = gql(/* GraphQL */ `
  query Bio {
    bio {
      twitterUrl
      instagramUrl
      githubUrl
      linkedinUrl
    }
  }
`)

export const metadata: Metadata = createMetadata({
  title: 'Jovert Palonpon - Software engineer, web developer',
  description: `Hi, I'm Jovert, a software engineer based in Manila, Philippines. I'm passionate about building web applications and learning new technologies. I love to travel as well, exploring the beauty of nature and experiencing different cultures.`,
})

async function Page() {
  const { bio } = await executeQuery(query)

  if (!bio) return null

  return (
    <SocialLinks
      className="mt-6"
      twitterUrl={bio.twitterUrl}
      instagramUrl={bio.instagramUrl}
      githubUrl={bio.githubUrl}
      linkedinUrl={bio.linkedinUrl}
    />
  )
}

export default withPageHeader(Page, header)
