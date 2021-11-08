import React, { Component } from 'react';
import Header from '../components/Header.js';
import Hero from '../components/Hero'
import Main from '../components/Main.js';
import Services from '../components/Services.js';
import Testimonium from '../components/Testimonium.js';

export default class Container extends Component {
    render() {
        return (
            <>
                <Header />
                <Hero />
                <Main />
                <Services />
                <Testimonium />
            </>
        )
    }
}
