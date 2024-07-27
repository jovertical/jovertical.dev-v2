import type { Media } from '@/data/media.data'
import { rescue } from '@/utils'
import { send } from '@/utils/api'

export type Experience = {
  id: string
  from: number
  to: number | null
  title: string
  company: string
  companyLogo: Media | null
  companyWebsite: string
  description: string
}

export let getExperiences = () => {
  return rescue(async () => {
    const data = await send({
      query: `
        query experienceList {
          allExperiences(
            orderBy: [from_DESC, to_DESC]
          ) {
            id,
            from,
            to,
            company,
            companyLogo {
              id
              url
              size
              width
              height
            },
            companyWebsite,
            title,
            description,
          }

          _allExperiencesMeta {
            count
          }
        }
      `,
      next: {
        revalidate: 3600 * 24 * 7, // 1 week
        tags: ['experiences', 'experiences:all'],
      },
    })

    return data.allExperiences as Experience[]
  }, [])
}
