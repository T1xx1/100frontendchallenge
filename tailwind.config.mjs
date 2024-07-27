/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
   theme: {
      extend: {
         colors: {
            orange: '#ff8000',
            blue: '#00f',

            /*  */

            primary: '#00f', /* orange */
            accent: '#ff8000'     /* blue */
         }
      },
   },
   plugins: [],
};
