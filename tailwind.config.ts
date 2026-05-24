import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        crema: "#FFF7E8",
        rojo: "#C62828",
        amarillo: "#FFC928",
        marron: "#5A3218",
        verde: "#2E7D32",
        tinta: "#181818",
      },
      boxShadow: {
        comida: "0 18px 45px rgba(90, 50, 24, 0.16)",
        cta: "0 14px 30px rgba(198, 40, 40, 0.25)",
      },
      backgroundImage: {
        "paper-soft":
          "radial-gradient(circle at 15% 15%, rgba(255, 201, 40, 0.18), transparent 24%), radial-gradient(circle at 85% 10%, rgba(46, 125, 50, 0.12), transparent 22%), linear-gradient(135deg, #fff7e8 0%, #fff0d3 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
