interface SendOptions {
  query: string
  variables?: Record<string, any>
  preview?: boolean
  cache?: RequestInit['cache']
  next?: NextFetchRequestConfig
}

export const send = async ({
  query,
  variables = {},
  preview = false,
  next,
}: SendOptions) => {
  const response = await fetch(
    `https://graphql.datocms.com${preview ? '/preview' : ''}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.DATO_CMS_API_TOKEN}`,
      },
      body: JSON.stringify({ query, variables }),
      next,
    }
  )

  if (!response.ok) {
    console.error('Ouch! The query has some errors!')

    throw await response.text()
  }

  const body = await response.json()

  return body.data
}
