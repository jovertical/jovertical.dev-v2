'use server'

import MailerLite from '@mailerlite/mailerlite-nodejs'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

import { rescue } from '@/utils'

const schema = z.object({
  email: z.string().email(),
})

export default async function subscribe(data: FormData) {
  const mailerLite = new MailerLite({
    api_key: process.env.MAILER_LITE_API_KEY ?? '',
  })

  try {
    const { email } = schema.parse({
      email: data.get('email'),
    })

    const subscription = await rescue(async () => {
      const response = await mailerLite.subscribers.createOrUpdate({ email })

      const newSubscription = response.data?.data

      if (!newSubscription) {
        throw new Error('Subscription failed.')
      }

      await mailerLite.groups.assignSubscriber(
        newSubscription.id,
        '84700780829869128' // 'Default' group
      )

      return newSubscription
    }, null)

    revalidatePath('/')

    return {
      success: true,
      data: subscription,
      message: 'Subscription successful',
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.issues[0].message,
      }
    }

    return {
      success: false,
      message: error instanceof Error ? error.message : 'Subscription failed.',
    }
  }
}
