import { fontSizes, fontWeights } from "@cdt-ui/tokens";
import { styled } from "../../styles";

export const Aside = styled('aside', {
    width: '280px',
    minHeight: '100vh',
    backgroundColor: '$white',
    padding: '32px 0',
    fontFamily: '$default',

    nav: {
        width: '100%',

        ul: {
            listStyle: 'none',
            padding: 0,
        }
    }

})

export const ContainerHeader = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '40px',
    padding: '0 19px',

    div: {
        display: 'flex',
        alignItems: 'center',
        gap: '9px'

    },

    strong: {
        textTransform: 'uppercase',
        color: '$gray900',
        fontWeight: '$bold',
        fontSize: '$xs'
    },

    svg: {
        width: '22px',
        color: '$blue900'
    }
})

export const Li = styled('li', {
    position: 'relative',
    height: '100%',
    marginBottom: '40px',
    cursor: 'pointer',
    paddingRight: '20px',
    color: '$grayRiver600',
    fontSize: '14px',
})

export const ContainerTitle = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 11px',
    marginLeft: '8px',

    variants: {
        open: {
            true: {
                backgroundColor: '#0D47A133',
                paddingTop: '10px',
                paddingBottom: '10px',
                borderRadius: '12px',
            }
        }
    }
})

export const ContainerIcon = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '11px',

    variants: {
        open: {
            true: {
                color: '#0D47A1'
            }
        }
    }
})

export const SectionTitle = styled('p', {
    fontSize: '$xs',
    fontWeight: '$semiBold',
    color: '$grayRiver200',
    margin: 0,
    marginBottom: '15px',
    padding: '0 19px',
    textTransform: 'uppercase'
})

export const ContainerChildren = styled('div', {
    height: '100%',
    position: 'relative',

    variants: {
        open: {
            true: {
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                paddingTop: '18px',
                marginLeft: '28px',
                paddingLeft: '20px',
            },
            false: {
                display: 'none',
            }
        }
    },

    a: {
        position: 'relative',

        div: {
            position: 'absolute',
            left: '-20px',
            top: '0%',
            // transform: 'translateY(-50%)',
            width: '12px',
            height: '10px',
            borderLeft: '2px solid #CFDAEC',
            borderBottom: '2px solid #CFDAEC',
            borderRadius: '0 0 0 11px'
        }

    }
})

export const ChildBorder = styled('div', {
    position: 'absolute',
    width: '100%',
    height: 'calc(100% - 18px)',
    top: 0,
    left: 0,
    borderLeft: '2px solid #CFDAEC',
})

