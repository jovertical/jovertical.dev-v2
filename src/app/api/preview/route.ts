import { NextRequest } from 'next/server';
import queryString from 'query-string';

import { json } from '@/app/api/utils';
import { findArticle } from '@/data/article.data';
import { match } from '@/utils/object';

export async function GET(request: NextRequest) {
  const { query } = queryString.parseUrl(request.url);

  // This secret should only be known to this API route and the CMS
  // prettier-ignore
  if ((query.secret ?? 'invalid-preview-secret') !== process.env.NEXT_DATO_CMS_PREVIEW_SECRET) {
    return json('Invalid preview secret', 401);
  }

  const previewUrl = Array.isArray(query.slug) ? query.slug[0] : query.slug;

  const [, resource = null, slug = null] = (previewUrl ?? '/').split('/');

  // Check if a resource type is given and if it's valid
  if (!resource || !['articles'].includes(resource)) {
    return json('Invalid resource type', 401);
  }

  const findResource = match(resource as 'articles', {
    articles: findArticle,
    DEFAULT: () => {},
  });

  await findResource(slug, true);

  // See: https://beta.nextjs.org/docs/app-directory-roadmap#other
  return json('Preview mode is not yet supported', 400);
}
