import { rescue } from '@/utils';
import { send } from '@/utils/api';

export type Bio = {
  title: string;
  about: string;
  email: string;
  socials: {
    twitter?: string;
    instagram?: string;
    github?: string;
    linkedin?: string;
  };
};

export let getBio = () => {
  return rescue(async () => {
    const data = await send({
      query: `
          query bio {
            bio {
              title,
              about,
              email,
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
      about: data.bio.about,
      email: data.bio.email,
      socials: {
        twitter: data.bio.twitterUrl,
        instagram: data.bio.instagramUrl,
        github: data.bio.githubUrl,
        linkedin: data.bio.linkedinUrl,
      },
    } as Bio;
  }, null);
};
