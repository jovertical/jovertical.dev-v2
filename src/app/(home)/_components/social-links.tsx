import type { ComponentPropsWithoutRef } from 'react'
import cx from 'classnames'

import GithubIcon from '@/components/icons/github-icon'
import InstagramIcon from '@/components/icons/instagram-icon'
import LinkedinIcon from '@/components/icons/linkedin-icon'
import TwitterIcon from '@/components/icons/twitter-icon'

interface Props extends ComponentPropsWithoutRef<'div'> {
  twitterUrl?: string | null
  instagramUrl?: string | null
  githubUrl?: string | null
  linkedinUrl?: string | null
}

export default function SocialLinks({
  twitterUrl,
  instagramUrl,
  githubUrl,
  linkedinUrl,
  className = '',
}: Props) {
  return (
    <div className={cx('flex gap-6', className)}>
      {twitterUrl && (
        <a
          className="p-1 -m-1 group"
          aria-label="Follow on Twitter"
          href={twitterUrl}
        >
          <TwitterIcon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </a>
      )}

      {instagramUrl && (
        <a
          className="p-1 -m-1 group"
          aria-label="Follow on Instagram"
          href={instagramUrl}
        >
          <InstagramIcon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </a>
      )}

      {githubUrl && (
        <a
          className="p-1 -m-1 group"
          aria-label="Follow on GitHub"
          href={githubUrl}
        >
          <GithubIcon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </a>
      )}

      {linkedinUrl && (
        <a
          className="p-1 -m-1 group"
          aria-label="Follow on LinkedIn"
          href={linkedinUrl}
        >
          <LinkedinIcon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </a>
      )}
    </div>
  )
}
