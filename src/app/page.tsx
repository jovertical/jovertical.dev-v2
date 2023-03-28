import Image from 'next/image';

import GithubIcon from '@/components/icons/github-icon';
import InstagramIcon from '@/components/icons/instagram-icon';
import LinkedinIcon from '@/components/icons/linkedin-icon';
import TwitterIcon from '@/components/icons/twitter-icon';
import Section from '@/components/section';

export default function Home() {
  return (
    <div>
      <Section>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software engineer, web developer
          </h1>

          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga dicta
            porro molestiae consequuntur quaerat fugiat voluptate, deserunt, eum
            obcaecati autem culpa rerum ipsum, maiores labore harum quidem
            exercitationem error repudiandae.
          </p>

          <div className="flex gap-6 mt-6">
            <a
              className="p-1 -m-1 group"
              aria-label="Follow on Twitter"
              href="https://twitter.com/Jovertical"
            >
              <TwitterIcon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
            </a>

            <a
              className="p-1 -m-1 group"
              aria-label="Follow on Instagram"
              href="https://instagram.com/jovertical"
            >
              <InstagramIcon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
            </a>

            <a
              className="p-1 -m-1 group"
              aria-label="Follow on GitHub"
              href="https://github.com/jovertical"
            >
              <GithubIcon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
            </a>

            <a
              className="p-1 -m-1 group"
              aria-label="Follow on LinkedIn"
              href="https://www.linkedin.com/in/jovert-palonpon-958761185"
            >
              <LinkedinIcon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
            </a>
          </div>
        </div>
      </Section>

      <div className="mt-16 sm:mt-20">
        <div className="flex justify-center gap-5 py-4 -my-4 overflow-hidden sm:gap-8">
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
            <Image
              className="absolute inset-0 object-cover w-full h-full"
              src="https://picsum.photos/seed/1/640/480"
              alt=""
              width="480"
              height="640"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
            <Image
              className="absolute inset-0 object-cover w-full h-full"
              src="https://picsum.photos/seed/2/640/480"
              alt=""
              width="480"
              height="640"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
            <Image
              className="absolute inset-0 object-cover w-full h-full"
              src="https://picsum.photos/seed/3/640/480"
              alt=""
              width="480"
              height="640"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
            <Image
              className="absolute inset-0 object-cover w-full h-full"
              src="https://picsum.photos/seed/4/640/480"
              alt=""
              width="480"
              height="640"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
            <Image
              className="absolute inset-0 object-cover w-full h-full"
              src="https://picsum.photos/seed/5/640/480"
              alt=""
              width="480"
              height="640"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
