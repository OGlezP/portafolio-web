import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/container';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Contact(props) {
    let thisURL = props.currentURL;  
    let prevURL = props.previousURL;  
    const [toggle, set] = useState(false);

    console.log("togle first", toggle);

    useEffect(() => {
        if ((prevURL === thisURL && !props.first) || !props.firstClicked) {
            set(true);
        } else {
            setTimeout(() => {
                set(false);
            }, 500)
        }
    }, [prevURL, thisURL, props.first, props.firstClicked]);

    return (
        <div id="section-contact">
            <div className="title-container">
            <div className="back-img-contact style-bk-img"></div>
                <div className="txt-wrapper">
                    <h1 className="title-section">Contacto</h1>
                    <p id="title-section-text">Please use the next form to get in touch, or send a direct e-mail or phone call.</p>
                </div>
            </div>
            <Container className={toggle ? "hidden-contact-form" : ""} id="contact-container">
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="E-mail" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="Name" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows="20" placeholder="message"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Send
                    </Button>
                </Form>
                <div id='right-side-form' className="rightSide">  
                    <div id="right-info"> 
                        <div><FontAwesomeIcon icon={faMapMarker} />   Guadalajara, Jal. | Mx</div>
                        <div><FontAwesomeIcon icon={faPhone} />   33 31 17 85 57</div>
                        <div><FontAwesomeIcon icon={faEnvelope} />   orlando.gonzalez.mtz@gmail.com</div>
                        <hr></hr>                   
                        <div id="social-on-contact" className="text-center">
                            <FontAwesomeIcon icon={faFacebook} size='2x'/>
                            <FontAwesomeIcon icon={faInstagram} size='2x'/>
                            <FontAwesomeIcon icon={faGithub} size='2x'/>
                        </div> 
     
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Contact;