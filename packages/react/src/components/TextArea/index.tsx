import { ComponentProps } from "react";
import { TextAreaContainer, Textarea, Span } from "./styles";

export function TextArea() {
    return (
        <TextAreaContainer>
            <Textarea required />
            <Span>E-mail</Span>
        </TextAreaContainer>
    )
}

export interface TextAreaProps extends ComponentProps<typeof Textarea> {}