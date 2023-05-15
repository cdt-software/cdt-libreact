import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@cdt-ui/react'

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        children: 
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, quae accusantium. Tempora ipsam omnis numquam quaerat, autem harum cupiditate eveniet veritatis, placeat facere recusandae aperiam voluptatem, animi voluptas fugit accusamus?'
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong'
    }
}

