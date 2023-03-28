import * as React from 'react';
import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  //
}

export default function ChevronDownIcon(props: Props) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}