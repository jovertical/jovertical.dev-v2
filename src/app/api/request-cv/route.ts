import { render } from '@react-email/render';
import { NextRequest } from 'next/server';

import CvCopyMail from '@/components/mails/cv-copy-mail';
import { sendEmail } from '@/utils/emails';
import { rescue } from '@/utils';

export async function POST(request: NextRequest) {
  const input = await request.json();

  const email = await rescue(() => {
    return sendEmail({
      to: input.email,
      subject: 'Here is a copy of my CV - Jovert Palonpon',
      html: render(
        CvCopyMail({
          url: process.env.CV_DOWNLOAD_URL ?? '',
          fallbackUrl: process.env.CV_PREVIEW_URL ?? '',
        })
      ),
    });
  }, null);

  if (!email || email.rejected.includes(input.email)) {
    return new Response(JSON.stringify({ error: 'Sending email failed' }), {
      status: 409,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return new Response(
    JSON.stringify({ message: 'Copy of CV sent to your email.' }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
