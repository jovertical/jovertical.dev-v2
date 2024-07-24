import type { Metadata } from 'next'

export const createMetadata = (data: Metadata) => {
  return {
    ...data,

    openGraph: {
      title: data.title,
      description: data.description,
      siteName: 'jovertical.dev',
      images: ['https://www.datocms-assets.com/38847/1680882343-boxed.png'],
      ...data.openGraph,
    },

    alternates: {
      types: {
        'application/rss+xml': [
          {
            url: 'https://www.jovertical.dev/rss.xml',
            title: 'All Articles',
          },
        ],
      },
    },
  } as Metadata
}
