import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#84cc00",
  primaryBright: "#84cc00",
  primaryDark: "#FFFFFF",
  secondary: "#37733f",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#006a00",
  textDisabled: "#BDC2C4",
  textSubtle: "#006a00",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#51c4d3",
  background: "#002700",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#191326",
  input: "#002e00",
  primaryDark: "#000",
  tertiary: "#353547",
  text: "#c3ffc3",
  textDisabled: "#BDC2C4",
  textSubtle: "#c3ffc3",
  borderColor: "#524B63",
  card: "#000",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
