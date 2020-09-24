import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Home(props) {
    console.log('home', props.first)
    return(
        <Row id="row-cont-home" className="no-gutters" >
            <div className="txt-cont">
                <h1 className={!props.first ? "logo appear" : "logo"}>
                    <span id="line-1">OG</span>
                    <span id="line-2">LEZ.</span>
                </h1>
                <p className={!props.first ? "p-0 info-txt fade-in-txt" : "p-0 info-txt"}>
                    Concert photographer and 
                    freelance front-end web developer, 
                    based on Guadalajara, Jal. Mexico.
                </p>
            </div>

            <div id="social-net">
                <h1>Social networks</h1>
                <Row className='social-icons m-0'>
                    <Col sm='4' className="col-icon">
                        <FontAwesomeIcon icon={faFacebook}/>
                    </Col>
                    <Col sm='4'  className="col-icon">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </Col>
                    <Col sm='4' className="col-icon">
                        <FontAwesomeIcon icon={faGithub}/>
                    </Col>
                </Row>
            </div>  
            <div className="rombo-scroll"></div>   
        </Row>   
    );
}

export default Home;