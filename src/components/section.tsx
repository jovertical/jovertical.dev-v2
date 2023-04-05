import type { PropsWithChildren } from 'react';

export default function Section({ children }: PropsWithChildren) {
  return (
    <div className="mt-16 sm:px-8 sm:mt-32">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto lg:max-w-5xl">{children}</div>
        </div>
      </div>
    </div>
  );
}
