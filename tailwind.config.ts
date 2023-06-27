import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
  colors: {
    background: "#f4e9e6",
    text: "#1d0f0c",
    accent: "#76b6c6",
    accent2: "#3f8597",
    orangeburnt: "#bf5700",
  },
} satisfies Config;
