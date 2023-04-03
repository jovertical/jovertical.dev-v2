import cx from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';

import Button from '@/components/button';
import EnvelopeOutlineIcon from '@/components/icons/envelope-outline-icon';
import TextInput from '@/components/text-input';

export default function NewsLetterForm({
  className = '',
  ...props
}: ComponentPropsWithoutRef<'form'>) {
  return (
    <form
      {...props}
      className={cx(
        'p-6 border rounded-2xl border-zinc-100 dark:border-zinc-700/40',
        className
      )}
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <EnvelopeOutlineIcon className="flex-none w-6 h-6"></EnvelopeOutlineIcon>

        <span className="ml-3">Stay up to date</span>
      </h2>

      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>

      <div className="flex mt-6">
        <TextInput
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
        />

        <Button type="submit">Join</Button>
      </div>
    </form>
  );
}
