import styled from "styled-components";

export const ContenedorHero = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 2rem;
    height: 35rem;
    align-items: center;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column-reverse;
        padding-top: 20rem;
        padding-bottom: 2rem;
    }
`

export const InformacionHero = styled.section`
    display: flex;
    flex-direction: column;
`
export const InformacionDev = styled.h1`
    font-size: 3.5rem;
    color: #fff;
`

export const InteresDev = styled.h3`
    color: #ffffff71;
    font-size: 2rem;
`

export const ImagenHero = styled.section`
    width: 100%;
    text-align: center;
    @media (max-width: 768px) {
        margin: 0;
    }
`

export const Imagen = styled.img`
    width: 32rem;
    margin-left: 8rem;
    border-radius: 50%;
    @media (max-width: 768px) {
        margin: 0;
        width: 27rem;
    }
`

export const Svg = styled.svg`
    width: 4rem;
    color: #ff8906;
    padding-bottom: 2rem;
    cursor: ${props => props.cursor || 'context-menu'};
`