import type { NextRequest, NextResponse } from 'next/server'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

import { handleUnexpectedError, invalidRequestResponse } from '@/utils'
import { makeDraftModeWorkWithinIframes } from '@/lib/draft-mode'

export const dynamic = 'force-dynamic'

/**
 * This route handler enables Next.js Draft Mode: we simply follow what the
 * guide says!
 *
 * https://nextjs.org/docs/app/building-your-application/configuring/draft-mode
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  // Parse query string parameters
  const token = request.nextUrl.searchParams.get('token')
  const url = request.nextUrl.searchParams.get('url') || '/'

  console.log('token', token)
  console.log('url', url)

  try {
    // Ensure that the request is coming from a trusted source
    if (token !== process.env.SECRET_API_TOKEN) {
      return invalidRequestResponse('Invalid token', 401)
    }

    // Avoid open redirect vulnerabilities
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return invalidRequestResponse('URL must be relative!', 422)
    }

    draftMode().enable()

    makeDraftModeWorkWithinIframes()
  } catch (error) {
    return handleUnexpectedError(error)
  }

  redirect(url)
}
