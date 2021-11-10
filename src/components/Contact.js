import React from 'react'
import { Email, Form, FormContenedor, Message, Name } from '../styles/contact.style'
import { Titulo, SubTitulo, BackgroundColor, Button } from '../styles/utilidades.style'

function Contact() {
    return (
        <React.Fragment>
            <BackgroundColor backgroundColor="#f6907b" padding="4rem 0">
                <Form id="contact" action="https://formspree.io/f/xjvjqdlr" method="POST" backgroundColor="#0f0e17">
                    <FormContenedor>
                    <Titulo fontSize="2rem" color="#fff" margin="1rem 0 0 0">Contact</Titulo>
                    <SubTitulo fontSize="1.4rem" color="#a7a9be">If you´re interested in work with me in your next project, don't hesitate to reach out to me..</SubTitulo>
                    <Name required type="text" name="name" placeholder="Your name"/>
                    <Email required type="email" email="email" placeholder="Your email"/>
                    <Message required name="message" placeholder="Your message"/>
                        <Button type="submit" fontWeight="900" fontSize="1.4rem" padding="2rem 4rem" backgroundColor="#ff8906" color="#fed9da">Send Message</Button>
                    </FormContenedor>
                </Form>
            </BackgroundColor>
        </React.Fragment>
    )
}

export default Contact
