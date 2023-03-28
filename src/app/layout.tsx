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
      <body className="font-sans antialiased bg-gray-50">
        <div className="w-full h-full max-w-5xl px-8 py-12 mx-auto bg-white border-gray-200 shadow-sm border-x sm:px-10">
          {children}
        </div>
      </body>
    </html>
  );
}
