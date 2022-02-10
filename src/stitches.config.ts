import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {
        gray400: "gainsboro",
        gray500: "lightgray",
      },
    },
    media: {
      bp1: "(min-width: 480px)",
    },
    utils: {
      mX: (value: number | string) => ({ marginLeft: value, marginRight: value }),
      mY: (value: number | string) => ({ marginTop: value, marginBottom: value }),
      m: (value: number | string) => ({
        marginTop: value,
        marginLeft: value,
        marginBottom: value,
        marginRight: value,
      }),
    },
  });
