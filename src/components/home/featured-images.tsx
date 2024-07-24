import cx from 'classnames'
import Image from 'next/image'
import * as React from 'react'
import type { ComponentPropsWithoutRef } from 'react'

export default function FeaturedImages({
  className = '',
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props} className={cx('', className)}>
      <div className="flex justify-center gap-5 py-4 -my-4 overflow-hidden sm:gap-8">
        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
          <Image
            className="absolute inset-0 object-cover w-full h-full"
            src="/images/featured/1.jpeg"
            alt=""
            width="480"
            height="640"
          />
        </div>

        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
          <Image
            className="absolute inset-0 object-cover w-full h-full"
            src="/images/featured/2.jpeg"
            alt=""
            width="480"
            height="640"
          />
        </div>

        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
          <Image
            className="absolute inset-0 object-cover w-full h-full"
            src="/images/featured/3.jpeg"
            alt=""
            width="480"
            height="640"
          />
        </div>

        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
          <Image
            className="absolute inset-0 object-cover w-full h-full"
            src="/images/featured/4.jpeg"
            alt=""
            width="480"
            height="640"
          />
        </div>

        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
          <Image
            className="absolute inset-0 object-cover w-full h-full"
            src="/images/featured/5.jpeg"
            alt=""
            width="480"
            height="640"
          />
        </div>
      </div>
    </div>
  )
}
