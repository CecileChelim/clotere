import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    main: "#1DF36C",
    mainDark: "#1BE764",
    black: "#1D2B28",
    white: "#fff",
    greenDark: "#016069",
    lightGreen: "#A7C3C5",
    linearBackground:"linear-gradient(180deg, rgba(239,234,224,1) 0%, rgba(255,255,255,1) 100%);"
  },
  fonts: ["Manrope", "sans-serif"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;