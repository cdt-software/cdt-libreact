"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  App: () => App
});
module.exports = __toCommonJS(src_exports);

// ../tokens/dist/index.mjs
var colors = {
  white: "#FFFFFF",
  black: "#000000",
  linkActive: "#1A0DAB",
  linkVisited: "#681DA8",
  primary: {
    blue50: "#E3F2FD",
    blue100: "#BBDEFB",
    blue200: "#90CAF9",
    blue300: "#64B5F6",
    blue400: "#42A5F5 ",
    blue500: "#2196F3",
    blue600: "#1E88E5 ",
    blue700: "#1976D2",
    blue800: "#1565C0",
    blue900: "#1565C0",
    A100: "#82B1FF",
    A200: "#448AFF",
    A400: "#2979FF",
    A700: "#2962FF"
  },
  secondaryColor: {
    beige50: "#FCFAF6",
    beige100: "#F9F4EC",
    beige200: "#F2EAD9",
    beige300: "#E9DABD",
    beige400: "#DAC7A1",
    beige500: "#B2A180",
    beige600: "#9C8D70",
    beige700: "#867960",
    beige800: "#6F6550",
    beige900: "#413C30"
  },
  tertiaryColor: {
    amber50: "#FFF8E1",
    amber100: "#FFECB3",
    amber200: "#FFE082",
    amber300: "#FFD54F",
    amber400: "#FFCA28",
    amber500: "#FFC107",
    amber600: "#FFB300",
    amber700: "#FFA000",
    amber800: "#FF8F00",
    amber900: "#FF6F00",
    A100: "#FFE57F",
    A200: "#FFD740",
    A400: "#FFC400",
    A700: "#FFAB00"
  },
  grayRiver50: "#EBEEF3",
  grayRiver100: "#CED5DE",
  grayRiver200: "#B0B9C6",
  grayRiver300: "#919DAF",
  grayRiver400: "#919DAF",
  grayRiver500: "#64748B",
  grayRiver600: "#57667A",
  grayRiver700: "#465364",
  grayRiver800: "#37404E",
  grayRiver900: "#37404E",
  gray50: "#F8F8F8",
  gray100: "#EFEFEF",
  gray200: "#E4E4E4",
  gray300: "#D3D3D3",
  gray400: "#AFAFAF",
  gray500: "#8E8E8E",
  gray600: "#666666",
  gray700: "#535353",
  gray800: "#353535",
  gray900: "#151515",
  sucess50: "#E3F7E7",
  sucess100: "#BDECC4",
  sucess200: "#8FDF9E",
  sucess300: "#57D374",
  sucess400: "#00C853",
  sucess500: "#00BD2F",
  sucess600: "#00AD24",
  sucess700: "#009B15",
  sucess800: "#008A00",
  sucess900: "#006A00 ",
  error50: "#FDE7E6",
  error100: "#FFC8B9",
  error200: "#FFA38D",
  error300: "#FF7D5F",
  error400: "#FF5D3D",
  error500: "#FF371B",
  error600: "#FC3117",
  error700: "#FC3117",
  error800: "#FC3117",
  error900: "#C80000"
};

// src/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { style: { color: colors.secondaryColor.beige50 }, children: "Ol\xE1 mundo!" });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  App
});
