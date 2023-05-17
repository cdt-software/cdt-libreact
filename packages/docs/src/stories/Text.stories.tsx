import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@cdt-ui/react'

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        size: 'md',
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, quae accusantium. Tempora ipsam omnis numquam quaerat, autem harum cupiditate eveniet veritatis, placeat facere recusandae aperiam voluptatem, animi voluptas fugit accusamus?'
    },
    argTypes: {
        size: {
            options: ['xx', 'sxs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong'
    }
}


