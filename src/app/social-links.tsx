import cx from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';

import GithubIcon from '@/components/icons/github-icon';
import InstagramIcon from '@/components/icons/instagram-icon';
import LinkedinIcon from '@/components/icons/linkedin-icon';
import TwitterIcon from '@/components/icons/twitter-icon';
import type { Bio } from '@/data/bio.data';

interface Props extends ComponentPropsWithoutRef<'div'> {
  data: Bio['socials'];
}

export default function SocialLinks({ data, className = '', ...props }: Props) {
  return (
    <div {...props} className={cx('flex gap-6', className)}>
      {data.twitter && (
        <a
          className="p-1 -m-1 group"
          aria-label="Follow on Twitter"
          href={data.twitter}
        >
          <TwitterIcon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </a>
      )}

      {data.instagram && (
        <a
          className="p-1 -m-1 group"
          aria-label="Follow on Instagram"
          href={data.instagram}
        >
          <InstagramIcon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </a>
      )}

      {data.github && (
        <a
          className="p-1 -m-1 group"
          aria-label="Follow on GitHub"
          href={data.github}
        >
          <GithubIcon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </a>
      )}

      {data.linkedin && (
        <a
          className="p-1 -m-1 group"
          aria-label="Follow on LinkedIn"
          href={data.linkedin}
        >
          <LinkedinIcon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </a>
      )}
    </div>
  );
}
