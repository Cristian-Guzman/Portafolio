import React from 'react'
import { BackgroundColor, Button, Contenedor, SubTitulo, Titulo, ArrowRight } from '../styles/utilidades.style'
import { SeccionServicios } from '../styles/services.style'

function Services() {
    return (
        <React.Fragment>
            <BackgroundColor backgroundColor="#f6907b">
            <Contenedor>
                <Titulo fontWeight="500" padding="2rem 0 0 0" fontSize="3rem">Services</Titulo>
                <SeccionServicios>
                    <SubTitulo fontSize="1.8rem" fontWeight="900">Design</SubTitulo>
                    <SubTitulo fontSize="1.8rem" fontWeight="500">User experience</SubTitulo>
                    <SubTitulo fontSize="1.8rem" fontWeight="500">User interface</SubTitulo>
                    <SubTitulo fontSize="1.8rem" fontWeight="500">Web applications</SubTitulo>
                        <Button backgroundColor='#0f0e17' color="#ff8906" fontWeight="500" left="0" position="relative" display="flex" fontSize="1.5rem" border="1px solid #0f0e17" padding="1.5rem 6rem">See the services of design<ArrowRight width="2rem" position="relative" left="1rem" bottom="2px" color= '#ff8906' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" /></ArrowRight></Button>
                </SeccionServicios>
                <SeccionServicios>
                    <SubTitulo fontSize="1.8rem" fontWeight="900">Development</SubTitulo>
                    <SubTitulo fontSize="1.8rem" fontWeight="500">Web sites</SubTitulo>
                    <SubTitulo fontSize="1.8rem" fontWeight="500">Progressive web applications</SubTitulo>
                        <Button backgroundColor='#0f0e17' color="#ff8906" fontWeight="500" left="0" position="relative" display="flex" fontSize="1.5rem" border="1px solid #0f0e17" padding="1.5rem 4rem">See the services of development<ArrowRight width="2rem" position="relative" left="1rem" bottom="3px" color= '#ff8906' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" /></ArrowRight></Button>
                </SeccionServicios>
                <SeccionServicios>
                    <SubTitulo fontSize="1.8rem" fontWeight="900">Brand</SubTitulo>
                    <SubTitulo fontSize="1.8rem" fontWeight="500">Identity of the brand</SubTitulo>
                    <SubTitulo fontSize="1.8rem" fontWeight="500">Strategy of the brand</SubTitulo>
                        <Button backgroundColor='#0f0e17' color="#ff8906" fontWeight="500" left="0" position="relative" display="flex" fontSize="1.5rem" border="1px solid #0f0e17" padding="1.5rem 6rem">See the services of brand<ArrowRight width="2rem" position="relative" left="1rem" bottom="3px" color= '#ff8906' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" /></ArrowRight></Button>
                </SeccionServicios>
            </Contenedor>
            </BackgroundColor>
        </React.Fragment>
    )
}

export default Services
