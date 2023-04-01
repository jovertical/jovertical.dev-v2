import { send } from '@/utils/api';

export type Bio = {
  title: string;
  body: string;
  socials: {
    twitter: string;
    instagram: string;
    github: string;
    linkedin: string;
  };
};

export let getBio = async (): Promise<Bio> => {
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
};
