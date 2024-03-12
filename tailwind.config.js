/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      antiqaStil: ["Slackside One", "cursive"]
    },
    screens: {
      iphoneSe: "320px",
      redme: "450px",
      zFold: "600px",
      ipad: "780px",
      netbook: "900px",
      noutbook: "1020px",
      pc: "1720px",
      artelTv: "2000px"
    },
    extend: {},
  },
  plugins: [],
}