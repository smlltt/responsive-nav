import type { Theme } from "theme-ui";
import "@fontsource/montserrat";

const theme: Theme = {
  fonts: {
    navbar: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
    contentMain: "Helvetica, sans-serif",
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#000",
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "#fff",
      },
    },
  },
};

export default theme;
