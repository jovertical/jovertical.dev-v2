'use server'

import { render } from '@react-email/render'
import { z } from 'zod'

import CvCopyMail from '@/components/mails/cv-copy-mail'
import { rescue } from '@/utils'
import { sendEmail } from '@/lib/nodemailer'

const schema = z.object({
  email: z.string().email(),
})

export default async function downloadCv(data: FormData) {
  try {
    const { email: to } = schema.parse({
      email: data.get('email'),
    })

    const email = await rescue(() => {
      return sendEmail({
        to,
        subject: 'Here is a copy of my CV - Jovert Palonpon',
        html: render(
          CvCopyMail({
            url: process.env.CV_DOWNLOAD_URL ?? '',
            fallbackUrl: process.env.CV_PREVIEW_URL ?? '',
          })
        ),
      })
    }, null)

    if (!email || email.rejected.includes(to)) {
      return {
        success: false,
        message: 'Sending email failed',
      }
    }

    return {
      success: true,
      message: 'Copy of CV sent to email.',
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
      message: error instanceof Error ? error.message : 'Sending email failed.',
    }
  }
}
