import type { Metadata } from 'next'
import * as React from 'react'

import DownloadCvFormModal from '@/components/home/download-cv-form-modal'
import ExperienceTimeline from '@/components/home/experience-timeline'
import ExperienceTimelineSkeleton from '@/components/home/experience-timeline-skeleton'
import FeaturedImages from '@/components/home/featured-images'
import FeaturedArticleList from '@/components/home/featured-article-list'
import FeaturedArticleListSkeleton from '@/components/home/featured-article-list-skeleton'
import SocialLinks from '@/components/home/social-links'
import SubscriptionForm from '@/components/home/subscription-form'
import PageHeader from '@/components/page-header'
import Section from '@/components/section'
import { getArticles } from '@/data/article.data'
import { getBio } from '@/data/bio.data'
import { getExperiences } from '@/data/experience.data'
import { createMetadata } from '@/utils/metadata'

export const metadata: Metadata = createMetadata({
  title: 'Jovert Palonpon - Software engineer, web developer',
  description: `Hi, I'm Jovert, a software engineer based in Manila, Philippines. I'm passionate about building web applications and learning new technologies. I love to travel as well, exploring the beauty of nature and experiencing different cultures.`,
})

export default async function Page() {
  const bio = await getBio()
  const experiences = getExperiences()
  const articles = getArticles(3)

  return (
    <div>
      <Section>
        {/* prettier-ignore */}
        <PageHeader
          title="Software engineer, web developer"
          subtitle="Hi, I'm Jovert, a software engineer based in Manila, Philippines. I'm passionate about building web applications and learning new technologies. I love to travel as well, exploring the beauty of nature and experiencing different cultures."
        >
          {bio?.socials && (
            <SocialLinks className="mt-6" data={bio.socials}></SocialLinks>
          )}
        </PageHeader>
      </Section>

      <FeaturedImages className="mt-16 sm:mt-20" />

      <Section>
        <div className="grid max-w-xl grid-cols-1 mx-auto gap-y-20 lg:max-w-none lg:grid-cols-2">
          <React.Suspense fallback={<FeaturedArticleListSkeleton />}>
            <FeaturedArticleList items={articles}></FeaturedArticleList>
          </React.Suspense>

          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <SubscriptionForm></SubscriptionForm>

            <React.Suspense fallback={<ExperienceTimelineSkeleton />}>
              <ExperienceTimeline data={experiences}>
                <DownloadCvFormModal></DownloadCvFormModal>
              </ExperienceTimeline>
            </React.Suspense>
          </div>
        </div>
      </Section>
    </div>
  )
}
