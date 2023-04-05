'use client';

import cx from 'classnames';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import Link from '@/components/link';
import type { LinkProps } from '@/components/link';

interface Props extends LinkProps {
  //
}

export default function NavLink({
  className = '',
  children,
  href,
  ...props
}: Props) {
  const pathname = usePathname();

  const isActive = React.useMemo(() => {
    return pathname === href;
  }, [pathname, href]);

  return (
    <Link
      className={cx(
        'relative block px-3 py-2',
        {
          'text-teal-500 transition dark:text-teal-400': isActive,
        },
        className
      )}
      href={href}
      {...props}
    >
      {children}

      {isActive && (
        <span className="absolute h-px inset-x-1 -bottom-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
      )}
    </Link>
  );
}
