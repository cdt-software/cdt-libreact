import type { StoryObj, Meta } from '@storybook/react'
import { Box, TextArea, TextAreaProps } from '@cdt-ui/react'

export default {
    title: 'Form/Text Area',
    component: TextArea,
    args: {},
    decorators: [
        (Story) => {
            return (
                <Box css={{}}>
                    {Story()}
                </Box>
            )
        }
    ]
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}

export const Disabled: StoryObj<TextAreaProps> = {
    args: {
        disabled: true
    }
}


