import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { animated, useTrail } from 'react-spring';

function ColsInProjects(props) {
    const _URL_freelancer = "/freelance-projects.json";
    const [freelanceError, setFreelanceError] = useState(null);
    const [freelanceProjects, setFreelanceProjects] = useState([]);
    const [toggleDos, setToggleDos] = useState(true);

    function hoverEffect(e) { /*hover scale effect on column img*/
        let element = e.target.nextSibling;
        let card = element.querySelector('.img img');
        card.classList.toggle('hover-image');
    }

    useEffect(() => {
        fetch(_URL_freelancer)
        .then(res => res.json())
        .then(
            (answer) => {
                setFreelanceProjects(answer.items);
                console.log("asdfas", freelanceProjects);

            },
            (possible_error) => {
                setFreelanceError(possible_error);
                console.warn(freelanceError);
            }
        );

        setTimeout(() => {
            setToggleDos(false);
        }, 1000);
    }, []); 

    const columnEffect = useTrail(freelanceProjects.length, {    ////handles fade in effect on school projects
        opacity: toggleDos ? 0 : 1,
        transition: "opacity .4s",
        transform: toggleDos ? 'translateY(-20%)' : 'translateY(0)',
        from: {transform: 'translateY(-20%)'},         
    });


    return (

            <Row className={ "justify-content-md-center no-gutters"}>         
                    { 
                         columnEffect.map((props, index) => (
                            <animated.div
                                key={freelanceProjects[index].id}
                                style={props}
                                className="columna col-md text-center"
                            >
                                <div className='hover-layer' onMouseOver={hoverEffect} onMouseLeave={hoverEffect}></div>
                            <div className="project-info">
                                <div className="img">
                                    <img src={freelanceProjects[index].src} alt=""></img>
                                </div>
                                <div className="project-web">
                                    <FontAwesomeIcon icon={faGlobe } > </FontAwesomeIcon>a
                                    <span> </span> {freelanceProjects[index].title}
                                </div>
                                <div className="project-tech">
                                    <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                                    <span> </span> {freelanceProjects[index].web_techonologies}
                                </div>
                                
                            </div>   
                            </animated.div>
                         )) }
                </Row>

    );
}


export default ColsInProjects;

