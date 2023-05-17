import { ComponentProps } from "react";
import { TextAreaContainer, Textarea, Span } from "./styles";

export interface TextAreaProps extends ComponentProps<typeof Textarea> { }

export function TextArea({ ...props }: TextAreaProps) {
    return (
        <TextAreaContainer>
            <Textarea {...props} required />
            <Span>Description</Span>
        </TextAreaContainer>
    )
}

TextArea.displayName = "TextArea"
