import { fontWeights } from "@cdt-ui/tokens";
import { styled } from "../../styles";

export const Container = styled('div',{
    width: '100%',
    height: '76px',
    backgroundColor: "#fff",
    fontFamily: '$default',
    padding: '$md',
})

export const ContainerTitle = styled('div',{
    h1: {
        fontSize: '$2xl',
        fontWeight: '$regular'
    }
})