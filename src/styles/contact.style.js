import styled from "styled-components";

export const Form = styled.form`
    background-color: ${props => props.backgroundColor};
    position: relative;
    left: 2rem;
    width: 80vw;
`;

export const FormContenedor = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.4rem 2rem;
`

export const Name = styled.input`
    padding: 1.5rem;
    font-weight: 600;
    font-size: 1.4rem;
    margin-bottom: 1rem;
`
export const Email = styled.input`
    padding: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    font-size: 1.4rem;
`
export const Message = styled.textarea`
    resize: none;
    padding: 1.5rem;
    min-height: 9rem;
    font-weight: 600;
    font-size: 1.4rem;
    margin-bottom: 1rem;
`