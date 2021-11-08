import React from 'react'
import { MotMain, MotTwo, Project, Projects, ProductParagrahp, ProductName, ProjectImage} from '../styles/main.style'
import { BackgroundColor, Contenedor, Button, ArrowRight } from '../styles/utilidades.style'

function Main() {
    // const ProyectsInfo = [
    //     {
    //         title: "NIKO",
    //         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem iste error asperiores repudiandae! Omnis iure dicta id provident dolorem ipsa."
    //     }
    // ]
    return (
        <React.Fragment>
            <BackgroundColor backgroundColor="#fff">
            <Contenedor>
                <MotMain>It looks like magic, but it works with code.</MotMain>
                <MotTwo>On my road to being a Frontend Developer, i have the privilege to work in projects that helped me to become the profesional that i am now.</MotTwo>
                    <Projects>
                            <ProjectImage src={'https://res.cloudinary.com/workshop-principe/image/upload/v1636324970/M%C3%AD/banner-block-master_asm6mh.png'} />
                        <Project>
                            <ProductName>Block Master</ProductName>
                            <ProductParagrahp>Block Master is one of the most powerful webs to find our favourite movie.</ProductParagrahp>
                            <Button fontSize="1.5rem" border="1px solid #ff8906" padding="1rem 2rem" backgroundColor="transparent" color="#ff8906">
                                See the code
                            </Button>
                            <Button fontSize="1.5rem" border="1px solid #ff8906" padding="1rem 2rem" backgroundColor="#ff8906" color="#fff" margin="1.5rem 0 0 0">
                                See the page deployment
                            </Button>
                        </Project>
                            <ProjectImage src={'https://res.cloudinary.com/workshop-principe/image/upload/v1636324970/M%C3%AD/banner-block-master_asm6mh.png'} />
                        <Project>
                            <ProductName>Block Master</ProductName>
                            <ProductParagrahp>Block Master is one of the most powerful webs to find our favourite movie.</ProductParagrahp>
                            <Button fontSize="1.5rem" border="1px solid #ff8906" padding="1rem 2rem" backgroundColor="transparent" color="#ff8906">
                                See the code
                            </Button>
                            <Button fontSize="1.5rem" border="1px solid #ff8906" padding="1rem 2rem" backgroundColor="#ff8906" color="#fff" margin="1.5rem 0 0 0">
                                See the page deployment
                            </Button>
                        </Project>
                            <ProjectImage src={'https://res.cloudinary.com/workshop-principe/image/upload/v1636324970/M%C3%AD/banner-block-master_asm6mh.png'} />
                        <Project>
                            <ProductName>Block Master</ProductName>
                            <ProductParagrahp>Block Master is one of the most powerful webs to find our favourite movie.</ProductParagrahp>
                            <Button fontSize="1.5rem" border="1px solid #ff8906" padding="1rem 2rem" backgroundColor="transparent" color="#ff8906">
                                See the code
                            </Button>
                            <Button fontSize="1.5rem" border="1px solid #ff8906" padding="1rem 2rem" backgroundColor="#ff8906" color="#fff" margin="1.5rem 0 0 0">
                                See the page deployment
                            </Button>
                        </Project>
                    </Projects>
                    <Button fontWeight="500" top="-4rem" left="3rem" position="relative" display="flex" fontSize="1.5rem" border="1px solid #0f0e17" backgroundColor="transparent" padding="1.4rem 8rem">See more projects <ArrowRight position="relative" left="1rem" bottom="2px" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /></ArrowRight></Button>
            </Contenedor>
            </BackgroundColor>
        </React.Fragment>
    )
}

export default Main
