import type { Metadata } from 'next'

import SocialLinks from '@/app/(home)/_components/social-links'
import { executeQuery } from '@/lib/fetch-content'
import { generateStaticMetadataFn } from '@/lib/generate-metadata'
import { graphql } from '@/lib/graphql'
import { header } from '@/app/(home)/header'
import withPageHeader from '@/app/_hoc/with-page-header'

const GET_BIO_QUERY = graphql(/* GraphQL */ `
  query Bio {
    bio {
      twitterUrl
      instagramUrl
      githubUrl
      linkedinUrl
    }
  }
`)

export const metadata: Metadata = generateStaticMetadataFn({
  title: 'Jovert Palonpon - Software engineer, web developer',
  description: `Hi, I'm Jovert, a software engineer based in Manila, Philippines. I'm passionate about building web applications and learning new technologies. I love to travel as well, exploring the beauty of nature and experiencing different cultures.`,
})

async function Page() {
  const {
    data: { bio },
  } = await executeQuery(GET_BIO_QUERY)

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
