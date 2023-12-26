/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        mainHeading: "120px",
        subHeading: "50px",
        colorHeading: "40px",
      },
      colors: {
        "regal-blue": "#243c5a",
        primary: "#00413D",
        secondary: "#E5745D",
        orangered: "#EF8100",
        BannerColor: "#F9F4F1",
        borderColor: "#D3DCD4",
        bannerTextColor: "rgba(0, 65, 61, 0.00)",
        ServiceCardShadow: "0px 20px 100px 0px rgba(0, 65, 61, 0.06)",
        FooterListColor: "#4B7773",
      },
      fontFamily: {
        sans: ["ui-sans-serif"],
        Jost: ["Jost", "sans-serif"],
        Vol: ["Vollkorn", "serif"],
      },
      spacing: {
        container: "1290px",
        secondaryContainer: "1600px",
      },
      backgroundImage: {},
      screens: {
        "custom-xs": "320px",
        "custom-sm": "663px",
        "custom-lg": "1145px",
      },
    },
  },
  plugins: [],
};
