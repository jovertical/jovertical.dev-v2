import * as React from 'react';
import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  //
}

export default function ArrowLeftIcon(props: Props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
