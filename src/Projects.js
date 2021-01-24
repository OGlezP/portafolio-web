import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { animated, useTrail } from 'react-spring';

function Projects(props) {  
    // const url = "/school-projects.json";
    const url = "https://api-oglez-portfolio.herokuapp.com/fcc-projects";
    // const _URL_freelancer = "/freelance-projects.json"
    const _URL_freelancer = "https://api-oglez-portfolio.herokuapp.com/projects";
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
    const [freelanceError, setFreelanceError] = useState(null);
    const [freelanceProjects, setFreelanceProjects] = useState([]);
    const [toggle, setToggle] = useState(true);
    const [showSubtitle, setShowSubtitle] = useState(true);
    const [hiddenSect, setHiddenSect] = useState(true);


    useEffect(() => {   /*fetch projects info*/
        fetch(_URL_freelancer)
        .then(res => res.json())
        .then(
            (answer) => {
                setFreelanceProjects(answer);
            },
            (possible_error) => {
                setFreelanceError(possible_error);
                console.warn(freelanceError);
            }
        );


        (!props.first || !props.firstClick) ? (setHiddenSect(true)) : (setHiddenSect(false));
    }, []);


    useEffect(() => {    //handles scroll to display school projects
        let itemsLoade = false;

        const fetchData = () => {
            fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                },
                (err) => {
                    setError(err);
                    console.warm(error);
                }
            );
            setTimeout(() => { setShowSubtitle(false) }, 400);
        }

        const handleScroll = () => {       
            if(!itemsLoade) {
                itemsLoade = true;
                setTimeout(() => {
                    fetchData();
                }, 50);
            }
        }
    
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [error, items]);


    useEffect(() => { /*dilay to display column projects*/
        setTimeout(() => {
            setToggle(false)
        }, 800);
    }, []);  


    const backimg = "./img/title-background/back-title.jpg"

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

    function showProjectInfo(e) {
        let current = e.target.offsetParent.childNodes[1];
        let current_project = current.lastElementChild;

        e.type === "mouseover" ? current_project.classList.add("proj-info-hidden") : current_project.classList.remove("proj-info-hidden");
    }

    function hoverEffect(e) { /*hover scale effect on column img*/
        let element = e.target.nextSibling;
        let card = element.querySelector('.img img');
        card.classList.toggle('hover-image');
    }  


    /*Effect on freelance projects*/
    const columnEffectTranslated = useTrail(freelanceProjects.length, {    
        opacity: toggle ? 0 : 1,
        transform: toggle ? 'translateY(-15%)' : 'translateY(0)',
        from: {transform: 'translateY(-15%)'},         
    });

    const columnEffectFixed = useTrail(freelanceProjects.length, {   
        opacity: 1,
        from: {opacity: 0},         
    });


    /*Effect on Free code camp exercises*/
    const effectOnFreeCodeProjects =  useTrail(items.length, {    ////handles fade in effect on school projects
        opacity: showSubtitle ? 0 : 1,
        transition: 'all .3s',
        transitionTimingFunction: 'cubic-bezier(0.08, 0.61, 1, 0.04)',
        transform: showSubtitle ? 'translateY(60%)' : 'translateY(0)',
        from: {transform: 'translateY(60%)'},        
    })

    return (
        <div id="section-projects" >
            <div className="title-container"> 
                <div className="" style={backHeaderStyle}></div>
                <div className="txt-wrapper">
                    <h1 className="title-section">Portfolio</h1>
                    <p id="title-section-text">Here are some works as a freelance and some exercises at https://codepen.io/ platform</p>
                </div>
            </div>
            <div className="projects">
                <Row className={ "justify-content-md-center no-gutters"}>
                    {(hiddenSect ? columnEffectTranslated : columnEffectFixed).map((prop, index) => (
                        <animated.div
                            key={freelanceProjects[index].id}
                            style={prop}
                            className="columna col-md text-center"
                        >
                        <a className='hover-layer' 
                            onMouseOver={hoverEffect} 
                            onMouseLeave={hoverEffect} 
                            href={freelanceProjects[index].link}
                            target="_blank" rel="noopener noreferrer">
                        </a>
                        <div className="project-info">
                            <div className="img">
                                <img src={freelanceProjects[index].img.url} alt={freelanceProjects[index].title}></img>
                            </div>
                            <div className="project-web-info">
                                <div>
                                    {freelanceProjects[index].title}
                                </div>
                                <hr></hr>
                                <div>
                                    <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                                    <span>&nbsp;&nbsp;</span> {freelanceProjects[index].description}
                                </div>
                            </div>
                        </div>   
                        </animated.div>
                    ))}
                </Row>
            </div>
            <Container  className="text-center school-project-wrapper">
                <h4 className={showSubtitle ? 'hidden-subtitle' : ''}>At FreeCodeCamp.org</h4>
                <div className="divisor"></div>

                <Row className="justify-content-md-center">
                    {effectOnFreeCodeProjects.map((props, index) => (
                        <animated.div
                            key={items[index].id}
                            style={props}
                            className="col-sm-5"
                        >
                            <a className="mose-over-layer" 
                                onMouseOver={showProjectInfo}
                                onMouseLeave={showProjectInfo}
                                href={items[index].link} 
                                target="_blank" rel="noopener noreferrer">
                            </a>
                                    
                            <div className="project-wrapper">
                                <div className="image">
                                    <img src={items[index].img.url} alt={items[index].title}></img>
                                </div>
                                <div className="proj-info-wrapper">
                                    <div className="text-inf">{items[index].title}</div>    
                                    <div className="line"></div>
                                    <div className="text-inf"><FontAwesomeIcon icon={faCode}></FontAwesomeIcon><span> </span>{items[index].description}</div>   
                                </div>
                            </div>
                            
                        </animated.div>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Projects;