import { ComponentProps, forwardRef, ElementRef } from "react";
import { TextInputContainer, Input, Span } from "./styles";

export interface TextInputProps extends ComponentProps<typeof Input> {
    title: string;
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(({ title, ...props }: TextInputProps, ref) => {
    return (
        <TextInputContainer>
            <Input ref={ref} {...props} required />
            <Span>{title ? title : 'description'}</Span>
        </TextInputContainer>
    )
})

TextInput.displayName = "TextInput"


