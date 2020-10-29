import React from 'react';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Home(props) {
    console.log('home', props.first)
    const urlImgBack = "./img/oglez-background.jpg";
    
    const styleHomeBack = {
        backgroundImage: "url(" + urlImgBack + ")",
    }

    return(
        <Row id="row-cont-home" style={styleHomeBack} className="no-gutters" >
            <div className="txt-cont">
                <h1 className={!props.first ? "logo appear" : "logo"}>
                    <span id="line-1">OGLEZ.</span>
                </h1>
                <p className={!props.first ? "p-0 info-txt fade-in-txt" : "p-0 info-txt"}>
                    Freelance front-end and freelance concert photographer,
                    based on Guadalajara, Jal. Mexico.
                </p>
            </div>

            <div id="social-net">
                <h1>Social networks</h1>
                <Row className='social-icons m-0'>
                    <Col  className="col-icon">
                        <a href={"https://github.com/OGlezP"} target="_blank">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </Col>
                    <Col  className="col-icon">
                        <a href={"https://www.linkedin.com/in/orlando-gonzalez-62762218b/"} target="_blank">
                            <FontAwesomeIcon icon={faLinkedinIn}/>
                        </a>
                        
                    </Col>
                    <Col  className="col-icon">
                        <a href={"https://www.instagram.com/oglezp/"} target="_blank">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                    </Col>
                    <Col  className="col-icon">
                        <a href={"https://www.facebook.com/OGlezP"} target="_blank">
                            <FontAwesomeIcon icon={faFacebook}/>
                        </a>
                    </Col>
                </Row>
            </div>  
            <div className="rombo-scroll"></div>   
        </Row>   
    );
}

export default Home;