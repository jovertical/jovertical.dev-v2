'use client';

import cx from 'classnames';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import type { ComponentPropsWithoutRef, FormEvent } from 'react';

import Button from '@/components/button';
import EnvelopeOutlineIcon from '@/components/icons/envelope-outline-icon';
import TextInput from '@/components/text-input';
import Alert from '@/components/alert';

export default function NewsLetterForm({
  className = '',
  ...props
}: ComponentPropsWithoutRef<'form'>) {
  const router = useRouter();

  const [email, setEmail] = React.useState('');
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');

  const subscribe = React.useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (isSubmitting) {
        return;
      }

      setSubmitting(true);

      const response = await fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email }) as string,
      });

      const body = await response.json();

      setSubmitting(false);

      if (response.status === 422) {
        setError(body.message);

        return;
      }

      router.push('/thank-you');
    },
    [email, isSubmitting, router]
  );

  return (
    <form
      {...props}
      onSubmit={subscribe}
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
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
        />

        <Button className="ml-4" type="submit" loading={isSubmitting}>
          Join
        </Button>
      </div>

      {error && (
        <div className="mt-3.5">
          <Alert
            level="error"
            message={error}
            onClose={() => setError('')}
          ></Alert>
        </div>
      )}
    </form>
  );
}
