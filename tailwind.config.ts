import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        display: ['var(--font-khand)', 'var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        accent: '#2563eb',
        'accent-hover': '#1d4ed8',
      },
    },
  },
  plugins: [],
};

export default config;
