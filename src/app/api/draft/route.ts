import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import queryString from 'query-string';

import { json } from '@/app/api/utils';
import { findArticle } from '@/data/article.data';

export async function GET(request: Request) {
  const { query } = queryString.parseUrl(request.url);

  // This secret should only be known to this API route and the CMS
  // prettier-ignore
  if ((query.secret ?? 'invalid-secret') !== process.env.DATO_CMS_PREVIEW_SECRET) {
    return json('Invalid secret', 401);
  }

  const slug = Array.isArray(query.slug) ? query.slug[0] : query.slug;

  const article = await findArticle(slug ?? '', { preview: true });

  if (!article?.slug) {
    return json('Invalid slug', 404);
  }

  draftMode().enable();

  return redirect('/articles/' + article.slug);
}
