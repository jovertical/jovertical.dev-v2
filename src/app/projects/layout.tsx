import Section from '@/components/section';
import * as React from 'react';
import type { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  //
}

export default function Layout({ children }: Props) {
  return <Section>{children}</Section>;
}
