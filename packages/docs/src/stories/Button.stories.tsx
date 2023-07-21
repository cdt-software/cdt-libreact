import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@cdt-ui/react'

import { FcGoogle } from 'react-icons/fc'

export default {
    title: 'Form/Button',
    component: Button,
    args: {
        children: 'Entrar',
        variant: 'primary',
        size: 'md',
        disabled: false,
    },
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'tertiary', 'greenDark', 'greenLight'],
            control: {
                type: 'inline-radio'
            }
        },
        
        children: {
            control: {
                type: null
            }
        },

        size: {
            options: ['full', 'md'],
            control: {
                type: 'inline-radio'
            }
        },

        disabled: {
            control: {
                type: 'boolean'
            }
        },

        onClick: {
            action: 'click',
        }
    }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        variant: 'secondary'
    }
}

export const tertiary: StoryObj<ButtonProps> = {
    args: {
        variant: 'tertiary',
        children: (
            <>
                <FcGoogle />
                Entrar com o Google
            </>
        )
    }
}

export const Full: StoryObj<ButtonProps> = {
    args: {
        size: 'full'
    }
}




