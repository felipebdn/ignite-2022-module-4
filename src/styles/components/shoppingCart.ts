import { styled } from '..'
import * as Dialog from '@radix-ui/react-dialog'

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  height: '100vh',
  background: '$gray800',
  padding: '3rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

  top: 0,
  right: 0,

  h2: {
    fontWeight: 'bold',
    fontSize: '$lg',
    lineHeight: '160%',
    marginTop: '1.5rem',
  },

  main: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },

  footer: {
    div: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      h4: {
        fontSize: '$md',
        fontWeight: 'regular',
        lineHeight: '160%',
      },
      span: {
        fontSize: '$md',
        fontWeight: 'regular',
        lineHeight: '160%',
      },
      pre: {
        fontSize: '$xl',
        fontWeight: 'bold',
        lineHeight: '160%',
      },
    },
    button: {
      width: '100%',
      background: '$green500',
      borderRadius: 8,
      fontSize: '$md',
      fontWeight: 'bold',
      lineHeight: '160%',
      color: '$white',
      border: 'none',
      cursor: 'pointer',
      padding: '20px 0',
      marginTop: '3rem',

      '&:hover': {
        background: '$green300',
      },
    },
  },
})
export const Close = styled(Dialog.Close, {
  position: 'absolute',
  right: '1.5rem',
  top: '1.5rem',
  height: 'fit-content',
  lineHeight: 0,
  background: 'none',
  border: 'none',
  color: '$gray-icon',
  cursor: 'pointer',
})
export const Detail = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '1.5rem',

  div: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    gap: '1.25rem',

    div: {
      maxWidth: 100,
      maxHeigth: 100,
      background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
      borderRadius: 8,
    },

    main: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      margin: 'auto 0',

      h4: {
        fontSize: '$md',
        fontWeight: 400,
        lineHeight: '160%',
      },
      pre: {
        fontSize: '$md',
        fontWeight: 'bold',
        lineHeight: '160%',
      },
    },
    button: {
      fontSize: '$md',
      fontWeight: 700,
      lineHeight: '160%',
      color: '$green500',
      background: 'none',
      border: 'none',
      width: 'fit-content',
      cursor: 'pointer',

      '&:hover': {
        color: '$green300',
      },
    },
  },
  aside: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',

    pre: {
      fontSize: '$lg',
      fontWeight: 'bold',
    },

    svg: {
      cursor: 'pointer',
    },
  },
})
