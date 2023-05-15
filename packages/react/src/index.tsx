import { ComponentProps } from 'react'

import { styled } from './styles'

export const Button = styled('button', {
    height: 52,
    backgroundColor: '$blue800',
    fontFamily: '$default',
    fontWeight: '$semiBold',
    color: '$white',
    borderRadius: 56,
    padding: '$md $xl',
    width: '$2xl',
    border: 0,
    cursor: 'pointer',

    variants: {
        size: {
            small: {
                minWidth: "100%",
                fontSize: '$md',
            },
            big: {
                minWidth: 358,
                fontSize: '$md',
            }
        }
    },


    defaultVariants: {
        size: 'big'
    }
})

export type ButtonProps = ComponentProps<typeof Button>

