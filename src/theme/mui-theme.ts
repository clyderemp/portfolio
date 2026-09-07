"use client";

import { createTheme } from "@mui/material/styles";

/**
 * MUI theme mapped onto the same palette as the Tailwind/shadcn tokens in
 * globals.css, so MUI components (Timeline, Snackbar, Tooltip) render as part
 * of one system. Color schemes are keyed to the `.dark` / `.light` class that
 * next-themes sets on <html>, keeping both libraries in lockstep.
 */
export const muiTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: "#315bea", contrastText: "#ffffff" },
        secondary: { main: "#7940c8" },
        error: { main: "#c8392e" },
        background: { default: "#f7f9ff", paper: "#ffffff" },
        text: { primary: "#17203b", secondary: "#596580" },
        divider: "#dce2f3",
      },
    },
    dark: {
      palette: {
        primary: { main: "#7cb4ff", contrastText: "#081327" },
        secondary: { main: "#c49bff" },
        error: { main: "#e5484d" },
        background: { default: "#090d1b", paper: "#10172b" },
        text: { primary: "#e8edff", secondary: "#97a6c7" },
        divider: "rgba(140, 163, 230, 0.18)",
      },
    },
  },
  typography: {
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
  },
  shape: {
    borderRadius: 10,
  },
});
