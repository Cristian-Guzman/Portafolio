import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './components/Hero.js';
import Container from './container/Container.js';
import styled, {createGlobalStyle} from 'styled-components';
// import "../public/normalize.css";

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    overflow-x: hidden;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Container />
    <Hero />
  </React.StrictMode>,
  document.getElementById('root')
);


