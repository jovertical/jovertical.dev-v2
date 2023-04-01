import ExperienceTimeline from '@/app/experience-timeline';
import FeaturedImages from '@/app/featured-images';
import PageHeader from '@/app/page-header';
import NewsLetterForm from '@/app/news-letter-form';
import Section from '@/app/section';
import SocialLinks from '@/app/social-links';
import { getBio } from '@/data/bio.data';
import { getExperiences } from '@/data/experiences.data';

export default async function Home() {
  let bio = await getBio();
  let experiences = await getExperiences();

  return (
    <div>
      <Section>
        {/* prettier-ignore */}
        <PageHeader
          title={bio.title}
          subtitle={bio.body}
        >
          <SocialLinks className="mt-6" data={bio.socials}></SocialLinks>
        </PageHeader>
      </Section>

      <FeaturedImages className="mt-16 sm:mt-20" />

      <Section>
        <div className="grid max-w-xl grid-cols-1 mx-auto gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16"></div>

          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <NewsLetterForm></NewsLetterForm>
            <ExperienceTimeline data={experiences}></ExperienceTimeline>
          </div>
        </div>
      </Section>
    </div>
  );
}
