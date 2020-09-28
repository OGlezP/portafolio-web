import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { animated, useTrail } from 'react-spring';

function Projects(props) {  
    let thisURL = props.currentURL;  
    let prevURL = props.previousURL; 
    const url = "/school-projects.json";
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
    const [toggle, set] = useState(true);
    const delay = ms => new Promise(res => setTimeout(res, ms));

        // function imgAppearEffect(worksArray) {
    //     worksArray.forEach(img => { img.classList.add('hidden') });
    //     setTimeout(() => { eachImgDelay(worksArray, 300) }, 600);
    // }


    async function eachImgDelay(worksArray, delays) {
        for(var x= 0; x < worksArray.length; x ++) {
            worksArray[x].classList.remove('hidden');
            await delay(delays);
        }
    }

    function hoverEffect(e) { /*hover scale effect on column img*/
        let element = e.target.nextSibling;
        let card = element.querySelector('.img img');
        card.classList.toggle('hover-image');
    }

    const fetchData = useCallback(() => { //fetch data for school projects section
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                setItems(result.items);
            },
            (err) => {
                setError(err);
                console.warm(error);
            }
         );
         setTimeout(() => { set(false) }, 400);
    }, url);

    useEffect(() => {    //handles scroll to display school projects
        let itemsLoade = false;
        const handleScroll = () => {       
            if(!itemsLoade) {
                itemsLoade = true;
                setTimeout(() => {
                    fetchData();
                }, 100);
            }
        }
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [fetchData]);


    useEffect(() => {  //handles fade in effect on freelance works
        let worksArray = Array.from(document.querySelectorAll('.columna'));
        if(worksArray) {
            if((prevURL === thisURL && !props.first) || !props.firstClick) {
                setTimeout(() => { eachImgDelay(worksArray, 800) });
            } else {
                worksArray.forEach(img => { img.classList.remove('hidden') });
            }
        }
     }, []);

    const trail =  useTrail(items.length, {    ////handles fade in effect on school projects
        opacity: toggle ? 0 : 1,
        transform: toggle ? 'translateY(-20%)' : 'translateY(0)',
        from: {transform: 'translateY(-20%)'},        
    })

    return (
        <div id="section-projects" >
            <div className="title-container">
                <div className="back-img-projects style-bk-img"></div>
                <div className="txt-wrapper">
                    <h1 className="title-section">Portfolio</h1>
                    <p id="title-section-text">Here are some works as a freelance and some excersice at freecodecamp.org</p>
                </div>
            </div>
            <div className="projects">
                <Row className="justify-content-md-center no-gutters">
                    <Column md='3' className="columna text-center hidden">
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
                    <Column md='3' className="columna text-center hidden">
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

                    <Column md='3' className="columna text-center hidden">
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
                
            </div>
            <Container  className="text-center school-project-wrapper">
                <h4 className={toggle ? 'hidden-subtitle' : ''}>At FreeCodeCamp.org</h4>
                <Row >
                    {trail.map((props, index) => (
                        <animated.div
                            key={items[index].id}
                            style={props}
                            className="col-sm-3"
                        >
                            <img src={items[index].src} alt={items[index].title}></img>
                            <div>{items[index].title}</div>    
                        </animated.div>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Projects;