import type { Media } from '@/data/media.data'
import { rescue } from '@/utils'
import { send } from '@/utils/api'

export type Project = {
  id: string
  name: string
  description: string
  slug: string
  logo: Media | null
  websiteLink: string
  position: number
  createdAt: string
  _publishedAt: string
}

export const getProjects = (limit?: number) => {
  return rescue(async () => {
    const data = await send({
      query: `
        query projectsList {
          allProjects(
            ${limit ? `first: ${limit},` : ''}
            orderBy: position_ASC
          ) {
            id,
            name,
            description,
            slug,
            logo {
              id,
              url,
              size,
              width,
              height
            },
            websiteLink,
            position,
            createdAt,
            _publishedAt,
          }
        }
      `,
      next: {
        revalidate: 3600 * 24 * 7, // 1 week
        tags: ['projects', 'projects:all'],
      },
    })

    return data.allProjects as Project[]
  }, [])
}
