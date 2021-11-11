import React from "react";
import {
  ContenedorHero,
  ImagenHero,
  InformacionHero,
  Imagen,
  InformacionDev,
  InteresDev,
  Svg
} from "../styles/hero.style.js";
import { Contenedor, BackgroundColor } from "../styles/utilidades.style.js";

function Hero() {
  return (
    <React.Fragment>
      <BackgroundColor backgroundColor="#0f0e17">
        <Contenedor>
          <ContenedorHero>
            <InformacionHero>
              <InformacionDev>¡Hi everyone!</InformacionDev>
              <InformacionDev>I'm Cristian D. Guzmán</InformacionDev>
              <InteresDev>
                I'm a Developer who loves to implement designs that inspire and engage people.
              </InteresDev>
                <Svg cursor="pointer" onClick={ _ => window.location.href = ('#main')} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" className="svg-inline--fa fa-arrow-down fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"/></Svg>
            </InformacionHero>
            <ImagenHero>
              <Imagen
                src={
                  "https://res.cloudinary.com/workshop-principe/image/upload/v1636241451/M%C3%AD/Captura_fejcjt.png"
                }
              ></Imagen>
            </ImagenHero>
          </ContenedorHero>
        </Contenedor>
      </BackgroundColor>
    </React.Fragment>
  );
}

export default Hero;
