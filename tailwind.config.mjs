/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
   presets: [
      require('./src/shadcn/tailwind.congif.js')
   ],
   theme: {
      extend: {
         colors: {
            primary: '#1d4ed8', /* blue-700 */
            accent: '#f97316'   /* orange-500 */
         }
      },
   },
   plugins: [],
};
