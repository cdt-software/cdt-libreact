import type { StoryObj, Meta } from '@storybook/react'
import { Text, Box, Checkbox, CheckboxProps } from '@cdt-ui/react'

export default {
    title: 'Form/Checkbox',
    component: Checkbox,
    args: {},
    decorators: [
        (Story) => {
            return (
                <Box
                    as="label"
                    css={{ display: 'flex', flexDirection: 'row' }}
                >
                    {Story()}
                </Box>
            )
        }
    ]
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}





