import PageHeader from '@/app/page-header';
import Section from '@/app/section';
import Button from '@/components/button';
import ArrowLeftIcon from '@/components/icons/arrow-left-icon';
import Link from '@/components/link';

export default function NotFound() {
  return (
    <Section>
      <div className="flex items-center min-h-[480px]">
        <PageHeader
          title="Page not found"
          subtitle="Sorry, we couldn't find the page you're looking for."
          centered
        >
          <div className="mt-2">
            <Link
              className="flex space-x-1.5 items-center group text-zinc-900 dark:text-zinc-100 "
              href="/"
            >
              <ArrowLeftIcon className="w-4 h-4 transition stroke-zinc-900 group-hover:stroke-teal-500 dark:stroke-zinc-100 dark:group-hover:stroke-teal-400"></ArrowLeftIcon>
              <span>Back to home</span>
            </Link>
          </div>
        </PageHeader>
      </div>
    </Section>
  );
}
