import type { Config } from 'tailwindcss';
import { createThemes } from 'tw-colors';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        shimmer: 'shimmer 5s linear infinite',
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
      },
    },
  },
  plugins: [
    createThemes(
      {
        'grade-grey': {
          primary: '#BDC3C7',
          secondary: '#2C3E50',
          'typography-primary': '#F2F3F4',
          'typography-secondary': '#E5E7E9',
        },
        'piggy-pink': {
          primary: '#EE9CA7',
          secondary: '#FFDDE1',
          'typography-primary': '#301F21',
          'typography-secondary': '#8F5E64',
        },
        'cool-blue': {
          primary: '#2193B0',
          secondary: '#6DD5ED',
          'typography-primary': '#071D23',
          'typography-secondary': '#0D3B46',
        },
        'evening-sunshine': {
          primary: '#B92B27',
          secondary: '#1565C0',
          'typography-primary': '#F1D5D4',
          'typography-secondary': '#E3AAA9',
        },
      },
      {
        produceThemeClass: (themeName) => `theme-${themeName}`,
      },
    ),
  ],
};
export default config;
