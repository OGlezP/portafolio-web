import React, { useState, useEffect, useRef, useCallback } from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { animated, useTrail } from 'react-spring';


function Projects(props) {  
    let firstClickOnMenu =  props.clickedMenuProject;
    let thisURL = props.currentURL;  
    let prevURL = props.previousURL;  
    const url = "/school-projects.json";
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
    const delay = ms => new Promise(res => setTimeout(res, ms));

    async function eachImgDelay(worksArray) {
        for(var x= 0; x < worksArray.length; x ++) {
            worksArray[x].classList.remove('hidden');
            await delay(200);
        }
    }


    function imgAppearEffect(worksArray) {
        worksArray.forEach(img => { img.classList.add('hidden') });
        setTimeout(() => { eachImgDelay(worksArray) }, 800);
    }


    function hoverEffect(e) {
        let element = e.target.nextSibling;
        let card = element.querySelector('.img img');
        card.classList.toggle('hover-image');
    }


    const fetchData = useCallback(() => {
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                setItems(result.items);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                setError(error);
            }
         );   
    }, [url]);


    useEffect(() => {    //handles scroll to display school projects
        let itemsLoade = false;
        const handleScroll = () => {       
            if(!itemsLoade) {
                itemsLoade = true;
                fetchData();
            }
        }
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [fetchData]);


    useEffect(() => {  //handles fade in effect on freelance works
        let worksArray = Array.from(document.querySelectorAll('.columna'));
        if(worksArray) {
            if ((prevURL === thisURL && props.first) || !firstClickOnMenu) {
                imgAppearEffect(worksArray);
            } 
        }
     }, []);


    const trail = useTrail(items.length, {    ////handles fade in effect on school projects
        from: {opacity: 0},
        to: {opacity: 1, transition: '.3s'  }
    })


    return (
        <Container id="section" fluid={true} >
            <div className="title-container">
                <div className="back-img-projects style-bk-img"></div>
                <div className="txt-wrapper">
                    <h1 className="title-section">Portfolio</h1>
                    <p id="title-section-text">Here are some works as a freelance and some excersice at freecodecamp.org</p>
                </div>
            </div>
            <div className="projects-contenedor">
                <Row className="justify-content-md-center no-gutters">
                    <Column md='3' className="columna text-center">
                        <div className='hover-layer' onMouseOver={hoverEffect} onMouseLeave={hoverEffect}></div>
                        <div className="project-info">
                            <div className="img">
                                <img src="img/img-projects/cosmosonidos.png" alt=""></img>
                            </div>
                            <div className="project-web">
                                <FontAwesomeIcon icon={faGlobe } > </FontAwesomeIcon>
                                <span> </span> cosmosonidos.com
                            </div>
                            <div className="project-tech">
                                <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                                <span> </span> HTML5 + SASS + Js
                            </div>
                            
                        </div>
                    </Column>
                    <Column md='3' className="columna text-center">
                        <div className='hover-layer' onMouseOver={hoverEffect} onMouseLeave={hoverEffect}></div>
                        <div  className="project-info">
                            <div className="img">
                                <img src="img/img-projects/oglezp-portafolio.png" alt=""></img>
                            </div>
                            <div className="project-web">
                                <FontAwesomeIcon icon={faGlobe}> </FontAwesomeIcon>
                                <span> </span> cosmosonidos.com
                            </div>
                            <div className="project-tech">
                                <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                                <span> </span> HTML5 + SASS + jQuery
                            </div>
                        </div>
                    </Column>

                    <Column md='3' className="columna text-center">
                        <div className='hover-layer' onMouseOver={hoverEffect} onMouseLeave={hoverEffect}></div>
                        <div  className="project-info">
                            <div className="img">
                                <img src="img/img-projects/cosmosonidos.png" alt=""></img>
                            </div>
                            <div className="project-web">
                                <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                                <span> </span> cosmosonidos.com
                            </div>
                            <div className="project-tec">
                                <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                                <span> </span> WordPress (HTML + Css + PHP + Js)
                            </div>
                        </div>
                    </Column>
                </Row>
                <Container  className="text-center school-project-wrapper">
                <div>At FreeCodeCamp.org</div>
                <Row >
                    {trail.map((props, index) => {
                        return (
                            // <Column>
                                <animated.div
                                key={items[index].id}
                                style={props}
                                className="col-sm-3 box"
                                >
                                    <img src={items[index].src} alt={items[index].title}></img>
                                    <div>{items[index].title}</div>    
                                </animated.div>
                            // </Column>
                        )
                    })}
                </Row>
            </Container>
            </div>
            
        </Container>
    );
}

export default Projects;


    //const currentScrollY = window.scrollY;
    //console.log( 'prev', prevScrollY.current) 
    //console.log( 'curr', currentScrollY) 
    //console.log('goingg up', goingUp);
    //if (prevScrollY.current < currentScrollY && goingUp) {
    //         console.log('goingup has changed and is true now')
    //         setGoingUp(false);
    //         loadProjects();
    //         array = document.querySelectorAll('.school-project-wrapper')
    //         console.log(array);
    //     }
    //     if (prevScrollY.current > currentScrollY && !goingUp) {
    //         setGoingUp(true);
    //     }
    //     prevScrollY.current = currentScrollY;
    //     console.log('final console log');
    //
    // }