import { NextRequest } from 'next/server';
import http from 'tiny-json-http';

import { json } from '@/app/api/utils';
import { rescue } from '@/utils';

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  const subscription = await rescue(async () => {
    const { body } = await http.post({
      url: `https://api.beehiiv.com/v2/publications/pub_f0a517bf-02ba-47a7-8d38-af4608f98452/subscriptions`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
      },
      data: {
        email,
        reactivate_existing: true,
        send_welcome_email: true,
        referring_site: request.nextUrl.origin,
      },
    });

    return body.data;
  }, null);

  if (!subscription || subscription.status !== 'active') {
    return json('Error subscribing.', 422);
  }

  return json({ data: subscription }, 201);
}
