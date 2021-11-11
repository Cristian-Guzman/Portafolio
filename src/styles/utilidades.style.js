import styled from "styled-components"

export const Contenedor = styled.div`
    max-width: 120rem;
    width: 95%;
    margin: 0 auto; 
`;

export const Titulo = styled.h2`
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    color: ${props => props.color};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    text-align: ${props => props.align};
`

export const SubTitulo = styled.h4`
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    color: ${props => props.color};
    text-align: ${props => props.textAlign};
`

export const BackgroundColor = styled.div`
    background-color: ${props => props.backgroundColor};
    padding: ${props => props.padding};
`

export const Button = styled.button`
    border: ${props => props.border};
    padding: ${props => props.padding};
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    margin: ${props => props.margin};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    display: ${props => props.display};
    position: ${props => props.position};
    left: ${props => props.left};
    top: ${props => props.top};
    cursor: pointer;
`

export const ArrowRight = styled.svg`
    width: ${props => props.width};
    position: ${props => props.position};
    left: ${props => props.left};
    bottom: ${props => props.bottom};
    cursor: ${props => props.cursor};
    transition: all .4s linear;
    @media (min-width: 786px){
        width: ${props => props.hoverWidth};
    }
    &:hover {
        color: #fed9dab9;
    }
`