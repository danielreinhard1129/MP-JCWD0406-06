import flowbite from 'flowbite/plugin';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    '../../node_modules/flowbite-react/lib/**/*.js',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [flowbite],
};

export default config;
