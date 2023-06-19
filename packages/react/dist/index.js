"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Avatar: () => Avatar2,
  Box: () => Box,
  Button: () => Button,
  Checkbox: () => Checkbox2,
  Heading: () => Heading,
  Sidebar: () => Sidebar,
  Text: () => Text,
  TextArea: () => TextArea,
  TextInput: () => TextInput,
  Topbar: () => Topbar,
  config: () => config,
  createTheme: () => createTheme,
  css: () => css,
  getCssText: () => getCssText,
  globalCss: () => globalCss,
  keyframes: () => keyframes,
  styled: () => styled,
  theme: () => theme
});
module.exports = __toCommonJS(src_exports);

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
var import_react = require("@stitches/react");
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = (0, import_react.createStitches)({
  themeMap: __spreadProps(__spreadValues({}, import_react.defaultThemeMap), {
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
Box.displayName = "Box";

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
Text.displayName = "Text";

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
Heading.displayName = "Heading";

// src/components/Avatar/styles.ts
var Avatar = __toESM(require("@radix-ui/react-avatar"));
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
var import_solid = require("@heroicons/react/24/solid");
var import_jsx_runtime = require("react/jsx-runtime");
function Avatar2(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AvatarContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      AvatarImage,
      __spreadValues({}, props)
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { delayMs: 600, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_solid.UserIcon, {}) })
  ] });
}
Avatar2.displayName = "Avatar";

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
  "&:not([disabled]):hover": {
    backgroundColor: "$blue700"
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "$blue600",
        color: "$white",
        "&:not([disabled]):hover": {
          backgroundColor: "$blue700"
        }
      },
      secondary: {
        backgroundColor: "$gray400",
        color: "$white",
        cursor: "not-allowed",
        "&:not([disabled]):hover": {
          backgroundColor: "$gray400"
        }
      },
      tertiary: {
        backgroundColor: "none",
        color: "$gray800",
        border: "1px solid $gray300",
        "&:not([disabled]):hover": {
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
Button.displayName = "Button";

// src/components/TextInput/index.tsx
var import_react2 = require("react");

// src/components/TextInput/styles.ts
var TextInputContainer = styled("div", {
  position: "relative",
  width: "100%",
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
    background: "#ffffff"
  },
  "&:focus ~ span": {
    color: "$blue800",
    translate: "0px -36px",
    fontSize: "$md",
    fontWeight: "$semiBold",
    background: "#ffffff"
  },
  "&::placeholder-shown ~ span": {
    translate: "0px -36px",
    fontSize: "$md",
    fontWeight: "$semiBold",
    background: "#ffffff"
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
var import_jsx_runtime2 = require("react/jsx-runtime");
var TextInput = (0, import_react2.forwardRef)((_a, ref) => {
  var _b = _a, { title } = _b, props = __objRest(_b, ["title"]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(TextInputContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Input, __spreadProps(__spreadValues({ ref }, props), { required: true })),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Span, { children: title ? title : "description" })
  ] });
});
TextInput.displayName = "TextInput";

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
var import_jsx_runtime3 = require("react/jsx-runtime");
function TextArea(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(TextAreaContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Textarea, __spreadProps(__spreadValues({}, props), { required: true })),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Span2, { children: "Description" })
  ] });
}
TextArea.displayName = "TextArea";

// src/components/Checkbox/index.tsx
var import_solid2 = require("@heroicons/react/24/solid");

