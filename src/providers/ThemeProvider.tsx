'use client';

import {ThemeProvider as NextThemesProvider, ThemeProviderProps} from 'next-themes';
import {ReactNode, useEffect, useState} from 'react';

export default function ThemeProvider({children, ...props}: {children: ReactNode} & ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <>{children}</>;

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
