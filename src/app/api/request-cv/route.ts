import { render } from '@react-email/render';
import { NextRequest } from 'next/server';

import { json } from '@/app/api/utils';
import CvCopyMail from '@/components/mails/cv-copy-mail';
import { sendEmail } from '@/utils/emails';
import { rescue } from '@/utils';

export async function POST(request: NextRequest) {
  const input = await request.json();

  // prettier-ignore
  const email = await rescue(() => {
    return sendEmail({
      to: input.email,
      subject: 'Here is a copy of my CV - Jovert Palonpon',
      html: render(
        CvCopyMail({
          url: process.env.NEXT_MY_CV_DOWNLOAD_URL ?? '',
          fallbackUrl: process.env.NEXT_MY_CV_PREVIEW_URL ?? '',
        })
      ),
    });
  }, null);

  if (!email || email.rejected.includes(input.email)) {
    return json('Sending email failed', 422);
  }

  return json({ data: null, message: 'Copy of CV sent to your email.' }, 200);
}
