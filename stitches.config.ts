import { mauveDark } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...mauveDark,
    },
    fontSizes: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.25rem", // 20px
      xl: "1.5rem", // 24px
      "2xl": "2rem", // 32px
      "3xl": "3rem", // 48px
      "4xl": "4rem", // 64px
      "5xl": "4.5rem", // 72px
    },
    lineHeights: {
      xs: "1.125rem", // 18px
      sm: "1.3125rem", // 21px
      base: "1.5rem", // 24px
      lg: "1.875rem", // 30px
      xl: "2.25rem", // 36px
      "2xl": "3rem", // 48px
      "3xl": "4.5rem", // 72px
      "4xl": "6rem", // 96px
      "5xl": "6.75rem", // 108px
    },
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    space: {
      "spacing-01": "0.125rem", // 2px
      "spacing-02": "0.25rem", // 4px
      "spacing-03": "0.5rem", // 8px
      "spacing-04": "0.75rem", // 12px
      "spacing-05": "1rem", // 16px
      "spacing-06": "1.5rem", // 24px
      "spacing-07": "2rem", // 32px
      "spacing-08": "2.5rem", // 40px
      "spacing-09": "3rem", // 48px
      "spacing-10": "4rem", // 64px
      "spacing-11": "5rem", // 80px
      "spacing-12": "6rem", // 96px
      "spacing-13": "10rem", // 160px
    },
    radii: {
      sm: "3px",
      md: "5px",
      lg: "15px",
      round: "50%",
      pill: "9999px",
    },
  },
  media: {
    sm: "(min-width: 480px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    motionOk: "(prefers-reduced-motion: no-preference)",
  },
  utils: {
    marginX: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (value: Stitches.PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    inset: (value: Stitches.PropertyValue<"top">) => ({
      top: value,
      left: value,
      right: value,
      bottom: value,
    }),
    outlineRing: (value: Stitches.PropertyValue<"color">) => ({
      "&:focus": {
        outline: "none",
        borderColor: "transparent",
      },
      "&:focus-visible": {
        outlineColor: value || "$mauve8",
        outlineStyle: "solid",
        outlineWidth: "2px",
      },
    }),
  },
});
