// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    gray: {
      300: "#CBD5E0",
      500: "#1A365D",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
    blue: {
      400: "#4299E1",
    },
  },
});

export default theme;
