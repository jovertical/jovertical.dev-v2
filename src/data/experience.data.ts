import { rescue, sleep } from '@/utils';
import { send } from '@/utils/api';

export type Experience = {
  id: string;
  from: number;
  to: number | null;
  title: string;
  company: string;
  companyLogo: {
    id: string;
    url: string;
    size: number;
    width: number;
    height: number;
  };
  companyWebsite: string;
  description: string;
};

export let getExperiences = () => {
  return rescue(async () => {
    await sleep(3000);

    const data = await send({
      query: `
        query experienceList {
          allExperiences(
            orderBy: [from_DESC, to_DESC]
          ) {
            id,
            from,
            to,
            company,
            companyLogo {
              id
              url
              size
              width
              height
            },
            companyWebsite,
            title,
            description,
          }
  
          _allExperiencesMeta {
            count
          }
        }
      `,
    });

    return data.allExperiences as Experience[];
  }, []);
};
