import React, { Component } from 'react';
import Header from '../components/Header.js';
import Hero from '../components/Hero'
import Main from '../components/Main.js';
import Services from '../components/Services.js';
import Contact from '../components/Contact'
import Footer from '../components/Footer.js';

export default class Container extends Component {
    render() {
        return (
            <>
                <Header />
                <Hero />
                <Main />
                <Services />
                <Contact/>
                <Footer/>
            </>
        )
    }
}
