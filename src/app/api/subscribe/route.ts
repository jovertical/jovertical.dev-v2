import MailerLite from '@mailerlite/mailerlite-nodejs';
import { NextRequest } from 'next/server';

import { json } from '@/app/api/utils';
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
    return json('Error subscribing.', 422);
  }

  return json({ data: subscription }, 201);
}
