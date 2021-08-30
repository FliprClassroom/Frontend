module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      primary: "#3490dc",
      textColor: "#2f2d52",
      secondary: "#ffffff",
      danger: "#e3342f",
    },
    backgroundColor: (theme) => ({
      primary: "#2f2d52",
      secondary: "#fff",
      danger: "#e3342f",
      trial: "#ecfaff",
    }),
    borderColor: (theme) => ({
      DEFAULT: theme("colors.gray.300", "currentColor"),
      primary: "#2f2d52",
      secondary: "#ffed4a",
      danger: "#e3342f",
    }),
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      lgPrimary:
        "0 0 15px -3px rgba(47, 45, 82, 0.5), 0 0 6px -2px rgba(47, 45, 82, 0.25)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
