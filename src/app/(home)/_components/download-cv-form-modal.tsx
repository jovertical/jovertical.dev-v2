'use client'

import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { ArrowDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { useState } from 'react'

import Alert from '@/components/alert'
import Button from '@/components/button'
import SubmitButton from '@/components/submit-button'
import TextInput from '@/components/text-input'
import downloadCv from '@/app/actions/downloadCv'
import { sleep } from '@/utils'

export default function DownloadCvFormModal() {
  let [isOpen, setIsOpen] = useState(false)

  let [message, setMessage] = useState('')

  let [error, setError] = useState('')

  const onSubmit = async (data: FormData) => {
    const { success, message } = await downloadCv(data)

    if (!success) {
      setError(message)

      return
    }

    setMessage(message)

    await sleep(3000)

    setMessage('')

    setIsOpen(false)
  }

  return (
    <>
      <Dialog
        className="fixed z-50"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DialogBackdrop className="fixed inset-0 z-50 transition-opacity bg-zinc-500/75 dark:bg-zinc-500/40"></DialogBackdrop>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <DialogPanel className="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform rounded-lg shadow-xl bg-zinc-50 dark:bg-zinc-800 sm:my-8 sm:w-full sm:max-w-md sm:p-8">
              <form action={onSubmit}>
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
                  <DialogTitle className="text-base font-semibold leading-6 text-zinc-800 dark:text-zinc-100">
                    Download CV
                  </DialogTitle>

                  <div className="mt-2">
                    <Description className="text-sm text-zinc-500 dark:text-zinc-300">
                      Hello! thanks for having an interest in my profile. Please
                      enter your email and a copy of my CV will be sent to you
                    </Description>
                  </div>
                </div>

                {!message ? (
                  <>
                    <div className="mt-3.5 sm:mt-4 px-4">
                      <TextInput
                        className="w-full"
                        type="email"
                        name="email"
                        required
                        placeholder="Email address"
                        aria-label="Email address"
                      />
                    </div>

                    <div className="flex justify-center mt-4 sm:mt-5">
                      <SubmitButton className="w-full sm:w-1/2 group">
                        <span className="inline-flex items-center justify-center gap-2">
                          Download
                          <ArrowDownIcon className="w-3.5 h-3.5 transition stroke-zinc-400 group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
                        </span>
                      </SubmitButton>
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
            </DialogPanel>
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
  )
}
