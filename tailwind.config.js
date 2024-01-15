/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      // https://tailwindcss.com/docs/customizing-colors#using-css-variables
      background: "rgb(var(--color-background) / <alpha-value>)",
      "background-darker":
        "rgb(var(--color-background-darker) / <alpha-value>)",
      "accent-1": "rgb(var(--color-accent-1) / <alpha-value>)",
      "accent-2": "rgb(var(--color-accent-2) / <alpha-value>)",
      "accent-3": "rgb(var(--color-accent-3) / <alpha-value>)",
    },
  },
  plugins: [],
};
