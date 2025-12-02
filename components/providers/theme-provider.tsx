"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";

/**
 * ThemeProvider Component
 *
 * Wraps the application with next-themes ThemeProvider.
 * Handles theme persistence and system preference detection.
 *
 * @param {ThemeProviderProps} props - Theme provider configuration
 * @returns {JSX.Element} Theme provider wrapper
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
