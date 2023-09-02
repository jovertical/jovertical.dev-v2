import MailerLite from '@mailerlite/mailerlite-nodejs';
import { NextRequest } from 'next/server';

import { rescue } from '@/utils';

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  const mailerLite = new MailerLite({
    api_key: process.env.MAILER_LITE_API_KEY ?? '',
  });

  const subscription = await rescue(async () => {
    const response = await mailerLite.subscribers.createOrUpdate({
      email,
    });

    const newSubscription = response.data?.data;

    if (!newSubscription) {
      throw new Error('Subscription failed.');
    }

    await mailerLite.groups.assignSubscriber(
      newSubscription.id,
      '84700780829869128' // 'Default' group
    );

    return newSubscription;
  }, null);

  if (!subscription || subscription.status !== 'active') {
    return new Response(JSON.stringify({ error: 'Error subscribing' }), {
      status: 409,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return new Response(
    JSON.stringify({ data: subscription, message: 'Subscription successful' }),
    {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
