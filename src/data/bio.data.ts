import { rescue } from '@/utils';
import { send } from '@/utils/api';

export type Bio = {
  title: string;
  body: string;
  socials: Partial<{
    twitter?: string;
    instagram?: string;
    github?: string;
    linkedin?: string;
  }>;
};

export let getBio = () => {
  return rescue(
    async () => {
      const data = await send({
        query: `
        query bio {
          bio {
            title,
            body,
            twitterUrl,
            instagramUrl,
            githubUrl,
            linkedinUrl
          }
        }
      `,
      });

      return {
        title: data.bio.title,
        body: data.bio.body,
        socials: {
          twitter: data.bio.twitterUrl,
          instagram: data.bio.instagramUrl,
          github: data.bio.githubUrl,
          linkedin: data.bio.linkedinUrl,
        },
      };
    },
    {
      title: '',
      body: '',
      socials: {
        twitter: '',
        instagram: '',
        github: '',
        linkedin: '',
      },
    }
  );
};
