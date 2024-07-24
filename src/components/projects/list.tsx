import cx from 'classnames'
import type { ComponentPropsWithoutRef } from 'react'

import Item from '@/components/projects/item'
import type { Project } from '@/data/project.data'

interface Props extends ComponentPropsWithoutRef<'ul'> {
  items: Promise<Project[]>
}

export default async function List({ items, className = '', ...props }: Props) {
  const projects = await items

  return (
    <ul
      role="list"
      {...props}
      className={cx(
        'grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3',
        className
      )}
    >
      {projects.map((project) => (
        <Item key={project.id} data={project} />
      ))}
    </ul>
  )
}
