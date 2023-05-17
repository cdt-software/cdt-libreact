import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@cdt-ui/react'

export default {
    title: 'Surfaces/Box',
    component: Box,
    args: {
        children: (
            <>
                <Text>Nome da página atual</Text>
            </>
        )
    },
    argTypes: {
        children: {
            control: {
                type: null
            }
        }
    }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

