import React from "react";
import {
  ContenedorHero,
  ImagenHero,
  InformacionHero,
  Imagen,
  InformacionDev,
  InteresDev,
} from "../styles/hero.style.js";
import { Contenedor, BackBlack } from "../styles/utilidades.style.js";

function Hero() {
  return (
    <>
      <BackBlack>
        <Contenedor>
          <ContenedorHero>
            <InformacionHero>
              <InformacionDev>¡Hola a todos!</InformacionDev>
              <InformacionDev>Soy Cristian D. Guzmán</InformacionDev>
              <InteresDev>
                Developer que le encanta implementar diseños que inspiran y
                atraen a la gente
              </InteresDev>
            </InformacionHero>
            <ImagenHero>
              <Imagen
                src={
                  "https://res.cloudinary.com/workshop-principe/image/upload/v1636163650/M%C3%AD/potfolio_yo_fflmlc.jpg"
                }
              ></Imagen>
            </ImagenHero>
          </ContenedorHero>
        </Contenedor>
      </BackBlack>
    </>
  );
}

export default Hero;
