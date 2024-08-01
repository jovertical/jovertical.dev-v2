import PageHeader from '@/components/page-header'
import type { PageHeaderProps } from '@/components/page-header'

type WithPageHeaderProps = PageHeaderProps & {
  marginless?: boolean
}

export default function withPageHeader<T extends WithPageHeaderProps>(
  WrappedComponent: React.ComponentType<T>,
  { ...pageHeaderProps }: WithPageHeaderProps
) {
  const ComponentWithPageHeader = (
    props: Omit<T, keyof WithPageHeaderProps>
  ) => {
    return (
      <div>
        <PageHeader {...pageHeaderProps} />

        <div className={pageHeaderProps.marginless ? '' : 'mt-16 sm:mt-20'}>
          <WrappedComponent {...(props as T)} />
        </div>
      </div>
    )
  }

  return ComponentWithPageHeader
}
