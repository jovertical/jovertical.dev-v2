import cx from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';

import ArrowDownIcon from '@/components/icons/arrow-down-icon';
import BriefCaseIcon from '@/components/icons/briefcase-icon';
import Image from 'next/image';

export default function ExperienceTimeline({
  className = '',
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={cx(
        'p-6 border rounded-2xl border-zinc-100 dark:border-zinc-700/40',
        className
      )}
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefCaseIcon className="flex-none w-6 h-6" />
        <span className="ml-3">Work</span>
      </h2>

      <ol className="mt-6 space-y-4">
        <li className="flex gap-4">
          <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image
              className="rounded-full h-7 w-7"
              src="/images/companies/claritystack.jpeg"
              alt="Clarity Stack Logo"
              width={100}
              height={100}
            />
          </div>

          <dl className="flex flex-wrap flex-auto gap-x-2">
            <dt className="sr-only">Company</dt>
            <dd className="flex-none w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Clarity Stack
            </dd>
            <dt className="sr-only">Role</dt>
            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
              Tech Lead
            </dd>
            <dt className="sr-only">Date</dt>
            <dd
              className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
              aria-label="2021 until 2023"
            >
              <time dateTime="2021">2021</time>
              <span aria-hidden="true">—</span>{' '}
              <time dateTime="2023">2023</time>
            </dd>
          </dl>
        </li>

        <li className="flex gap-4">
          <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image
              className="rounded-full h-7 w-7"
              src="/images/companies/appetiser-apps.jpeg"
              alt="Appetiser Apps Logo"
              width={100}
              height={100}
            />
          </div>

          <dl className="flex flex-wrap flex-auto gap-x-2">
            <dt className="sr-only">Company</dt>
            <dd className="flex-none w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Appetiser Apps
            </dd>
            <dt className="sr-only">Role</dt>
            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
              Web Developer
            </dd>
            <dt className="sr-only">Date</dt>
            <dd
              className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
              aria-label="2020 until 2021"
            >
              <time dateTime="2020">2020</time>
              <span aria-hidden="true">—</span>{' '}
              <time dateTime="2021">2021</time>
            </dd>
          </dl>
        </li>

        <li className="flex gap-4">
          <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image
              className="rounded-full h-7 w-7"
              src="/images/companies/pushfit.png"
              alt="Pushfit.tv Logo"
              width={100}
              height={100}
            />
          </div>

          <dl className="flex flex-wrap flex-auto gap-x-2">
            <dt className="sr-only">Company</dt>
            <dd className="flex-none w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Pushfit.tv
            </dd>
            <dt className="sr-only">Role</dt>
            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
              Full Stack Developer
            </dd>
            <dt className="sr-only">Date</dt>
            <dd
              className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
              aria-label="2019 until 2020"
            >
              <time dateTime="2019">2019</time>
              <span aria-hidden="true">—</span>{' '}
              <time dateTime="2020">2020</time>
            </dd>
          </dl>
        </li>

        <li className="flex gap-4">
          <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image
              className="rounded-full h-7 w-7"
              src="/images/companies/xceed-ccs.jpeg"
              alt="Xceed CCS Logo"
              width={100}
              height={100}
            />
          </div>

          <dl className="flex flex-wrap flex-auto gap-x-2">
            <dt className="sr-only">Company</dt>
            <dd className="flex-none w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Xceed CCS
            </dd>
            <dt className="sr-only">Role</dt>
            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
              Full Stack Developer
            </dd>
            <dt className="sr-only">Date</dt>
            <dd
              className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
              aria-label="2019"
            >
              <time dateTime="2019">2019</time>
            </dd>
          </dl>
        </li>

        <li className="flex gap-4">
          <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image
              className="rounded-full h-7 w-7"
              src="/images/companies/iparentportal.jpeg"
              alt="iParentPortal Logo"
              width={100}
              height={100}
            />
          </div>

          <dl className="flex flex-wrap flex-auto gap-x-2">
            <dt className="sr-only">Company</dt>
            <dd className="flex-none w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
              iParentPortal
            </dd>
            <dt className="sr-only">Role</dt>
            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
              Full Stack Developer
            </dd>
            <dt className="sr-only">Date</dt>
            <dd
              className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
              aria-label="2017 until 2019"
            >
              <time dateTime="2017">2017</time>
              <span aria-hidden="true">—</span>{' '}
              <time dateTime="2019">2019</time>
            </dd>
          </dl>
        </li>
      </ol>

      <a
        className="inline-flex items-center justify-center w-full gap-2 px-3 py-2 mt-6 text-sm font-medium transition rounded-md outline-offset-2 active:transition-none bg-zinc-50 text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group"
        href="/#"
      >
        Download CV
        <ArrowDownIcon className="w-4 h-4 transition stroke-zinc-400 group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </a>
    </div>
  );
}
