import cx from 'classnames';
import * as React from 'react';
import type { ComponentPropsWithoutRef } from 'react';

interface Props extends ComponentPropsWithoutRef<'button'> {
  loading?: boolean;
}

export default function Button({
  loading = false,
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      type="button"
      {...props}
      className={cx(
        'inline-flex items-center justify-center flex-none gap-2 px-3 py-2 text-sm font-semibold transition rounded-md outline-offset-2 active:transition-none bg-zinc-800 text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
        className
      )}
    >
      {loading && (
        <svg
          className="w-4 h-4 -mr-0.5 text-white animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}

      <span>{children}</span>
    </button>
  );
}
