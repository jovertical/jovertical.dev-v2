import { getCookie, setCookie } from 'cookies-next';

export const currentScheme = async () => {
  if (typeof window === 'undefined') {
    return import('next/headers').then(({ cookies }) => {
      return cookies().has('scheme') ? cookies().get('scheme')?.value : 'light';
    });
  }

  return getCookie('scheme', { path: '/' });
};

export const toggleScheme = async () => {
  const scheme = await currentScheme();

  const newScheme = scheme === 'dark' ? 'light' : 'dark';

  setCookie('scheme', newScheme, {
    path: '/',
  });

  return newScheme;
};
