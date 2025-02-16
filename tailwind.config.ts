import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      Inter:["Inter","san-serif"]
    },
    container:{
      center:true
    },extend:{
      container:{
        center:true
      }
    }
  },
  plugins: [],
} satisfies Config;
