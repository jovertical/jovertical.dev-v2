import cx from 'classnames'
import type { ComponentPropsWithoutRef } from 'react'

import Item from '@/components/home/featured-article-item'
import type { Article } from '@/data/article.data'

interface Props extends ComponentPropsWithoutRef<'div'> {
  items: Promise<Article[]>
}

export default async function FeaturedArticleList({
  items,
  className = '',
  ...props
}: Props) {
  const articles = await items

  return (
    <div
      id="featured-article-list"
      {...props}
      className={cx('flex flex-col gap-16', className)}
    >
      {articles.map((article) => (
        <Item key={article.id} data={article} />
      ))}
    </div>
  )
}
