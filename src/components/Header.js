import React from 'react'
import {Navegacion, BarraIzquierda, BarraDerecha, Link, BtnDescargar} from '../styles/header.style.js';
import {BackgroundColor, Contenedor} from '../styles/utilidades.style.js'

const Header = () => {
    return (
        <React.Fragment>
            <BackgroundColor backgroundColor="#0f0e17">
            <Contenedor> 
                <Navegacion>
                    <BarraIzquierda>
                        <Link href="#">Cristian Guzman</Link>
                        <Link>Hi</Link>
                        <Link>Projects</Link>
                        <Link>Testimoniums</Link>
                        <Link>Contact</Link>
                    </BarraIzquierda>
                    <BarraDerecha>
                        <BtnDescargar>Download CV</BtnDescargar>
                    </BarraDerecha>
                </Navegacion>
            </Contenedor>
        </BackgroundColor>
        </React.Fragment>
    )
}

export default Header

