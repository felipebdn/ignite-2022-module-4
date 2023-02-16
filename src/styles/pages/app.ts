import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})
export const BagContainer = styled('button', {
  padding: '0.75rem',
  background: '$gray800',
  borderRadius: 6,
  height: 'fit-content',
  lineHeight: 0,
  position: 'relative',
  color: '$gray-icon',

  cursor: 'pointer',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    isItem: {
      true: {
        color: '$gray300',
      },
    },
  },

  span: {
    position: 'absolute',
    maxWidth: 30,
    maxHeight: 30,
    background: '$green500',
    borderRadius: 999,
    padding: '0.8rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    border: '3px solid $gray900',

    fontSize: '$sm',
    fontWeight: 'bold',
    lineHeight: '150%',

    color: '$white',

    transform: 'translate(calc(50% + 4px), calc(-50% - 4px))',
  },
})
