import React from 'react'
import {Navegacion, BarraIzquierda, BarraDerecha, Link, BtnDescargar} from '../styles/header.style.js';
import {BackBlack, Contenedor} from '../styles/utilidades.style.js'

const Header = () => {
    return (
        <>
        <BackBlack> 
            <Contenedor> 
                <Navegacion>
                    <BarraIzquierda>
                        <Link>Logo</Link>
                        <Link>Hola</Link>
                        <Link>Proyectos</Link>
                        <Link>Testimonios</Link>
                        <Link>Contacto</Link>
                    </BarraIzquierda>
                    <BarraDerecha>
                        <BtnDescargar>Descargar curriculum</BtnDescargar>
                    </BarraDerecha>
                </Navegacion>
            </Contenedor>
        </BackBlack>
        </>
    )
}

export default Header

