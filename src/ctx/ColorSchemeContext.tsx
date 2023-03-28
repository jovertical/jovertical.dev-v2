'use client';

import * as React from 'react';

import { useLocalStorage } from '@/use/localStorage';

export const ColorSchemeContext = React.createContext({
  dark: false,
  flip: () => {},
});

export function ColorSchemeProvider({ children }: React.PropsWithChildren) {
  const ls = useLocalStorage();

  const [scheme, setScheme] = React.useState(ls.get('scheme'));

  const dark = React.useMemo(() => scheme === 'dark', [scheme]);

  const otherScheme = React.useMemo(() => (dark ? 'light' : 'dark'), [dark]);

  const flip = React.useCallback(() => {
    setScheme(otherScheme);
  }, [otherScheme]);

  React.useEffect(() => {
    const el = document.querySelector('html');

    if (el) {
      el.classList.remove(otherScheme);
      el.classList.add(scheme ?? 'light');

      ls.set('scheme', scheme);
    }
  }, [ls, scheme, otherScheme]);

  return (
    <ColorSchemeContext.Provider value={{ dark, flip }}>
      {children}
    </ColorSchemeContext.Provider>
  );
}
