import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { animated, useTrail } from 'react-spring';


function Contact(props) {
    const [toggle, set] = useState(false);

    useEffect(() => {
        (!props.first || !props.firstClicked) ? set(false) :  set(true);
    }, []);

    const backimg = "./img/title-background/contact-title.jpg"

    const backHeaderStyle = {
        backgroundImage: "url(" + backimg + ")",
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        filter: 'blur(3px) grayscale(.3)',
        top: 0,
        left: 0,
    };

    return (
        <div id="section-contact">
            <div className="title-container">
            {/* <div className="back-img-contact style-bk-img"></div> */}
            <div className="" style={backHeaderStyle}></div>
                <div className="txt-wrapper">
                    <h1 className="title-section">Contacto</h1>
                    <p id="title-section-text">Please use the next form to get in touch, or send a direct e-mail or phone call.</p>
                </div>
            </div>
            {
            (!toggle) ? 
            (<FormEffectOne/>) :
            (<FormEffectTwo/>)}
            
        </div>
    );
}

export default Contact;



function FormEffectOne() {
    const [displayIn, setDisplayIn] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setDisplayIn(false)
        }, 800);
    }, [])    

    const columnEffect = useTrail(1, {    ////handles fade in effect on school projects
        opacity: displayIn ? 0 : 1,
        transform: displayIn ? 'translateY(20%)' : 'translateY(0)',
        from: {transform: 'translateY(20%)'},         
    });

    return(
        <div>
            {columnEffect.map((props) => (
                <animated.div
                    key={0}
                    style={props}
                    className=""
                    id="contact-container"
                >
                    <Form name="contact" method="POST" data-netlify="true">
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
                            Submit
                        </Button>
                    </Form>
                    <div id='right-side-form' className="rightSide">  
                        <div id="right-info"> 
                            <div><FontAwesomeIcon icon={faMapMarker} />   Guadalajara, Jal. | Mx</div>
                            <div><FontAwesomeIcon icon={faPhone} />   33 31 17 85 57</div>
                            <div><FontAwesomeIcon icon={faEnvelope} />   orlando.gonzalez.mtz@gmail.com</div>
                            <hr></hr>                   
                            <div id="social-on-contact" className="text-center">
                                <a href={"https://github.com/OGlezP"} target="_blank">
                                    <FontAwesomeIcon icon={faGithub}/>
                                </a>
                                <a href={"https://www.linkedin.com/in/orlando-gonzalez-62762218b/"} target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn}/>
                                </a>
                                <a href={"https://www.instagram.com/oglezp/"} target="_blank">
                                    <FontAwesomeIcon icon={faInstagram}/>
                                </a>
                                <a href={"https://www.facebook.com/OGlezP"} target="_blank">
                                    <FontAwesomeIcon icon={faFacebook}/>
                                </a>
                            </div> 

                        </div>
                    </div>    
                </animated.div>
            ))}
        </div>
    );
}




function FormEffectTwo() {
    const columnEffect = useTrail(1, {    ////handles fade in effect on school projects
        opacity: 1,
        from: {opacity: 0},         
    });

    return(
        <div>
            {columnEffect.map((props) => (
                <animated.div
                    key={0}
                    style={props}
                    className="container"
                    id="contact-container"
                >
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
                </animated.div>
            ))}
        </div>
    );
}
