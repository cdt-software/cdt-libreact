import { ComponentProps } from "react";

import { CheckIcon } from "@heroicons/react/24/solid"
import { CheckboxContainer, CheckboxIndicator } from "./styles"

export interface CheckboxProps extends ComponentProps<typeof CheckboxContainer> { }

export function Checkbox({ ...props }: CheckboxProps) {
    return (
        <>
            <CheckboxContainer {...props}>
                <CheckboxIndicator asChild>
                    <CheckIcon />
                </CheckboxIndicator>
            </CheckboxContainer>
        </>
    )
}

Checkbox.displayName = "Checkbox"





