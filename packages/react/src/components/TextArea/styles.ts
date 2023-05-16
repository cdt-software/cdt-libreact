import { styled } from "../../styles";

export const TextAreaContainer = styled("div",{
    position: 'relative',
    width: 600,
    height: 110
})

export const Textarea = styled('textarea', {
    width: "100%",
    minHeight: 80,
    padding: '20px 16px',
    border: '1px solid $gray400',
    borderRadius: 12,
    outline: 'none',
    fontSize: '$sm',
    transition: '0.2s',
    color: "$gray700",
    fontFamily: "$default",

    '&:valid ~ span': {
        translate: "0px -39px",
        fontSize: '$sm',
        fontWeight: '$semiBold',
        background: "$white",
    },

    '&:focus ~ span': {
        color: "$blue800",
        translate: "0px -39px",
        fontSize: '$md',
        fontWeight: '$semiBold',
        background: "$white",
    },

    '&:focus': {
        outline: 'none',
        border: '1px solid $blue800'
    },

    '&:disabled': {
        opacity: '0.6',
        cursor: 'not-allowed'
    },
})

export const Span = styled('span', {
    position: 'absolute',
    left: '16px',
    top: '25%',
    fontSize: '$md',
    color: "$gray700",
    pointerEvents: 'none',
    transition: '0.2s',
    fontFamily: "$default",
    fontWeight: '$semiBold',
})