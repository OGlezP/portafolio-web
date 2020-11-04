import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import { animated, useTrail } from 'react-spring';
// import NetlifyForm from 'react-ssg-netlify-forms';
import NetlifyForm from './components/NetlifyForm';


function Contact(props) {
    const [toggle, set] = useState(false);
    const [displayIn, setDisplayIn] = useState(true);
    const [alertMessage, setAlertMessage] = useState([]);
    const [alertType, setAlertType] = useState('danger');
    const [show, setShow] = useState(true);
    const [headingMessage, setHeadingMessage] = useState('');
    let content = [];

    useEffect(() => {
        (!props.first || !props.firstClicked) ? set(false) :  set(true);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setDisplayIn(false)
        }, 900);
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

    const preSubmit = async () => {
        if (formValues.email == "") {
            content.push("Please type an email, it wont be shared to anyone");
            setAlertType('danger');
        }
        if (formValues.name == "") {
            content.push("Please type name");
        }
        if (formValues.message == "") {
            content.push("Please write down a message");
        }
        if(content.length != 0) {
            setHeadingMessage("Ups! There is an error, please provide the following info");
            setAlertMessage(content);

            setTimeout(() => {
                setShow(false);
            }, 300);

            return false;
        } else {
            await (new Promise(resolve => setTimeout(resolve, 1000)));
            return true;
        }
    }

    // Post-Submit Navigate
    const postSubmit = () => {
        // navigate('/hooray')
        setHeadingMessage("Everything is OK :), thank you!");
        setAlertMessage(["Message has been sent"]);
        setAlertType('success');

        setTimeout(() => {
            setShow(false);
            setFormValues({
                email: '',
                name: '',
                message: ''
            });
        }, 300);

        document.forms[0].reset();
        document.forms[1].reset();
    }

    // Simple controlled form setup
    const handleChange = e => setFormValues({ ...formValues, [e.target.name]: e.target.value });

    const [formValues, setFormValues] = useState({
        email: '',
        name: '',
        message: ''
    })

    const AlertMessage = () => {
        if (!show) {
            return (
                <Alert className={"alertt-message"} variant={alertType} onClose={() => setShow(true)} dismissible>
                    <Alert.Heading>{headingMessage}</Alert.Heading>
                    <hr></hr>
                    <ul>
                        {alertMessage.map(([], index) => (
                            <li key={index}>{alertMessage[index]}</li>
                        ))}
                    </ul>
                </Alert>
            );
        } else {
            return (
                <div></div>
            )
        }
    }

    const columnEffect = useTrail(1, {    ////handles fade in effect on school projects
        opacity: displayIn ? 0 : 1,
        transform: displayIn ? 'translateY(20%)' : 'translateY(0)',
        from: {transform: 'translateY(20%)'},         
    });

    const columnEffect2 = useTrail(1, {    ////handles fade in effect on school projects
        opacity: 1,
        from: {opacity: 0},         
    });

    return (
        <div id="section-contact">
            <div className="title-container">
            <div className="" style={backHeaderStyle}></div>
                <div className="txt-wrapper">
                    <h1 className="title-section">Contacto</h1>
                    <p id="title-section-text">Please use the next form to get in touch, or send a direct e-mail or phone call.</p>
                </div>
            </div>
            <div>
                {(!toggle ? columnEffect : columnEffect2).map((props) => (
                    <animated.div
                        key={0}
                        style={props}
                        className=""
                        id="contact-container"
                    >
                        <AlertMessage ></AlertMessage>
                        <NetlifyForm formName="contact" formValues={formValues} preSubmit={preSubmit} postSubmit={postSubmit} >
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" name="email" value={formValues.email} onChange={handleChange}placeholder="E-mail"/>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" name="name" value={formValues.name} onChange={handleChange} placeholder="Name"/>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows="20" name="message" value={formValues.message} onChange={handleChange} placeholder="message"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </NetlifyForm>
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
                                    <a href={"https://codepen.io/oglezp"} target="_blank">
                                        <FontAwesomeIcon icon={faCodepen}/>
                                    </a>
                                </div> 

                            </div>
                        </div>    
                    </animated.div>
                ))}
            </div>
        </div>
    );
}

export default Contact;