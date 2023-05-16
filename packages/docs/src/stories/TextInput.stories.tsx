import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@cdt-ui/react'

export default {
    title: 'Form/Text Input',
    component: TextInput,
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
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true
    }
}


