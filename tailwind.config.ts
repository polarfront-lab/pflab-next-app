import type {Config} from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [
    plugin(({addBase}) => {
      addBase({
        '@supports (height: 100dvh)': {
          ':root': {
            '--viewport-height': '100dvh',
          },
        },
      });
    }),
  ],
} satisfies Config;
