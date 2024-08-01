import * as React from 'react'
import Image from 'next/image'
import d from 'dayjs'

import BriefCaseIcon from '@/components/icons/briefcase-icon'
import { executeQuery } from '@/lib/datocms/executeQuery'
import { gql } from '@/lib/datocms/graphql'

const query = gql(/* GraphQL */ `
  query GetExperiences {
    allExperiences(orderBy: [from_DESC, to_DESC]) {
      id
      from
      to
      company
      companyLogo {
        id
        url
        width
        height
      }
      title
    }
  }
`)

export default async function Page() {
  const { allExperiences: experiences } = await executeQuery(query)

  const isPresent = (experience: (typeof experiences)[0]) => {
    return experience.to === null
  }

  return (
    <div className="p-6 border rounded-2xl border-zinc-100 dark:border-zinc-700/40">
      <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefCaseIcon className="flex-none w-6 h-6"></BriefCaseIcon>
        <span className="ml-3">Work</span>
      </h2>

      <ol className="mt-6 space-y-4">
        {experiences.map((experience) => (
          <li key={experience.id} className="flex gap-4">
            <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              {experience.companyLogo && experience.companyLogo.url && (
                <Image
                  className="rounded-full h-7 w-7"
                  src={experience.companyLogo.url}
                  alt={`${experience.company} Logo`}
                  width={experience.companyLogo.width ?? 32}
                  height={experience.companyLogo.height ?? 32}
                />
              )}
            </div>

            <dl className="flex flex-wrap flex-auto gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="flex-none w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {experience.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {experience.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={
                  isPresent(experience)
                    ? `Since ${experience.from}`
                    : `${experience.from} until ${experience.to}`
                }
              >
                <time dateTime={`${experience.from}`}>{experience.from}</time>
                <span aria-hidden="true">{' - '}</span>
                <time dateTime={`${experience.to ?? d().year()}`}>
                  {isPresent(experience) ? 'Present' : experience.to}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>

      {/* <div>{children}</div> */}
    </div>
  )
}
