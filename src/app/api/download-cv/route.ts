import { NextRequest } from 'next/server';
import http from 'tiny-json-http';

import { json } from '@/app/api/utils';
import { sleep } from '@/utils';

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  await sleep(3000);

  // return json({ data: null, message: 'Copy of CV sent to your email.' }, 200);

  return json('Error: Not yet implemented', 422);
}
