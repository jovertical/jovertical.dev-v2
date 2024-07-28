import FeaturedImages from '@/app/(home)/_components/featured-images'
import Section from '@/components/section'

interface LayoutProps {
  children: React.ReactNode
  articles: React.ReactNode
  experiences: React.ReactNode
}

export default function Layout({
  children,
  articles,
  experiences,
}: LayoutProps) {
  return (
    <div>
      <Section>{children}</Section>

      <FeaturedImages className="mt-16 sm:mt-20" />

      <Section>
        <div className="grid max-w-xl grid-cols-1 mx-auto gap-y-20 lg:max-w-none lg:grid-cols-2">
          {articles}

          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <SubscriptionForm></SubscriptionForm> */}

            {experiences}
          </div>
        </div>
      </Section>
    </div>
  )
}
