var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// ../tokens/dist/index.mjs
var colors = {
  white: "#FFFFFF",
  black: "#000000",
  linkActive: "#1A0DAB",
  linkVisited: "#681DA8",
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
  blueA100: "#82B1FF",
  blueA200: "#448AFF",
  blueA400: "#2979FF",
  blueA700: "#2962FF",
  beige50: "#FCFAF6",
  beige100: "#F9F4EC",
  beige200: "#F2EAD9",
  beige300: "#E9DABD",
  beige400: "#DAC7A1",
  beige500: "#B2A180",
  beige600: "#9C8D70",
  beige700: "#867960",
  beige800: "#6F6550",
  beige900: "#413C30",
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
  amberA100: "#FFE57F",
  amberA200: "#FFD740",
  amberA400: "#FFC400",
  amberA700: "#FFAB00",
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
var space = {
  none: "0",
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
  "4xl": "6.5rem",
  "5xl": "7.5rem"
};
var media = {
  xs: "(min-width: 320px)",
  sm: "(min-width: 375px)",
  md: "(min-width: 640px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1260px)"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  xl: "20px",
  "2xl": "24px",
  full: "99999px"
};
var fonts = {
  default: "Segoe UI, sans-serif",
  code: "monospace"
};
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};
var shadows = {
  shadow: "-4px -4px 10px 0px #000000, 4px 4px 6px 0px #000000;",
  "shadow-md": "4px 3px 20px 4px #000000, 2px 2px 4px 0px #000000, 4px 4px 10px 0px #000000",
  "shadow-lg": "0rem 0.5rem 1rem rgba(0, 0, 0, 0.15)",
  "shadow-xl": "0rem 1rem 1rem 0rem rgba(0, 0, 0, 0.15)"
};

// src/styles/index.ts
import { createStitches, defaultThemeMap } from "@stitches/react";
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  themeMap: __spreadProps(__spreadValues({}, defaultThemeMap), {
    height: "space",
    width: "space"
  }),
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
    shadows,
    media
  }
});

// src/components/Box.tsx
var Box = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 39,
  padding: "$2xl $lg",
  backgroundColor: "$white",
  border: "none",
  color: "$black"
});

