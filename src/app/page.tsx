import ExperienceTimeline from '@/app/experience-timeline';
import FeaturedImages from '@/app/featured-images';
import PageHeader from '@/app/page-header';
import NewsLetterForm from '@/app/news-letter-form';
import Section from '@/app/section';
import SocialLinks from '@/app/social-links';

export default function Home() {
  return (
    <div>
      <Section>
        {/* prettier-ignore */}
        <PageHeader
          title="Software engineer, web developer"
          subtitle="Hi, I'm Jovert, a software engineer based in Manila, Philippines. I'm passionate about building web applications and learning new technologies. I love to travel as well, exploring the beauty of nature and experiencing different cultures."
        >
          <SocialLinks className="mt-6"></SocialLinks>
        </PageHeader>
      </Section>

      <FeaturedImages className="mt-16 sm:mt-20" />

      <Section>
        <div className="grid max-w-xl grid-cols-1 mx-auto gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16"></div>

          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <NewsLetterForm></NewsLetterForm>
            <ExperienceTimeline></ExperienceTimeline>
          </div>
        </div>
      </Section>
    </div>
  );
}
