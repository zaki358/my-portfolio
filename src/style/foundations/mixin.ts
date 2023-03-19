const scrennSize: { pc: number; tablet: number } = {
  pc: 1280,
  tablet: 960,
};

const tabletScreen = (): string => `@media (min-width: ${scrennSize.tablet}px)`;
const pcScreen = (): string => `@media (min-width: ${scrennSize.pc}px)`;

const mixin = {
  tabletScreen,
  pcScreen,
};

const defaultFont = {
  fontFamily: "hot-kointaikk, sans-serif",
  fontWeight: "400",
  fontStyle: "normal",
};

const color = {
  bloodColor1: "#520400",
  bloodColor2: "#BD0900",
};

export { mixin, defaultFont, color };
