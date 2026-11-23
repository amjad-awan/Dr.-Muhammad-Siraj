/**
 * Single source of truth for brand colours.
 * Injected as CSS variables on <html> (see app/layout.tsx) and consumed by
 * Tailwind through the @theme block in globals.css.
 */
export const theme = {
  colors: {
    primary: "#287C78",
    primaryDark: "#1D615E",
    primarySoft: "#E4F0EE",
    secondary: "#A8C8BE",
    background: "#F8FAF8",
    surface: "#FFFFFF",
    text: "#253532",
    // Slightly darker than the suggested #74827D so muted text keeps AA contrast on the off-white background.
    muted: "#5F6F6A",
    accent: "#DCC9A8",
    border: "#E5ECE8",
  },
} as const;

export const themeColor = theme.colors.primary;

export function themeToCssVars(): Record<string, string> {
  const toKebab = (s: string) => s.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
  return Object.fromEntries(
    Object.entries(theme.colors).map(([key, value]) => [`--brand-${toKebab(key)}`, value]),
  );
}
