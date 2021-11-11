import styled from "styled-components";

export const MotMain = styled.h3`
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 2rem;
`
export const MotTwo = styled.h3`
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.5;
    margin: 0 0 2.5rem 0;
`

export const Project = styled.div`
    background-color: #0f0e17;
    padding: 5rem 4rem;
    display: flex;
    flex-direction: column;
    position: relative;
    top: -9rem;
    left: 3rem;
    @media (min-width: 600px) {
        top: -15rem;
    }
    @media (min-width: 900px) {
        top: -22rem;
    }
`

export const ProjectImage = styled.img`
    z-index: -1;
    width: 92vw;
    @media (min-width: 900px) {
        width: 80vw;
    }
`

export const Projects = styled.article`
    width: 80%;
`

export const ProductName = styled.h3`
    color: #fff;
    font-size: 2rem;
    margin: 0;
`

export const ProductParagrahp = styled.p`
    color: #a7a9be;
    font-size: 1.5rem;
    line-height: 1.4;
`