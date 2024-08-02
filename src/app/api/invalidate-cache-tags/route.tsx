/*
 * This route handler receives "Cache Tag Invalidation" events from a DatoCMS
 * webhook, and is responsible for invalidating every cached GraphQL query that
 * is linked to those tags.
 *
 * This is possible because `executeQuery()` in lib/fetch-content.ts does two
 * things:
 *
 * - It tags each GraphQL request with a unique ID in the Next.js Data Cache
 * - It saves the mapping "Query ID <-> Cache Tags" on a Turso database
 *
 * So, we just need to query the DB to find the query IDs related to the
 * received tags, and use `revalidateTag()` to invalidate the relevant requests.
 *
 * Read more: https://www.datocms.com/docs/content-delivery-api/cache-tags#step-3-implement-the-invalidate-cache-tag-webhook
 */

import { NextResponse } from 'next/server'

import { deleteQueries, queriesReferencingCacheTags } from '@/lib/database'
import type { CacheTag } from '@/lib/cache-tags'
import { revalidateTag } from 'next/cache'

export const dynamic = 'force-dynamic' // defaults to auto

type CdaCacheTagsInvalidateWebhook = {
  entity_type: 'cda_cache_tags'
  event_type: 'invalidate'
  entity: {
    id: 'cda_cache_tags'
    type: 'cda_cache_tags'
    attributes: {
      // The array of DatoCMS Cache Tags that need to be invalidated
      tags: CacheTag[]
    }
  }
}

export async function POST(request: Request) {
  if (request.headers.get('Webhook-Token') !== process.env.SECRET_API_TOKEN) {
    return NextResponse.json(
      {
        error:
          'You need to provide a secret token in the `Webhook-Token` header for this endpoint.',
      },
      { status: 401 }
    )
  }

  const data = (await request.json()) as CdaCacheTagsInvalidateWebhook

  const cacheTags = data.entity.attributes.tags

  const queryIds = await queriesReferencingCacheTags(cacheTags)

  await deleteQueries(queryIds)

  for (const queryId of queryIds) {
    /**
     * The `revalidateTag()` function provided by Next.js actually performs a
     * cache invalidation: this means that the cache entries previously
     * associated with the given tag are immediately marked as outdated (the
     * process is so fast that the method is even synchronous).
     *
     * The next time someone requests any of these outdated entries, the cache
     * will respond with a MISS.
     */
    revalidateTag(queryId)
  }

  return NextResponse.json({ cacheTags, queryIds })
}
