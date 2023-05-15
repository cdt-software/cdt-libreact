import { ComponentProps } from "react";
import { styled } from "../styles";

export const Box = styled('div', {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 39,
    padding: '$2xl $lg',
    backgroundColor: '$white',
    border: '1px solid $gray600',
    color: "$black",
})

export interface BoxProps extends ComponentProps<typeof Box> {}