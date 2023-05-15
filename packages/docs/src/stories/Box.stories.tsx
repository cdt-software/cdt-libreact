import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@cdt-ui/react'

export default {
    title: 'Surfaces/Box',
    component: Box,
    args: {
        children: (
            <>
                <span>Title Aqui</span>
            </>
        )
    }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

