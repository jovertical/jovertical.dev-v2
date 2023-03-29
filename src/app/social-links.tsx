import cx from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';

import GithubIcon from '@/components/icons/github-icon';
import InstagramIcon from '@/components/icons/instagram-icon';
import LinkedinIcon from '@/components/icons/linkedin-icon';
import TwitterIcon from '@/components/icons/twitter-icon';

export default function SocialLinks({
  className = '',
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props} className={cx('flex gap-6', className)}>
      <a
        className="p-1 -m-1 group"
        aria-label="Follow on Twitter"
        href="https://twitter.com/Jovertical"
      >
        <TwitterIcon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
      </a>

      <a
        className="p-1 -m-1 group"
        aria-label="Follow on Instagram"
        href="https://instagram.com/jovertical"
      >
        <InstagramIcon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
      </a>

      <a
        className="p-1 -m-1 group"
        aria-label="Follow on GitHub"
        href="https://github.com/jovertical"
      >
        <GithubIcon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
      </a>

      <a
        className="p-1 -m-1 group"
        aria-label="Follow on LinkedIn"
        href="https://www.linkedin.com/in/jovert-palonpon-958761185"
      >
        <LinkedinIcon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
      </a>
    </div>
  );
}
