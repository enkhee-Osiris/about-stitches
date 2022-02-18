import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {
        green: "#3acf29",
        gray400: "gainsboro",
        gray500: "lightgray",
      },
    },
    media: {
      bp1: "(min-width: 480px)",
      bp2: "(min-width: 640px)",
      bp3: "(min-width: 768px)",
      bp4: "(min-width: 1024px)",
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
