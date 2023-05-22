import type { StoryObj, Meta } from '@storybook/react'
import { Sidebar } from '@cdt-ui/react'

export default {
    title: 'Sidebar/sidebar ',
    component: Sidebar,
    args: {
        src: '',
        alt: 'Nome do usuário'
    },
    argTypes: {
        src: {
            control: {
                type: 'text'
            }
        }
    }
} as Meta

export const Primary: StoryObj = {}



