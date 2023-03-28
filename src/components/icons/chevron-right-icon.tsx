import * as React from 'react';
import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  //
}

export default function ChevronRightIcon(props: Props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
