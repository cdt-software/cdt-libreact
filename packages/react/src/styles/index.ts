import {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    media,
    radii,
    shadows,
    space
} from "@cdt-ui/tokens";
import { createStitches, defaultThemeMap } from "@stitches/react";

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config
} = createStitches({
    themeMap: {
        ...defaultThemeMap,
        height: 'space',
        width: 'space'
    },
    theme: {
        colors: colors,
        fontSizes: fontSizes,
        fontWeights: fontWeights,
        fonts: fonts,
        lineHeights: lineHeights,
        radii: radii,
        space: space,
        shadows: shadows,
        media: media,
    },
})