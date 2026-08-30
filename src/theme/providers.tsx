"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { muiTheme } from "./mui-theme";

/**
 * Provider order matters:
 * - AppRouterCacheProvider collects Emotion styles during SSR; enableCssLayer
 *   puts MUI styles in the `mui` cascade layer so Tailwind utilities can
 *   override them (layer order is declared in globals.css).
 * - next-themes owns the `.dark` / `.light` class on <html>; both Tailwind's
 *   dark variant and MUI's class-keyed color schemes react to it.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange
      >
        <MuiThemeProvider theme={muiTheme} defaultMode="dark">
          {children}
        </MuiThemeProvider>
      </NextThemesProvider>
    </AppRouterCacheProvider>
  );
}
