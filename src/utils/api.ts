import tiny from 'tiny-json-http';

interface SendOptions {
  query: string;
  variables?: Record<string, any>;
  preview?: boolean;
}

export let send = async ({
  query,
  variables = {},
  preview = false,
}: SendOptions) => {
  const { body } = await tiny.post({
    url: `https://graphql.datocms.com${preview ? '/preview' : ''}`,
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
    data: {
      query,
      variables,
    },
  });

  if (body.errors) {
    console.error('Ouch! The query has some errors!');

    throw body.errors;
  }

  return body.data;
};