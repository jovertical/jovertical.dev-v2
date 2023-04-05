import cx from 'classnames';
import type { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function PageHeader({
  title,
  subtitle,
  centered = false,
  children,
}: Props) {
  return (
    <header className={cx('max-w-2xl', { 'mx-auto': centered })}>
      <h1
        className={cx(
          'text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl',
          { 'text-center': centered }
        )}
      >
        {title}
      </h1>

      {subtitle && (
        <p
          className={cx('mt-6 text-base text-zinc-600 dark:text-zinc-400', {
            'text-center': centered,
          })}
        >
          {subtitle}
        </p>
      )}

      {children && (
        <div className={cx({ 'flex flex-row justify-center': centered })}>
          {children}
        </div>
      )}
    </header>
  );
}
