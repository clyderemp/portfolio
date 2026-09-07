"use client";

import * as React from "react";
import { useColorScheme } from "@mui/material/styles";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { setMode } = useColorScheme();

  // next-themes owns the `.dark` class; MUI components that branch on
  // palette mode in JS don't see class changes, so mirror them into setMode.
  React.useEffect(() => {
    if (resolvedTheme === "dark" || resolvedTheme === "light") {
      setMode(resolvedTheme);
    }
  }, [resolvedTheme, setMode]);

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle color scheme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {/* Both icons render; CSS shows one — the server can't know the theme. */}
      <SunIcon className="hidden dark:block" />
      <MoonIcon className="dark:hidden" />
    </Button>
  );
}
