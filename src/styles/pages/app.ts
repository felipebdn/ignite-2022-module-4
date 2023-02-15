import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: '1180px',
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})
export const BagContainer = styled('div', {
  padding: '0.75rem',
  background: '$gray800',
  borderRadius: 6,
  height: 'fit-content',
  lineHeight: 0,
  position: 'relative',

  color: '$gray-icon',
  variants: {
    isItem: {
      true: {
        color: '$gray300',
      },
    },
  },

  span: {
    position: 'absolute',
    width: 24,
    height: 24,
    background: '$green500',
    borderRadius: 999,
  },
})
