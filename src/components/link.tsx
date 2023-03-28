import * as React from 'react';
import NextLink from 'next/link';
import type { LinkProps as NextLinkProps } from 'next/link';
import cx from 'classnames';

interface Props extends NextLinkProps {
  className?: string;
  children: React.ReactNode;
}

export type LinkProps = Props;

export default function Link({ className = '', ...props }: Props) {
  return (
    <NextLink
      className={cx(
        'transition hover:text-teal-500 dark:hover:text-teal-400',
        className
      )}
      {...props}
    />
  );
}