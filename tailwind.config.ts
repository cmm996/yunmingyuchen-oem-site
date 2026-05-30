import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        herb: {
          50: "#f7f6ef",
          100: "#ede9d6",
          200: "#d9d7ad",
          300: "#b8c07e",
          400: "#8fa357",
          500: "#637f3a",
          600: "#405d2d",
          700: "#253f28",
          800: "#152b20",
          900: "#0d1d18"
        },
        gold: {
          100: "#f7e8b2",
          300: "#d8b65a",
          500: "#aa7b2d"
        },
        clay: "#a85632",
        ink: "#1f2a24"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(31, 42, 36, 0.12)",
        lift: "0 12px 34px rgba(21, 43, 32, 0.14)"
      },
      backgroundImage: {
        "paper-grain":
          "radial-gradient(circle at 15% 10%, rgba(216, 182, 90, 0.18), transparent 28%), radial-gradient(circle at 85% 12%, rgba(99, 127, 58, 0.16), transparent 30%), linear-gradient(135deg, #fbfaf4 0%, #f1eddc 48%, #eaf0dd 100%)"
      }
    }
  },
  plugins: []
};

export default config;
