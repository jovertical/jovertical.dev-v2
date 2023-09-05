import { LinkIcon } from '@heroicons/react/24/solid';
import cx from 'classnames';
import Image from 'next/image';
import type { ComponentPropsWithoutRef } from 'react';

import type { Project } from '@/data/project.data';
import GithubIcon from '@/components/icons/github-icon';

interface Props extends ComponentPropsWithoutRef<'article'> {
  data: Project;
}

export default function Item({ className, data: project, ...props }: Props) {
  return (
    <li
      {...props}
      className={cx('group relative flex flex-col items-start', className)}
    >
      <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        {project.logo ? (
          <Image
            className="w-8 h-8 rounded-full object-cover object-center"
            src={project.logo.url}
            alt={`${project.name} Logo`}
            width={project.logo.width}
            height={project.logo.height}
          ></Image>
        ) : (
          <GithubIcon className="w-8 h-8 fill-zinc-800 dark:fill-zinc-200"></GithubIcon>
        )}
      </div>

      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <div className="absolute z-0 transition scale-95 opacity-0 -inset-x-4 -inset-y-6 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>

        <a href={project.websiteLink}>
          <span className="absolute z-20 -inset-x-4 -inset-y-6 sm:-inset-x-6 sm:rounded-2xl"></span>
          <span className="relative z-10">{project.name}</span>
        </a>
      </h2>

      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      {project.websiteLink && (
        <p className="relative z-10 flex mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-teal-500 dark:text-zinc-200">
          <LinkIcon className="flex-none w-5 h-5"></LinkIcon>
          <span className="ml-2">{project.websiteLink}</span>
        </p>
      )}
    </li>
  );
}
