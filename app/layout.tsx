import type {Metadata} from 'next';
import './globals.css';

import {ReactNode} from 'react';
import ThemeProvider from '@/providers/ThemeProvider';
import WebGLLayout from '@/layouts/WebGLLayout';
import DisplayGrid from '@/components/helper/DisplayGrid';

export const metadata: Metadata = {
  title: 'Site Title',
  description: 'Under construction...',
};

interface Props {
  children: ReactNode;
}

export default async function RootLayout({children}: Readonly<Props>) {
  return (
    <html lang="en-us">
      <head />
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} storageKey={'site specific key'}>
          <WebGLLayout>
            <DisplayGrid display={false} />
            {children}
          </WebGLLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
