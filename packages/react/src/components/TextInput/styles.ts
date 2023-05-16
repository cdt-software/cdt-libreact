import { styled } from "../../styles";

export const TextInputContainer = styled("div",{
    position: 'relative',
    width: 382,
    height: 50
})

export const Input = styled('input', {
    width: '100%',
    height: 50,
    padding: '0px 16px',
    border: '1px solid $gray400',
    borderRadius: 12,
    outline: 'none',
    fontSize: '$sm',
    transition: '0.2s',
    color: "$gray700",
    fontFamily: "$default",

    '&:valid ~ span': {
        translate: "0px -36px",
        fontSize: '$sm',
        fontWeight: '$semiBold',
        background: "$white",
    },

    '&:focus ~ span': {
        color: "$blue800",
        translate: "0px -36px",
        fontSize: '$md',
        fontWeight: '$semiBold',
        background: "$white",
    },

    '&:focus': {
        border: '1px solid $blue800'
    },

    '&:disabled': {
        cursor: 'not-allowed'
    },
})

export const Span = styled('span', {
    position: 'absolute',
    left: '16px',
    top: '50%',
    translate: "0 -50%",
    fontSize: '$md',
    color: "$gray700",
    pointerEvents: 'none',
    transition: '0.2s',
    fontFamily: "$default",
    fontWeight: '$semiBold',
})