import nodemailer from 'nodemailer';

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST || '0.0.0.0',
    port: parseInt(process.env.MAIL_PORT || '1025'),
    secure: false,
    requireTLS: process.env.MAIL_ENCRYPTION === 'tls',
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.MAIL_FROM_ADDRESS,
    ...data,
  });

  return info;
};
