import React, {useEffect, useState} from "react";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { animated, useTrail } from 'react-spring';

function ColsInProjects(props) {
    const [toggle, setToggle] = useState(true);
    // const delay = ms => new Promise(res => setTimeout(res, ms));

    function hoverEffect(e) { /*hover scale effect on column img*/
        let element = e.target.nextSibling;
        let card = element.querySelector('.img img');
        card.classList.toggle('hover-image');
    }

    useEffect(() => {
        setTimeout(() => {
            setToggle(false)
        }, 800);
    }, [])    

    const columnEffect = useTrail(props.projects.length, {    ////handles fade in effect on school projects
        opacity: toggle ? 0 : 1,
        transform: toggle ? 'translateY(-15%)' : 'translateY(0)',
        from: {transform: 'translateY(-15%)'},         
    });

    return (
        <Row className={ "justify-content-md-center no-gutters"}>         
            {columnEffect.map((prop, index) => (
                <animated.div
                    key={props.projects[index].id}
                    style={prop}
                    className="columna col-md text-center"
                >
                <a className='hover-layer' 
                    onMouseOver={hoverEffect} 
                    onMouseLeave={hoverEffect} 
                    href={props.projects[index].link}
                    target="_blank">
                </a>
                <div className="project-info">
                    <div className="img">
                        <img src={props.projects[index].src} alt=""></img>
                    </div>
                    <div className="project-web-info">
                        <div>
                            <FontAwesomeIcon icon={faGlobe } > </FontAwesomeIcon>
                            <span> </span> {props.projects[index].title}
                        </div>
                        <hr></hr>
                        <div>
                            <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                            <span> </span> {props.projects[index].web_techonologies}
                        </div>
                    </div>
                </div>   
                </animated.div>
            ))}
        </Row>
    );
}


export default ColsInProjects;

