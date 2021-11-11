import React, {useState} from 'react'
import {Navegacion, BarraIzquierda, BarraDerecha, Link, BtnDescargar} from '../styles/header.style.js';
import {BackgroundColor, Contenedor} from '../styles/utilidades.style.js'


const Header = () => {
    const [current, setCurrent] = useState(0);
    const links = [
     {name : "Hi", href: "#header"},
     {name: "Projects", href: "#main"},
     {name: "Contact", href: "#contact"}
    ];

    return (
        <React.Fragment>
            <BackgroundColor backgroundColor="#0f0e17">
                <Contenedor id="header">
                        <Navegacion>
                            <BarraIzquierda>
                                <Link cursor="context-menu" fontWeight="900">Cristian Guzman</Link>
                                {links.map((label, i) => (
                                    <Link
                                        href={label.href}
                                        key={label.name}
                                        className={current === i ? 'on' : 'off'}
                                        onClick={_ => setCurrent(i)}>
                                        {label.name}
                                    </Link>
                                ))}
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

