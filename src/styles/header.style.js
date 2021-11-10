import styled from 'styled-components';

export const Navegacion = styled.nav`
    display: flex;
    flex-direction: row;
    background-color: #0f0e17;
    gap: 3rem;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        padding-bottom: 4rem;
    }
    @media (max-width: 400px) {
        padding-bottom: 10rem;
        padding-top: 2rem;
    }
`
export const BarraIzquierda = styled.section`
    display: flex;
    gap: 5rem;
    @media (max-width: 768px) {
        display: none;
        flex-direction: column;
    }
    .on {
        color: #f25f4c;
    }
    .off {
        color: #fff;
    }
`
export const BarraDerecha = styled.div`

`
export const Link = styled.a`
    text-decoration: none;
    font-size: 2rem;
    color: ${props => props.color ||'#fff'};
    font-weight: ${props => props.fontWeight};
    cursor: pointer;
`
export const BtnDescargar = styled.button`
    padding: 2rem 4rem;
    background-color: #ff8906;
    color: #FFF;
    font-size: 1.5rem;
    margin-right: 10rem;
    cursor: pointer;
    border: none;
    transition: all .4s linear;
    &:hover {
        background-color: #ff8b06c0;
    }
    @media (max-width: 768px){
        margin: 0;
    }
    @media (max-width: 950px) {
        margin: 0;
    }
`
