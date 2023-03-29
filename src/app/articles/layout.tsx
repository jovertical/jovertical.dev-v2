import type { PropsWithChildren } from 'react';

import Section from '@/app/section';

export default function Layout({ children }: PropsWithChildren) {
  return <Section>{children}</Section>;
}
