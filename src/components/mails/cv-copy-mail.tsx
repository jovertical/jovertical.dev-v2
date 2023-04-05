import {
  Tailwind,
  Head,
  Font,
  Container,
  Section,
  Text,
  Img,
  Button,
  Link,
} from '@react-email/components';
import defaultTheme from 'tailwindcss/defaultTheme';

interface Props {
  url: string;
  fallbackUrl?: string;
}

export default function CvCopyMail({ url, fallbackUrl }: Props) {
  return (
    <Tailwind
      config={{
        theme: {
          fontFamily: {
            sans: ['Inter var', ...defaultTheme.fontFamily.sans],
          },
        },
      }}
    >
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/inter/v12/UcCo3FwrK3iLTcviYwYZ8UA3.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>

      <Container align="center">
        <Img
          className="p-4 my-0 ml-auto mr-auto rounded-full h-14 w-14"
          src="https://www.jovertical.dev/_next/image?url=%2Flogo.png&w=1080&q=75"
          width="40"
          height="40"
          alt="Logo"
        />
      </Container>

      <Container className="p-6 bg-white border border-solid rounded-sm border-zinc-300">
        <Section>
          <Text className="font-sans text-base text-zinc-900">Hello,</Text>

          <Text className="font-sans text-base text-zinc-900">
            Thanks for your interest in my profile! You can download the CV by
            clicking on the button below.
          </Text>

          <Button
            className="px-3 py-2 mx-auto font-sans text-sm font-semibold rounded-md bg-zinc-800 text-zinc-100 dark:bg-zinc-700 outline-offset-2"
            href={url}
            download
          >
            Download
          </Button>

          <Text className="font-sans text-base text-zinc-900">
            or copy and paste this link into your browser:{' '}
            <Link href={fallbackUrl}>{fallbackUrl}</Link>
          </Text>

          <Text className="font-sans text-zinc-900">
            If you did not request for a copy of my CV, please ignore this
            email.
          </Text>

          <Text className="font-sans text-zinc-900">Regards,</Text>
          <Text className="font-sans text-zinc-900">Jovert Palonpon</Text>
        </Section>
      </Container>

      <Container>
        <Section>
          <Text className="font-sans text-sm text-center text-zinc-400">
            Jovert Palonpon | 776 Tugatog Rd. Marungko - Angat, Bulacan 3012
          </Text>
        </Section>
      </Container>
    </Tailwind>
  );
}
