'use client';

import { Dialog } from '@headlessui/react';
import { ArrowDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import * as React from 'react';

import Alert from '@/components/alert';
import Button from '@/components/button';
import TextInput from '@/components/text-input';
import { sleep } from '@/utils';

export default function RequestCvModal() {
  let [isOpen, setIsOpen] = React.useState(false);

  let [email, setEmail] = React.useState('');

  let [isSubmitting, setSubmitting] = React.useState(false);

  let [message, setMessage] = React.useState('');

  let [error, setError] = React.useState('');

  const submit = React.useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (isSubmitting) {
        return;
      }

      setSubmitting(true);

      const response = await fetch('/api/download-cv', {
        method: 'POST',
        body: JSON.stringify({ email }),
      });

      setSubmitting(false);

      setEmail('');

      const body = await response.json();

      if (response.status === 422) {
        setError(body.message);

        return;
      }

      setMessage(body.message);

      await sleep(3000);

      setMessage('');

      setIsOpen(false);
    },
    [email, isSubmitting]
  );

  return (
    <>
      <Dialog
        className="fixed z-50"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Dialog.Overlay className="fixed inset-0 z-50 transition-opacity bg-gray-500 bg-opacity-75"></Dialog.Overlay>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <Dialog.Panel className="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-md sm:p-8">
              <form onSubmit={submit}>
                <div className="flex items-center justify-center p-1 mx-auto rounded-full shadow-lg h-14 w-14 bg-white/90 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                  <Image
                    src="/logo.png"
                    width={500}
                    height={500}
                    alt="Jovert Palonpon"
                    className="object-cover w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800"
                  />
                </div>

                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                    Download CV
                  </Dialog.Title>

                  <div className="mt-2">
                    <Dialog.Description className="text-sm text-gray-500">
                      Hello! thanks for having an interest in my profile. Please
                      enter your email and a copy of my CV will be sent to you
                    </Dialog.Description>
                  </div>
                </div>

                {!message ? (
                  <>
                    <div className="mt-3.5 sm:mt-4 px-4">
                      {/* prettier-ignore */}
                      <TextInput
                        className="w-full"
                        type="email"
                        placeholder="Email address"
                        aria-label="Email address"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.currentTarget.value)}
                      />
                    </div>

                    <div className="flex justify-center mt-4 sm:mt-5">
                      <Button
                        className="w-full sm:w-1/2 group"
                        type="submit"
                        loading={isSubmitting}
                      >
                        <span className="inline-flex items-center justify-center gap-2">
                          Download
                          <ArrowDownIcon className="w-3.5 h-3.5 transition stroke-zinc-400 group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
                        </span>
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="mt-3">
                    <Alert level="success" message={message}></Alert>
                  </div>
                )}

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
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>

      <Button
        variant="secondary"
        className="w-full mt-6 group"
        onClick={() => setIsOpen(true)}
      >
        <span className="inline-flex items-center justify-center gap-2">
          Download CV
          <ArrowDownIcon className="w-3.5 h-3.5 transition stroke-zinc-400 group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </span>
      </Button>
    </>
  );
}
