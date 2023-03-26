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
      <body>{children}</body>
    </html>
  );
}
