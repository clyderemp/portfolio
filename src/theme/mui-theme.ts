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
        primary: { main: "#9a6207", contrastText: "#fffbeb" },
        secondary: { main: "#5b6472" },
        error: { main: "#c8392e" },
        background: { default: "#faf9f6", paper: "#ffffff" },
        text: { primary: "#171c26", secondary: "#5b6472" },
        divider: "#e4e1d6",
      },
    },
    dark: {
      palette: {
        primary: { main: "#f5a524", contrastText: "#1a1205" },
        secondary: { main: "#8b98ac" },
        error: { main: "#e5484d" },
        background: { default: "#0a0e15", paper: "#10161f" },
        text: { primary: "#e7ebf2", secondary: "#8b98ac" },
        divider: "rgba(148, 163, 199, 0.16)",
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
