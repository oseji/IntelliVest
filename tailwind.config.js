/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      minHeight:{
        'screen90':'90dvh'
      },
      width:{
        heroHeading:'850px'
      },
      minWidth:{
        screen:'100%'
      },
      colors:{
        'background':'#00000F'
      }
    },
  },
  plugins: [],
}