// src/components/Text.tsx
var Text = styled("p", {
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$gray800",
  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "4xl": { fontSize: "$4xl" },
      "5xl": { fontSize: "$5xl" },
      "6xl": { fontSize: "$6xl" },
      "7xl": { fontSize: "$7xl" },
      "8xl": { fontSize: "$8xl" },
      "9xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});

// src/components/Heading.tsx
var Heading = styled("h2", {
  fontFamily: "$default",
  lineHeight: "$short",
  margin: 0,
  color: "$gray800",
  variants: {
    size: {
      sm: { fontSize: "$xl" },
      md: { fontSize: "$2xl" },
      lg: { fontSize: "$4xl" },
      "2xl": { fontSize: "$5xl" },
      "3xl": { fontSize: "$6xl" },
      "4xl": { fontSize: "$7xl" },
      "5xl": { fontSize: "$8xl" },
      "6xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});

// src/components/Avatar/styles.ts
import * as Avatar from "@radix-ui/react-avatar";
var AvatarContainer = styled(Avatar.Root, {
  borderRadius: "$full",
  display: "inline-block",
  width: 40,
  height: 40,
  overflow: "hidden"
});
var AvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit"
});
var AvatarFallback = styled(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray400",
  color: "$gray500",
  svg: {
    width: 24,
    height: 24
  }
});

// src/components/Avatar/index.tsx
import { UserIcon } from "@heroicons/react/24/solid";
import { jsx, jsxs } from "react/jsx-runtime";
function Avatar2(props) {
  return /* @__PURE__ */ jsxs(AvatarContainer, { children: [
    /* @__PURE__ */ jsx(
      AvatarImage,
      __spreadValues({}, props)
    ),
    /* @__PURE__ */ jsx(AvatarFallback, { delayMs: 600, children: /* @__PURE__ */ jsx(UserIcon, {}) })
  ] });
}

// src/components/Button.tsx
var Button = styled("button", {
  all: "unset",
  height: 52,
  fontFamily: "$default",
  fontWeight: "$semiBold",
  textAlign: "center",
  borderRadius: 56,
  padding: "$md $xl",
  width: "$2xl",
  border: 0,
  boxSizing: "border-box",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$sm",
  svg: {
    width: 24,
    height: 20
  },
  "&:disabled": {
    backgroundColor: "$gray400",
    cursor: "not-allowed"
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "$blue600",
        color: "$white",
        "&:not(disabled):hover": {
          backgroundColor: "$blue700"
        }
      },
      secondary: {
        backgroundColor: "$gray400",
        color: "$white",
        cursor: "not-allowed"
      },
      tertiary: {
        backgroundColor: "none",
        color: "$gray800",
        border: "1px solid $gray300",
        "&:not(disabled):hover": {
          backgroundColor: "$gray200",
          border: "none"
        }
      }
    },
    size: {
      full: {
        minWidth: "100%",
        fontSize: "$md"
      },
      md: {
        minWidth: 382,
        fontSize: "$md"
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "primary"
  }
});

// src/components/TextInput/styles.ts
var TextInputContainer = styled("div", {
  position: "relative",
  width: 382,
  height: 50
});
var Input = styled("input", {
  width: "100%",
  height: 50,
  padding: "0px 16px",
  border: "1px solid $gray400",
  borderRadius: 12,
  outline: "none",
  fontSize: "$sm",
  transition: "0.2s",
  color: "$gray700",
  fontFamily: "$default",
  "&:valid ~ span": {
    translate: "0px -36px",
    fontSize: "$sm",
    fontWeight: "$semiBold",
    background: "$white"
  },
  "&:focus ~ span": {
    color: "$blue800",
    translate: "0px -36px",
    fontSize: "$md",
    fontWeight: "$semiBold",
    background: "$white"
  },
  "&:focus": {
    border: "1px solid $blue800"
  },
  "&:disabled": {
    cursor: "not-allowed"
  }
});
var Span = styled("span", {
  position: "absolute",
  left: "16px",
  top: "50%",
  translate: "0 -50%",
  fontSize: "$md",
  color: "$gray700",
  pointerEvents: "none",
  transition: "0.2s",
  fontFamily: "$default",
  fontWeight: "$semiBold"
});

// src/components/TextInput/index.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function TextInput(_a) {
  var _b = _a, { prefix } = _b, props = __objRest(_b, ["prefix"]);
  return /* @__PURE__ */ jsxs2(TextInputContainer, { children: [
    /* @__PURE__ */ jsx2(Input, __spreadProps(__spreadValues({}, props), { required: true })),
    /* @__PURE__ */ jsx2(Span, { children: "E-mail" })
  ] });
}

// src/components/TextArea/styles.ts
var TextAreaContainer = styled("div", {
  position: "relative",
  width: 600,
  height: 110
});
var Textarea = styled("textarea", {
  width: "100%",
  minHeight: 80,
  padding: "20px 16px",
  border: "1px solid $gray400",
  borderRadius: 12,
  outline: "none",
  fontSize: "$sm",
  transition: "0.2s",
  color: "$gray700",
  fontFamily: "$default",
  "&:valid ~ span": {
    translate: "0px -39px",
    fontSize: "$sm",
    fontWeight: "$semiBold",
    background: "$white"
  },
  "&:focus ~ span": {
    color: "$blue800",
    translate: "0px -39px",
    fontSize: "$md",
    fontWeight: "$semiBold",
    background: "$white"
  },
  "&:focus": {
    outline: "none",
    border: "1px solid $blue800"
  },
  "&:disabled": {
    opacity: "0.6",
    cursor: "not-allowed"
  }
});
var Span2 = styled("span", {
  position: "absolute",
  left: "16px",
  top: "25%",
  fontSize: "$md",
  color: "$gray700",
  pointerEvents: "none",
  transition: "0.2s",
  fontFamily: "$default",
  fontWeight: "$semiBold"
});

// src/components/TextArea/index.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function TextArea() {
  return /* @__PURE__ */ jsxs3(TextAreaContainer, { children: [
    /* @__PURE__ */ jsx3(Textarea, { required: true }),
    /* @__PURE__ */ jsx3(Span2, { children: "E-mail" })
  ] });
}
export {
  Avatar2 as Avatar,
  Box,
  Button,
  Heading,
  Text,
  TextArea,
  TextInput
};
