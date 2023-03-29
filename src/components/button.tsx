import cx from 'classnames';
import * as React from 'react';
import type { ComponentPropsWithoutRef } from 'react';

interface Props extends ComponentPropsWithoutRef<'button'> {
  //
}

export default function Button({ className, ...props }: Props) {
  return (
    <button
      type="button"
      {...props}
      className={cx(
        'inline-flex items-center justify-center flex-none gap-2 px-3 py-2 ml-4 text-sm font-semibold transition rounded-md outline-offset-2 active:transition-none bg-zinc-800 text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
        className
      )}
    />
  );
}
