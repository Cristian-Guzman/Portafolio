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
    }
`
export const BarraIzquierda = styled.section`
    display: flex;
    gap: 5rem;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
export const BarraDerecha = styled.div`

`
export const Link = styled.a`
    text-decoration: none;
    font-size: 2rem;
    color: #FFF;
`
export const BtnDescargar = styled.button`
    padding: 2rem 4rem;
    background-color: #9c692f;
    color: #FFF;
`
