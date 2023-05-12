import { styled } from './styles'

const Button = styled('button', {
    fontFamily: '$default',
    backgroundColor: '$blueA100',
    borderRadius: '$md',
    padding: '$2xl',
    width: '$2xl'
})

export function App() {
    return (
        <Button>Olá mundo!</Button>
    )
}
