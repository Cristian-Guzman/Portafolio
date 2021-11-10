import React from 'react'
import { MotMain, MotTwo, Project, Projects, ProductParagrahp, ProductName, ProjectImage} from '../styles/main.style'
import { BackgroundColor, Contenedor, Button, ArrowRight } from '../styles/utilidades.style'

function Main() {
    function openCode(link){
        window.location.href = link;
    }
    return (
        <React.Fragment>
            <BackgroundColor backgroundColor="#fff">
            <Contenedor id="main">
                <MotMain>It looks like magic, but it works with code.</MotMain>
                <MotTwo>On my road to being a Frontend Developer, i have the privilege to work in projects that helped me to become the profesional that i am now.</MotTwo>
                    <Projects>
                            <ProjectImage src={'https://res.cloudinary.com/workshop-principe/image/upload/v1636499240/M%C3%AD/blockMaster_im9btj.png'} />
                        <Project>
                            <ProductName>Block Master</ProductName>
                            <ProductParagrahp>Block Master is one of the most powerful web to find our favourite movie.</ProductParagrahp>
                            <Button onClick={() => openCode("https://github.com/Cristian-Guzman/Block-Master")} fontSize="1.5rem" border="1px solid #ff8906" padding="1rem 2rem" backgroundColor="transparent" color="#ff8906">
                                See the code
                            </Button>
                            <Button onClick={() => openCode("https://cristian-guzman.github.io/Block-Master/")} fontSize="1.5rem" border="1px solid #ff8906" padding="1rem 2rem" backgroundColor="#ff8906" color="#fff" margin="1.5rem 0 0 0">
                                See the page deployment
                            </Button>
                        </Project> {/* .projectImage */}
                        <ProjectImage src={'https://res.cloudinary.com/workshop-principe/image/upload/v1636495298/M%C3%AD/calculadoraImc_uljhym.png'} />
                        <Project>
                            <ProductName>BMI Calculator</ProductName>
                            <ProductParagrahp>Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.</ProductParagrahp>
                            <Button onClick={() => openCode('https://github.com/Cristian-Guzman/Calculadora-IMC')} fontSize="1.5rem" border="1px solid #ff8906" padding="1rem 2rem" backgroundColor="transparent" color="#ff8906">
                                See the code
                            </Button>
                            <Button onClick={() => openCode("https://cristian-guzman.github.io/Calculadora-IMC/")} fontSize="1.5rem" border="1px solid #ff8906" padding="1rem 2rem" backgroundColor="#ff8906" color="#fff" margin="1.5rem 0 0 0">
                                See the page deployment
                            </Button>
                        </Project> {/* .projectImage */}
                        <ProjectImage src={'https://res.cloudinary.com/workshop-principe/image/upload/v1636495748/M%C3%AD/barberProject_liii9d.png'} />
                        <Project>
                            <ProductName>Beauty salon</ProductName>
                            <ProductParagrahp>Is an establishment that offers a variety of cosmetic treatments and cosmetic services for men and women.</ProductParagrahp>
                            <Button onClick={() => openCode("https://github.com/Cristian-Guzman/Barber-project")} fontSize="1.5rem" border="1px solid #ff8906" padding="1rem 2rem" backgroundColor="transparent" color="#ff8906">
                                See the code
                            </Button>
                            <Button onClick={() => openCode("https://cristian-guzman.github.io/Barber-project/")} fontSize="1.5rem" border="1px solid #ff8906" padding="1rem 2rem" backgroundColor="#ff8906" color="#fff" margin="1.5rem 0 0 0">
                                See the page deployment
                            </Button>
                        </Project> {/* .projectImage */}
                        <ProjectImage src={'https://res.cloudinary.com/workshop-principe/image/upload/v1636495652/M%C3%AD/conversorDivisas_uobepc.png'} />
                        <Project>
                            <ProductName>Currency conversor</ProductName>
                            <ProductParagrahp>Get visibility into up-to-date exchange rates before sending a payment overseas in pounds, euros, yuan, or any other currency.</ProductParagrahp>
                            <Button onClick={() => openCode("https://github.com/Cristian-Guzman/Conversor-de-divisas")} fontSize="1.5rem" border="1px solid #ff8906" padding="1rem 2rem" backgroundColor="transparent" color="#ff8906">
                                See the code
                            </Button>
                            <Button onClick={() => openCode("https://cristian-guzman.github.io/Conversor-de-divisas/")} fontSize="1.5rem" border="1px solid #ff8906" padding="1rem 2rem" backgroundColor="#ff8906" color="#fff" margin="1.5rem 0 0 0">
                                See the page deployment
                            </Button>
                        </Project> {/* .projectImage */}
                    </Projects>
                    <Button fontWeight="500" top="-4rem" left="3rem" position="relative" display="flex" fontSize="1.5rem" border="1px solid #0f0e17" backgroundColor="transparent" padding="1.4rem 8rem">See more projects <ArrowRight position="relative" left="1rem" bottom="2px" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /></ArrowRight></Button>
            </Contenedor>
            </BackgroundColor>
        </React.Fragment>
    )
}

export default Main
