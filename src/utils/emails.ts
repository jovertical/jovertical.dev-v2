import nodemailer from 'nodemailer';

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_MAIL_HOST || '0.0.0.0',
    port: parseInt(process.env.NEXT_MAIL_PORT || '1025'),
    secure: false,
    requireTLS: process.env.NEXT_MAIL_ENCRYPTION === 'tls',
    auth: {
      user: process.env.NEXT_MAIL_USERNAME,
      pass: process.env.NEXT_MAIL_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.NEXT_MAIL_FROM_ADDRESS,
    ...data,
  });

  return info;
};
