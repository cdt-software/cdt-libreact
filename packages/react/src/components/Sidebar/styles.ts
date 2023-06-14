import { styled } from '../../styles'

export const Aside = styled('aside', {
  width: '280px',
  minHeight: '100vh',
  backgroundColor: '$white',
  padding: '32px 0',
  fontFamily: '$default',
  transition: 'width ease-out 300ms',
  borderRight: '1px solid #EBECF0',

  variants: {
    collapse: {
      true: {
        width: '72px',
      },
    },
  },

  nav: {
    width: '100%',

    ul: {
      listStyle: 'none',
      padding: 0,
    },
  },
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
    gap: '9px',
  },

  strong: {
    textTransform: 'uppercase',
    color: '$gray900',
    fontWeight: '$bold',
    fontSize: '$xs',
  },

  svg: {
    width: '22px',
    color: '$blue900',
  },
})

export const ContainerHeaderCollapse = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  padding: '0 27px',

  svg: {
    width: '22px',
    color: '$blue900',
  },
})

export const ButtonHamburguer = styled('div', {
  cursor: 'pointer',
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
  padding: '5px 11px',
  marginLeft: '8px',
  transition: 'all ease-out 100ms',

  variants: {
    open: {
      true: {
        backgroundColor: '#0D47A133',
        paddingTop: '10px',
        paddingBottom: '10px',
        borderRadius: '12px',
        transition: 'all ease-out 100ms',
      },
    },
  },
})

export const ContainerIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '11px',

  variants: {
    open: {
      true: {
        color: '#0D47A1',
      },
    },
  },
})

export const ContainerIconCollapse = styled('li', {
  position: 'relative',
  height: '48px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '47px',
  padding: '0 27px',
  transition: 'background ease-out 150ms',
  borderRadius: '12px',
  cursor: 'pointer',
 
  variants: {
    showLinkCollapse: {
      true: {
        backgroundColor: '#0D47A133',
      },
      false: {
        background: 'transparent'
      }
    }
  },

  svg: {
    width: '20px',
    height: '20px',
  },

  '&:hover': {
    backgroundColor: '#0D47A133',
    borderRadius: '12px',
  },
})

export const ContainerLinkCollapse = styled('div', {
  position: 'absolute',
  width: 200,
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  right: '-205px',
  padding: '0',
  boxSizing: 'border-box',
  backgroundColor: "#fff",
  boxShadow: 'rgba(0, 0, 0, 0.12) 0px 3px 6px -4px',
  borderRadius: '6px',

  variants: {
    showLinkCollapse: {
      true: {
        display: 'block'
      },
      false: {
        display: 'none'
      }
    }
  },

  a: {
    display: 'block',
    position: 'relative',
    color: '$grayRiver600',
    textDecoration: 'none',
    fontSize: '$md',
    padding: '10px 15px',
    transition: 'background 100ms',
  
    '&:hover': {
      backgroundColor: '#0D47A133',

    },
  }
})


export const SectionTitle = styled('p', {
  fontSize: '$xs',
  fontWeight: '$semiBold',
  color: '$grayRiver200',
  margin: 0,
  marginBottom: '15px',
  padding: '0 19px',
  textTransform: 'uppercase',
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
      },
    },
  },

  a: {
    position: 'relative',
    color: '$grayRiver600',
    textDecoration: 'none',

    div: {
      position: 'absolute',
      left: '-20px',
      top: '0%',
      // transform: 'translateY(-50%)',
      width: '12px',
      height: '10px',
      borderLeft: '2px solid #CFDAEC',
      borderBottom: '2px solid #CFDAEC',
      borderRadius: '0 0 0 11px',
    },

    '&:hover': {
      color: '$blue800',
    },
  },
})

export const ChildBorder = styled('div', {
  position: 'absolute',
  width: '100%',
  height: 'calc(100% - 18px)',
  top: 0,
  left: 0,
  borderLeft: '2px solid #CFDAEC',
})
