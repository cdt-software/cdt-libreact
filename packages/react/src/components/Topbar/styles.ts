import { fontWeights } from "@cdt-ui/tokens";
import { styled } from "../../styles";

export const Container = styled('div',{
    width: '100%',
    height: '76px',

    backgroundColor: "#fff",
    fontFamily: '$default',
    padding: '$md',
    margin: 0,
    boxSizing: 'border-box',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
})

export const ContainerTitle = styled('div',{
    margin: 0,
    padding: 0,

    h1: {
        margin: 0,
        fontSize: '$2xl',
        fontWeight: '$regular'
    },

    div: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginTop: '2px',

        

        p: {
            margin: 0,
            padding: 0,
            fontSize: '$xs',
            color: "$grayRiver700",

            '&:nth-child(3)': {
                color: '#0D47A1',
            }


        }
    }
})

export const ContainerSearch = styled('div', {
    width: 'auto',
    display: 'flex',
    color: "$grayRiver500",
  
    p: {
        margin: 0,
        padding: 0,
        fontSize: '$sm',
    },
    
    div: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',

        svg: {
            cursor: 'pointer'

        },

        span: {
            fontSize: '12px',
        }
    }

})

export const Search = styled('div', {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '18px',
    marginRight: '12px',

    width: '356px',
    Minwidth: '100%',
    height: '40px',

    padding: '0 15px',
    borderRadius: '$full',
    backgroundColor: '$gray50',
  
    div: {
        width: '100%',
        height: '100%',

        svg: {
            color: '$gray500'
        }
    }
})

export const Input = styled('input', {
    width: '100%',
    height: '100%',
    background: 'transparent',
    outline: 'none',
    border: '0',
    color: '$gray500',

    '&::placeholder': {
        fontSize: '$xs',
        color: '$gray500'
    }

})
