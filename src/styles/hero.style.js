import styled from "styled-components";

export const ContenedorHero = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 2rem;
    height: 45rem;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column-reverse;
    }
`

export const InformacionHero = styled.section`
    display: flex;
    flex-direction: column;
    /* margin-left: 8rem; */
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
    margin-left: 10rem;
    @media (max-width: 768px) {
        margin: 0;
        grid-row: 1;
    }
`

export const Imagen = styled.img`
    width: 32rem;
    /* border-radius: 100%; */
`