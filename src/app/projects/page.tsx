import Image from 'next/image'
import { LinkIcon } from '@heroicons/react/24/solid'
import type { Metadata } from 'next'

import GithubIcon from '@/ui/icons/github-icon'
import { createMetadata } from '@/lib/seo'
import { executeQuery } from '@/lib/datocms/executeQuery'
import { gql } from '@/lib/datocms/graphql'
import { header } from '@/app/projects/header'
import withPageHeader from '@/app/_hoc/with-page-header'

const query = gql(/* GraphQL */ `
  query GetProjects($limit: IntType) {
    allProjects(first: $limit, orderBy: position_ASC) {
      id
      name
      description
      logo {
        id
        url
        width
        height
      }
      websiteLink
    }
  }
`)

export const metadata: Metadata = createMetadata({
  title: 'Projects - Jovert Palonpon',
  description: `I work full time as a software engineer for companies, making me fully occupied, but when I have some free time, I work on my own projects. Some of them are freelance work, some of them are just for fun, and some of them are just for me to learn new things.`,
})

async function Page() {
  const { allProjects: projects } = await executeQuery(query)

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <li
          key={project.id}
          className="group relative flex flex-col items-start"
        >
          <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            {project.logo ? (
              <Image
                className="w-8 h-8 rounded-full object-cover object-center"
                src={project.logo.url}
                alt={`${project.name} Logo`}
                width={project.logo.width || 64}
                height={project.logo.height || 64}
              ></Image>
            ) : (
              <GithubIcon className="w-8 h-8 fill-zinc-800 dark:fill-zinc-200"></GithubIcon>
            )}
          </div>

          <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
            <div className="absolute z-0 transition scale-95 opacity-0 -inset-x-4 -inset-y-6 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>

            <a href={project.websiteLink || '#'}>
              <span className="absolute z-20 -inset-x-4 -inset-y-6 sm:-inset-x-6 sm:rounded-2xl"></span>
              <span className="relative z-10">{project.name}</span>
            </a>
          </h2>

          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>

          {project.websiteLink && (
            <p className="relative z-10 flex mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="flex-none w-5 h-5"></LinkIcon>
              <span className="ml-2">{project.websiteLink}</span>
            </p>
          )}
        </li>
      ))}
    </ul>
  )
}

export default withPageHeader(Page, header)
