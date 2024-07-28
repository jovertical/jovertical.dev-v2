'use client'

import subscribe from '@/app/actions/subscribe'
import Alert from '@/components/alert'
import EnvelopeOutlineIcon from '@/components/icons/envelope-outline-icon'
import SubmitButton from '@/components/submit-button'
import TextInput from '@/components/text-input'
import cx from 'classnames'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import type { ComponentPropsWithoutRef } from 'react'

export default function SubscriptionForm({
  className = '',
  ...props
}: ComponentPropsWithoutRef<'form'>) {
  const router = useRouter()

  const [error, setError] = useState('')

  const onSubmit = async (data: FormData) => {
    const { success, message } = await subscribe(data)

    if (!success) {
      setError(message)

      return
    }

    router.push('/thank-you')
  }

  return (
    <form
      {...props}
      action={onSubmit}
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
          name="email"
          required
          placeholder="Email address"
          aria-label="Email address"
        />

        <SubmitButton className="ml-4" disabled>
          Join
        </SubmitButton>
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
  )
}