// src/components/Checkbox/styles.ts
var Checkbox = __toESM(require("@radix-ui/react-checkbox"));
var CheckboxContainer = styled(Checkbox.Root, {
  all: "unset",
  width: 24,
  height: 24,
  backgroundColor: "$white",
  borderRadius: "$xs",
  lineHeight: 0,
  cursor: "pointer",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid $gray400",
  '&[data-state="checked"]': {
    backgroundColor: "$blue800"
  },
  '&:focus, &[data-state="checked"]': {
    border: "2px solid $blue800"
  }
});
var slideIn = keyframes({
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
});
var slideOut = keyframes({
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(-100%)"
  }
});
var CheckboxIndicator = styled(Checkbox.Indicator, {
  color: "$white",
  width: 16,
  height: 16,
  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`
  }
});

// src/components/Checkbox/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Checkbox2(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CheckboxContainer, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CheckboxIndicator, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_solid2.CheckIcon, {}) }) })) });
}
Checkbox2.displayName = "Checkbox";

// src/components/Sidebar/index.tsx
var import_react5 = require("react");

// src/Data/menuLinks.ts
var menuLinks = [
  {
    id: 2,
    sectionTitle: "Usu\xE1rios",
    title: "Usu\xE1rios",
    icon: "AcademicCapIcon",
    children: [
      {
        title: "Adicionar",
        href: "/?path=/story/sidebar-sidebar--primary"
      },
      {
        title: "Gerenciar",
        href: "/?path=/story/sidebar-sidebar--primary"
      }
    ]
  },
  {
    id: 2,
    sectionTitle: "Segmentos",
    title: "Segmenta\xE7\xE3o",
    icon: "AcademicCapIcon",
    children: [
      {
        title: "Cidade",
        href: "/?path=/story/sidebar-sidebar--primary"
      },
      {
        title: "Estado",
        href: "/?path=/story/sidebar-sidebar--primary"
      },
      {
        title: "Segmentos",
        href: "/?path=/story/sidebar-sidebar--primary"
      }
    ]
  },
  {
    id: 3,
    sectionTitle: "Estabelecimentos",
    title: "Estabelecimento",
    icon: "AcademicCapIcon",
    children: [
      {
        title: "Adicionar",
        href: "/?path=/story/sidebar-sidebar--primary"
      },
      {
        title: "Gerenciar",
        href: "/?path=/story/sidebar-sidebar--primary"
      },
      {
        title: "Categoria",
        href: "/?path=/story/sidebar-sidebar--primary"
      },
      {
        title: "Produto",
        href: "/?path=/story/sidebar-sidebar--primary"
      },
      {
        title: "Pedidos",
        href: "/?path=/story/sidebar-sidebar--primary"
      },
      {
        title: "Banner Estabelecimento",
        href: "/?path=/story/sidebar-sidebar--primary"
      },
      {
        title: "Banner Market Place",
        href: "/?path=/story/sidebar-sidebar--primary"
      },
      {
        title: "Credenciais",
        href: "/?path=/story/sidebar-sidebar--primary"
      }
    ]
  },
  {
    id: 4,
    sectionTitle: "Planos",
    title: "Planos",
    icon: "Check",
    children: [
      {
        title: "Adicionar",
        href: "/?path=/story/sidebar-sidebar--primary"
      },
      {
        title: "Gerenciar",
        href: "/?path=/story/sidebar-sidebar--primary"
      },
      {
        title: "Voucher",
        href: "/?path=/story/sidebar-sidebar--primary"
      },
      {
        title: "Assinatura",
        href: "/?path=/story/sidebar-sidebar--primary"
      }
    ]
  }
];

// src/components/Sidebar/NavLink.tsx
var import_react4 = require("react");

// src/components/Sidebar/ActiveLink.tsx
var import_react_router_dom = require("react-router-dom");
var import_react3 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
function ActiveLink(_a) {
  var _b = _a, { href, children, shouldMatchExactHref = false } = _b, rest = __objRest(_b, ["href", "children", "shouldMatchExactHref"]);
  const asPath = window.location.pathname;
  let isActive = false;
  if (shouldMatchExactHref && asPath === href) {
    isActive = false;
  }
  if (!shouldMatchExactHref && (asPath.endsWith(String(href)) || asPath.startsWith(String(href)))) {
    isActive = true;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_router_dom.BrowserRouter, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_react_router_dom.Link,
    __spreadProps(__spreadValues({
      style: isActive ? {
        color: "#1565C0",
        fontWeight: "600"
      } : {
        color: "#57667A"
      },
      to: href
    }, rest), {
      children: (0, import_react3.cloneElement)(children, {
        className: isActive ? "text-red text-sm" : "text-sm text-gray-400 hover:text-red"
      })
    })
  ) });
}

// src/components/Sidebar/styles.ts
var Aside = styled("aside", {
  width: "280px",
  minHeight: "100vh",
  backgroundColor: "$white",
  padding: "32px 0",
  fontFamily: "$default",
  transition: "width ease-out 300ms",
  borderRight: "1px solid #EBECF0",
  variants: {
    collapse: {
      true: {
        width: "72px"
      }
    }
  },
  nav: {
    width: "100%",
    ul: {
      listStyle: "none",
      padding: 0
    }
  }
});
var ContainerHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "40px",
  padding: "0 19px",
  div: {
    display: "flex",
    alignItems: "center",
    gap: "9px"
  },
  strong: {
    textTransform: "uppercase",
    color: "$gray900",
    fontWeight: "$bold",
    fontSize: "$xs"
  },
  svg: {
    width: "22px",
    color: "$blue900"
  }
});
var ContainerHeaderCollapse = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  padding: "0 27px",
  svg: {
    width: "22px",
    color: "$blue900"
  }
});
var ButtonHamburguer = styled("div", {
  cursor: "pointer"
});
var Li = styled("li", {
  position: "relative",
  height: "100%",
  marginBottom: "40px",
  cursor: "pointer",
  paddingRight: "20px",
  color: "$grayRiver600",
  fontSize: "14px"
});
var ContainerTitle = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "5px 11px",
  marginLeft: "8px",
  transition: "all ease-out 100ms",
  variants: {
    open: {
      true: {
        backgroundColor: "#0D47A133",
        paddingTop: "10px",
        paddingBottom: "10px",
        borderRadius: "12px",
        transition: "all ease-out 100ms"
      }
    }
  }
});
var ContainerIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "11px",
  variants: {
    open: {
      true: {
        color: "#0D47A1"
      }
    }
  }
});
var ContainerIconCollapse = styled("li", {
  position: "relative",
  height: "48px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "47px",
  padding: "0 27px",
  transition: "background ease-out 150ms",
  borderRadius: "12px",
  cursor: "pointer",
  variants: {
    showLinkCollapse: {
      true: {
        backgroundColor: "#0D47A133"
      },
      false: {
        background: "transparent"
      }
    }
  },
  svg: {
    width: "20px",
    height: "20px"
  },
  "&:hover": {
    backgroundColor: "#0D47A133",
    borderRadius: "12px"
  }
});
var ContainerLinkCollapse = styled("div", {
  position: "absolute",
  width: 200,
  height: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  right: "-205px",
  padding: "0",
  boxSizing: "border-box",
  backgroundColor: "#fff",
  boxShadow: "rgba(0, 0, 0, 0.12) 0px 3px 6px -4px",
  borderRadius: "6px",
  variants: {
    showLinkCollapse: {
      true: {
        display: "block"
      },
      false: {
        display: "none"
      }
    }
  },
  a: {
    display: "block",
    position: "relative",
    color: "$grayRiver600",
    textDecoration: "none",
    fontSize: "$md",
    padding: "10px 15px",
    transition: "background 100ms",
    "&:hover": {
      backgroundColor: "#0D47A133"
    }
  }
});
var SectionTitle = styled("p", {
  fontSize: "$xs",
  fontWeight: "$semiBold",
  color: "$grayRiver200",
  margin: 0,
  marginBottom: "15px",
  padding: "0 19px",
  textTransform: "uppercase"
});
var ContainerChildren = styled("div", {
  height: "100%",
  position: "relative",
  variants: {
    open: {
      true: {
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        paddingTop: "18px",
        marginLeft: "28px",
        paddingLeft: "20px"
      },
      false: {
        display: "none"
      }
    }
  },
  a: {
    position: "relative",
    color: "$grayRiver600",
    textDecoration: "none",
    div: {
      position: "absolute",
      left: "-20px",
      top: "0%",
      // transform: 'translateY(-50%)',
      width: "12px",
      height: "10px",
      borderLeft: "2px solid #CFDAEC",
      borderBottom: "2px solid #CFDAEC",
      borderRadius: "0 0 0 11px"
    },
    "&:hover": {
      color: "$blue800"
    }
  }
});
var ChildBorder = styled("div", {
  position: "absolute",
  width: "100%",
  height: "calc(100% - 18px)",
  top: 0,
  left: 0,
  borderLeft: "2px solid #CFDAEC"
});

// src/components/Sidebar/NavLink.tsx
var import_solid3 = require("@heroicons/react/24/solid");
var Icon = __toESM(require("@heroicons/react/24/outline"));
var import_jsx_runtime6 = require("react/jsx-runtime");
function NavLink({ item, collapse }) {
  const IconeComponente = Icon[item.icon];
  const [open, setOpen] = (0, import_react4.useState)(false);
  const [openTitleChild, setOpenTitleChild] = (0, import_react4.useState)(false);
  const [showLinkCollapse, setShowLinkCollapse] = (0, import_react4.useState)(false);
  const asPath = window.location.pathname;
  const menuOpened = () => {
    if (item == null ? void 0 : item.children) {
      item.children.map((child) => {
        if (child.href == asPath) {
          setOpen(true);
        }
      });
    }
  };
  (0, import_react4.useEffect)(() => {
    menuOpened();
  }, []);
  if (collapse == false) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SectionTitle, { children: item.sectionTitle }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Li, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(ContainerTitle, { open, onClick: () => setOpen(!open), children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(ContainerIcon, { open, children: [
            !IconeComponente ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Icon.HeartIcon, { width: 20, height: 20 }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(IconeComponente, { width: 20, height: 20 }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: item.title })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: { transform: open ? "rotate(3.142rad)" : "rotate(0)" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            import_solid3.ChevronDownIcon,
            {
              width: 15,
              style: open ? {
                color: "#0D47A1"
              } : {
                color: "#B0B9C6"
              }
            }
          ) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(ContainerChildren, { open, children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ChildBorder, {}),
          item.children.map((child, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            ActiveLink,
            {
              href: child.href,
              children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {}),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: child.title })
              ] })
            },
            index
          ))
        ] })
      ] })
    ] });
  } else {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      ContainerIconCollapse,
      {
        showLinkCollapse,
        onClick: () => setShowLinkCollapse(!showLinkCollapse),
        children: [
          !IconeComponente ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Icon.HeartIcon, { width: 20, height: 20 }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(IconeComponente, { width: 20, height: 20 }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ContainerLinkCollapse, { showLinkCollapse, children: item.children.map((child, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            ActiveLink,
            {
              href: child.href,
              children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: child.title })
            },
            index
          )) })
        ]
      }
    );
  }
}

// src/components/Sidebar/index.tsx
var import_solid4 = require("@heroicons/react/24/solid");
var import_jsx_runtime7 = require("react/jsx-runtime");
function Sidebar({ links }) {
  const [collapse, setCollapse] = (0, import_react5.useState)(false);
  function handleCollapse() {
    setCollapse(!collapse);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Aside, { collapse, children: [
    collapse ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(ContainerHeaderCollapse, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ButtonHamburguer, { onClick: handleCollapse, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_solid4.Bars3Icon, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_solid4.RocketLaunchIcon, { width: 18 })
    ] }) }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(ContainerHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_solid4.RocketLaunchIcon, { width: 18 }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("strong", { children: "Base 2 Launch" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ButtonHamburguer, { onClick: handleCollapse, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_solid4.Bars3Icon, {}) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("nav", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("ul", { children: links === void 0 ? menuLinks.map((item, index) => {
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        NavLink,
        {
          item,
          collapse
        },
        index
      );
    }) : links.map((item, index) => {
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        NavLink,
        {
          item,
          collapse
        },
        index
      );
    }) }) })
  ] });
}

// src/components/Topbar/index.tsx
var import_react6 = require("react");

// src/components/Topbar/styles.ts
var Container = styled("div", {
  width: "100%",
  height: "76px",
  backgroundColor: "#fff",
  fontFamily: "$default",
  padding: "$md",
  margin: 0,
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
});
var ContainerTitle2 = styled("div", {
  margin: 0,
  padding: 0,
  h1: {
    margin: 0,
    fontSize: "$2xl",
    fontWeight: "$regular",
    "@media (max-width: 600px)": {
      fontSize: "$sm"
    }
  },
  div: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "2px",
    p: {
      margin: 0,
      padding: 0,
      fontSize: "$xs",
      color: "$grayRiver700",
      "&:nth-child(3)": {
        color: "#0D47A1"
      },
      a: {
        textDecoration: "none",
        color: "$grayRiver700",
        "&:hover": {
          textDecoration: "underline",
          color: "#0D47A1"
        }
      }
    }
  }
});
var ContainerSearch = styled("div", {
  width: "auto",
  display: "flex",
  color: "$grayRiver500",
  p: {
    margin: 0,
    padding: 0,
    fontSize: "$sm"
  },
  div: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    svg: {
      cursor: "pointer"
    },
    span: {
      fontSize: "12px"
    }
  }
});
var Search = styled("div", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  marginLeft: "18px",
  marginRight: "12px",
  width: "356px",
  Minwidth: "100%",
  height: "40px",
  padding: "0 15px",
  borderRadius: "$full",
  backgroundColor: "$gray50",
  div: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    svg: {
      color: "$gray500"
    }
  }
});
var Input2 = styled("input", {
  width: "100%",
  height: "100%",
  background: "transparent",
  outline: "none",
  border: "0",
  color: "$gray500",
  "&::placeholder": {
    fontSize: "$xs",
    color: "$gray500"
  }
});
var DeleteButton = styled("button", {
  border: "0",
  display: "flex",
  alignItems: "center",
  background: "transparent",
  svg: {
    "&:hover": {
      opacity: 0.8
    }
  },
  variants: {
    items: {
      block: {
        display: "block"
      },
      hidden: {
        display: "none"
      }
    }
  }
});
var Ul = styled("ul", {
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  top: "40px",
  zIndex: "999px",
  marginTop: "10px",
  backgroundColor: "white",
  boxShadow: "0px 5px 10px 2px #EBEEF3",
  borderRadius: "0 0 5px 5px",
  width: "290px",
  padding: "0 16px 4px",
  listStyle: "none",
  variants: {
    items: {
      block: {
        display: "block"
      },
      hidden: {
        display: "none"
      }
    }
  },
  li: {
    textAlign: "center",
    fontSize: "$sm",
    a: {
      textDecoration: "none",
      div: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid $gray500",
        padding: "15px 0",
        marginBottom: "8px",
        p: {
          color: "$gray500"
        }
      }
    }
  }
});

// src/components/Topbar/index.tsx
var import_solid5 = require("@heroicons/react/24/solid");

// src/Data/dataiItems.ts
var dataItems = [
  {
    id: 0,
    title: "Title",
    criador: "Luana",
    date: "25/10/2023",
    url: "/"
  },
  {
    id: 1,
    title: "Title",
    criador: "Ricardo",
    date: "30/10/2023",
    url: "/"
  }
];

// src/components/Topbar/index.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function Topbar({ locations, pageName = "Nome da p\xE1gina atual", srcAvart }) {
  const [listProducts, setListProducts] = (0, import_react6.useState)(locations === void 0 ? dataItems : locations);
  const [search, setSearch] = (0, import_react6.useState)("");
  const [items, setItems] = (0, import_react6.useState)(locations === void 0 ? dataItems : locations);
  const [loading, setLoading] = (0, import_react6.useState)(false);
  const [lastUpdateValue, setLastUpdateValue] = (0, import_react6.useState)(window.localStorage.getItem("LAST_UPDATE_VALUE"));
  const currentPage = window.location.pathname === "/" || window.location.pathname === "/iframe.html" ? "Home" : window.location.pathname.replace("/", "");
  const currentHours = (/* @__PURE__ */ new Date()).getHours();
  const currentTimeAndLastUpdate = Math.abs(currentHours - Number(lastUpdateValue));
  function updatingCurrentPage() {
    window.location.reload();
    window.localStorage.setItem("LAST_UPDATE_VALUE", String(currentHours));
  }
  const handleSearch = () => {
    if (search.length > 0) {
      setLoading(false);
      setItems(
        listProducts.filter(
          (item) => {
            var _a;
            return (item == null ? void 0 : item.criador.toLowerCase().includes(search.toLowerCase())) || ((_a = item == null ? void 0 : item.title) == null ? void 0 : _a.toLowerCase().includes(search.toLowerCase()));
          }
        )
      );
      setTimeout(() => {
        setLoading(true);
      }, 2e3);
      return;
    }
    setItems([]);
  };
  const handleDeleteItems = () => {
    setSearch("");
    setItems([]);
  };
  (0, import_react6.useEffect)(() => {
    handleSearch();
  }, [search]);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(Container, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(ContainerTitle2, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h1", { children: pageName }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { href: "javascript:history.back()", children: "P\xE1gina anterior" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: ">" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: currentPage })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(ContainerSearch, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          import_solid5.ArrowPathIcon,
          {
            width: 16,
            onClick: updatingCurrentPage,
            title: "Atualizar"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { children: [
          "Atualizado",
          currentTimeAndLastUpdate == 0 ? " recentemente" : ` h\xE1 ${currentTimeAndLastUpdate} ${currentTimeAndLastUpdate > 1 ? " horas" : " hora"}`
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Search, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_solid5.MagnifyingGlassIcon, { width: 16 }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          Input2,
          {
            type: "text",
            name: "search",
            placeholder: "Buscar",
            value: search,
            onChange: (e) => setSearch(e.target.value)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          DeleteButton,
          {
            items: search !== "" ? "block" : "hidden",
            onClick: handleDeleteItems,
            children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_solid5.XMarkIcon, { width: 18 })
          }
        ),
        items.length == 0 ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          Ul,
          {
            items: search !== "" ? "block" : "hidden",
            children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { style: { display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: "N\xE3o encontrado." }) })
          }
        ) : loading ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Ul, { children: items.map((item) => {
          return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "li",
            {
              className: "my-6 hover:bg-gray-50 p-3 cursor-pointer border-b ",
              children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { href: item.url, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: item.title }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: item.criador }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: item.date })
              ] }) })
            },
            item.id
          );
        }) }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Ul, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { style: { display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: "Carregando..." }) }) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        Avatar2,
        {
          src: srcAvart
        }
      )
    ] })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar,
  Box,
  Button,
  Checkbox,
  Heading,
  Sidebar,
  Text,
  TextArea,
  TextInput,
  Topbar,
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme
});
