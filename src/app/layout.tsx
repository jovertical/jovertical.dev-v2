import '@/app/globals.css';

export const metadata = {
  // prettier-ignore
  title: 'Jovert Palonpon - Software Engineer, Web Developer and React Native Developer',
  description: 'Everything about Jovert Palonpon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
