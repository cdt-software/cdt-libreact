import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Box = styled('div', {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 39,
    padding: '$2xl $lg',
    backgroundColor: '$white',
    border: 'none',
    color: "$black",
})

export interface BoxProps extends ComponentProps<typeof Box> {
    as?: ElementType
}

Box.displayName = "Box"
