// /** @type {import('tailwindcss').Config} */
// import type { Config } from 'tailwindcss';

// const config: Config = {
//   content: [
//     './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',

//     // Or if using `src` directory:
//     './src/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       boxShadow: {
//         customShadow: '5px 5px 0px 0px #CBCCCD',
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;

const baseConfig = require('@breezemm/tailwind-config');
const path = require('path');

module.exports = {
  ...baseConfig,
  content: [...baseConfig.content],
};
