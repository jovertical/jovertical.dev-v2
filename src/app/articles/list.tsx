import cx from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';

import Item from '@/app/articles/item';
import type { Article } from '@/data/article.data';

interface Props extends ComponentPropsWithoutRef<'div'> {
  items: Article[];
}

export default function List({
  items: articles = [],
  className = '',
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={cx(
        'md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40',
        className
      )}
    >
      <div className="flex flex-col max-w-3xl space-y-16">
        {articles.map((article) => (
          <Item key={article.id} data={article} />
        ))}
      </div>
    </div>
  );
}
