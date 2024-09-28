/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
   presets: [
      require('./src/components/shadcn/tailwind.congif.js')
   ],
   theme: {
      extend: {
         colors: {
            primary: '#0000ff',
            accent: '#ff8000'
         },
         spacing: {
            100: "25rem"
         },
      },
   },
   plugins: [],
};
