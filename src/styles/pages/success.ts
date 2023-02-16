import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    marginTop: '3rem',
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',

    fontSize: '$lg',
    color: '$green500',

    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },
})
export const ImageContainer = styled('div', {
  width: '100%',
  marginTop: '6.5rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  div: {
    borderRadius: 999,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '150%',
    height: 120,
    boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
    marginLeft: '-3rem',
    img: {
      objectFit: 'cover',
    },

    '&:first-child': {
      marginLeft: 0,
    },
  },
})
