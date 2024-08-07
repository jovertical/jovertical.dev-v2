import { EnvelopeIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import GithubIcon from '@/components/icons/github-icon'
import InstagramIcon from '@/components/icons/instagram-icon'
import LinkedinIcon from '@/components/icons/linkedin-icon'
import PageHeader from '@/components/page-header'
import TwitterIcon from '@/components/icons/twitter-icon'
import { executeQuery } from '@/lib/fetch-content'
import { generateStaticMetadataFn } from '@/lib/generate-metadata'
import { graphql } from '@/lib/graphql'
import { toMarkdownString } from '@/lib/unified'

const GET_BIO_QUERY = graphql(/* GraphQL */ `
  query Bio {
    bio {
      about
      email
      twitterUrl
      instagramUrl
      githubUrl
      linkedinUrl
    }
  }
`)

export const metadata: Metadata = generateStaticMetadataFn({
  title: 'About - Jovert Palonpon',
  description: `I'm Jovert Palonpon. I live in Manila, Philippines where I work remotely as a Software Engineer`,
})

export default async function Page() {
  const {
    data: { bio },
  } = await executeQuery(GET_BIO_QUERY)

  if (!bio) return notFound()

  const content = await toMarkdownString(bio?.about ?? '')

  return (
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      <div className="lg:pl-20">
        <div className="max-w-xs px-2.5 lg:max-w-none">
          <Image
            src="/images/featured/3.jpeg"
            alt="Jovert Palonpon"
            className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
            width={480}
            height={640}
          />
        </div>
      </div>

      <div className="lg:order-first lg:row-span-2">
        <PageHeader title="I'm Jovert Palonpon. I live in Manila, Philippines where I work remotely as a Software Engineer"></PageHeader>

        <div
          className="mt-6 prose dark:prose-invert"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        ></div>
      </div>

      <div className="lg:pl-20">
        <ul role="list">
          {bio.twitterUrl && (
            <li className="flex">
              <a
                href={bio.twitterUrl}
                className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
              >
                <TwitterIcon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500"></TwitterIcon>
                <span className="ml-4">Follow on Twitter</span>
              </a>
            </li>
          )}

          {bio.instagramUrl && (
            <li className="flex mt-4">
              <a
                href={bio.instagramUrl}
                className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
              >
                <InstagramIcon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500"></InstagramIcon>
                <span className="ml-4">Follow on Instagram</span>
              </a>
            </li>
          )}

          {bio.githubUrl && (
            <li className="flex mt-4">
              <a
                href={bio.githubUrl}
                className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
              >
                <GithubIcon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500"></GithubIcon>
                <span className="ml-4">Follow on Github</span>
              </a>
            </li>
          )}

          {bio.linkedinUrl && (
            <li className="flex mt-4">
              <a
                href={bio.linkedinUrl}
                className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
              >
                <LinkedinIcon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500"></LinkedinIcon>
                <span className="ml-4">Follow on LinkedIn</span>
              </a>
            </li>
          )}

          {bio.email && (
            <li className="flex items-center pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40">
              <a
                href={`mailto:${bio.email}`}
                className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
              >
                <EnvelopeIcon className="flex-none w-5 h-5 transition fill-zinc-500 group-hover:fill-teal-500"></EnvelopeIcon>
                <span className="ml-4">{bio.email}</span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
