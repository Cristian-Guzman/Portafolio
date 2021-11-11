import styled from "styled-components";

export const SeccionServicios = styled.section`
    padding-bottom: 3rem;
`

export const SeccionDiv = styled.div`
    display: ${props => props.display};
    grid-template-columns: 1fr 1fr 1fr;
    align-items: end;
`