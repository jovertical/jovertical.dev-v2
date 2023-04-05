import type { Metadata } from 'next';

import PageHeader from '@/components/page-header';

export const metadata: Metadata = {
  title: 'Projects - Jovert Palonpon',
  description: `I work full time as a software engineer for companies, making me fully occupied, but when I have some free time, I work on my own projects. Some of them are freelance work, some of them are just for fun, and some of them are just for me to learn new things.`,
};

export default function Page() {
  return (
    <div>
      <PageHeader
        title="Things I've made outside my full time work."
        subtitle="I work full time as a software engineer for companies, making me fully occupied, but when I have some free time, I work on my own projects. Some of them are freelance work, some of them are just for fun, and some of them are just for me to learn new things."
      ></PageHeader>
    </div>
  );
}
