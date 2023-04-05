import nodemailer from 'nodemailer';

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

const smtpOptions = {
  host: process.env.NEXT_MAIL_HOST || '0.0.0.0',
  port: parseInt(process.env.NEXT_MAIL_PORT || '1025'),
  secure: process.env.NEXT_MAIL_ENCRYPTION === 'tls',
  auth: {
    user: process.env.NEXT_MAIL_USERNAME,
    pass: process.env.NEXT_MAIL_PASSWORD,
  },
};

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  const info = await transporter.sendMail({
    from: process.env.NEXT_MAIL_FROM_ADDRESS,
    ...data,
  });

  return info;
};
