const globalStyles = globalCss({
  "*, *::before, *::after": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",

    outlineRing: "$mauve8",
  },

  "html, body": {
    backgroundColor: "$mauve1",
    height: "100%",

    color: "$mauve12",
    fontFamily: "IBM Plex Sans, Sans-serif",
  },

  html: {
    minWidth: "360px",
    scrollBehavior: "smooth",
    fontSmooth: "auto",
  },

  body: {
    lineHeight: "1.5",
    fontSmooth: "always",
  },

  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%",
  },

  "::selection": {
    backgroundColor: "$mauve11",
    color: "$mauve1",
  },

  "input, button, textarea, select": {
    font: "inherit",
  },

  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word",
  },

  "h1, h2, h3, h4, h5, h6": {
    fontSize: "inherit",
    fontWeight: "inherit",
  },

  a: {
    textDecoration: "none",
    color: "inherit",
  },

  "a:focus": {
    outline: "none",
  },

  "ol, ul": {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },

  "code, pre": {
    fontFamily: "IBM Plex Mono, monospace",
  },

  /* Remove Safari input shadow on mobile */
  'input[type="text"]': {
    appearance: "none",
  },
  'input[type="email"]': {
    appearance: "none",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />;
}

export default MyApp;

import type { AppProps } from "next/app";
import { globalCss } from "stitches.config";
