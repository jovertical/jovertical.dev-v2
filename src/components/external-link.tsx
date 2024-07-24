import cx from 'classnames'
import type { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'a'>

export type ExternalLinkProps = Props

export default function ExternalLink({ className, ...props }: Props) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className={cx(
        'transition hover:text-teal-500 dark:hover:text-teal-400',
        className
      )}
    />
  )
}
