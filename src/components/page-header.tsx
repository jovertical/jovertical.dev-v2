import * as React from 'react';

interface Props {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <header className="max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        {title}
      </h1>

      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        {subtitle}
      </p>
    </header>
  );
}
