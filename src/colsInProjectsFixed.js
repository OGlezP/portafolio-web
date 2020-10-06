import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { animated, useTrail } from 'react-spring';
// import { Item } from "react-bootstrap/lib/Carousel";

function ColsInProjectsFixed(props) {
    // const url = "/school-projects.json";
    // const _URL_freelancer = "/freelance-projects.json";
useEffect(() => {
    console.log('props projjects', props.projects);
}, [])

   

    function hoverEffect(e) { /*hover scale effect on column img*/
        let element = e.target.nextSibling;
        let card = element.querySelector('.img img');
        card.classList.toggle('hover-image');
    }

    // const columnEffect = useTrail(props.projects.length, {    ////handles fade in effect on school projects
    //     opacity: 1,
    //     transform: 'translateY(0)',
    //     from: {transform: 'translateY(0)'},         
    // });


    return (

            <Row className={ "justify-content-md-center no-gutters"}>         
                    { 
                         props.projects.map(function (item, index) {
                            return(
                                <div
                                    key={item.id}
                                    // style={props}
                                    className="columna col-md text-center"
                                >
                                    <div className='hover-layer' onMouseOver={hoverEffect} onMouseLeave={hoverEffect}></div>
                                <div className="project-info">
                                    <div className="img">
                                        <img src={item.src} alt=""></img>
                                    </div>
                                    <div className="project-web">
                                        <FontAwesomeIcon icon={faGlobe } > </FontAwesomeIcon>
                                        <span> </span> {item.title}
                                    </div>
                                    <div className="project-tech">
                                        <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                                        <span> </span> {item.web_techonologies}
                                    </div>
                                    
                                </div>   
                                </div>
                        )} 
                            
                    ) }
                </Row>

    );
}


export default ColsInProjectsFixed;
