import React from "react";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { animated, useTrail } from 'react-spring';

function ColsInProjectsFixed(props) {
  

    function hoverEffect(e) { /*hover scale effect on column img*/
        let element = e.target.nextSibling;
        let card = element.querySelector('.img img');
        card.classList.toggle('hover-image');
    }

    const columnEffect = useTrail(props.projects.length, {    ////handles fade in effect on school projects
        opacity: 1,
        transform: 'translateY(0)',
        from: {opacity: 0},         
    });

    return (
        <Row className={ "justify-content-md-center no-gutters"}>         
            {columnEffect.map((prop, index) => (
                <animated.div
                    key={props.projects[index].id}
                    style={prop}
                    className="columna col-md text-center"
                >
                    <div className='hover-layer' onMouseOver={hoverEffect} onMouseLeave={hoverEffect}></div>
                <div className="project-info">
                    <div className="img">
                        <img src={props.projects[index].src} alt=""></img>
                    </div>
                    <div className="project-web">
                        <FontAwesomeIcon icon={faGlobe } > </FontAwesomeIcon>a
                        <span> </span> {props.projects[index].title}
                    </div>
                    <div className="project-tech">
                        <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                        <span> </span> {props.projects[index].web_techonologies}
                    </div>
                    
                </div>   
                </animated.div>
                ))}
        </Row>
    );
}


export default ColsInProjectsFixed;
