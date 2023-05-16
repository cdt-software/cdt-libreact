import { ComponentProps } from "react";
import { TextInputContainer, Input, Span } from "./styles";

export interface TextInputProps extends ComponentProps<typeof Input> {
    prefix?: string;
}

export function TextInput({ prefix, ...props }: TextInputProps) {
    return (
        <TextInputContainer>
            <Input {...props} required />
            <Span>E-mail</Span>
        </TextInputContainer>
    )
}