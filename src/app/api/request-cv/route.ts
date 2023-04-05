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
          url: 'https://drive.google.com/uc?export=download&id=1c4RSSRs4xo2SwlgghRFkA9vyI7TWLxV5',
          fallbackUrl: 'https://drive.google.com/file/d/1c4RSSRs4xo2SwlgghRFkA9vyI7TWLxV5/view',
        })
      ),
    });
  }, null);

  if (!email || email.rejected.includes(input.email)) {
    return json('Sending email failed', 422);
  }

  return json({ data: null, message: 'Copy of CV sent to your email.' }, 200);
}
