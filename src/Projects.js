import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { animated, useTrail } from 'react-spring';
import ColsInProjects from './colsInProjects';
import ColsInProjectsFixed from './colsInProjectsFixed';

function Projects(props) {  
    const url = "/school-projects.json";
    const _URL_freelancer = "/freelance-projects.json"
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
    const [freelanceError, setFreelanceError] = useState(null);
    const [freelanceProjects, setFreelanceProjects] = useState([]);
    const [toggle, set] = useState(true);
    const [hiddenSect, setHiddenSect] = useState(false);

    useEffect(() => {    //handles scroll to display school projects
        let itemsLoade = false;

        function fetchData () {
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
            setTimeout(() => { set(false) }, 500);
        }

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
    }, [error, items]);

    useEffect(() => {
        fetch(_URL_freelancer)
        .then(res => res.json())
        .then(
            (answer) => {
                setFreelanceProjects(answer.items);
            },
            (possible_error) => {
                setFreelanceError(possible_error);
                console.warn(freelanceError);
            }
        );


        (!props.first || !props.firstClick) ? (setHiddenSect(false)) : (setHiddenSect(true));
    }, [])

    const trail =  useTrail(items.length, {    ////handles fade in effect on school projects
        opacity: toggle ? 0 : 1,
        transform: toggle ? 'translateY(30%)' : 'translateY(0)',
        from: {transform: 'translateY(30%)'},        
    })

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

        e.type == "mouseover" ? current_project.classList.add("proj-info-hidden") : current_project.classList.remove("proj-info-hidden");
    }

    return (
        <div id="section-projects" >
            <div className="title-container"> 
                <div className="" style={backHeaderStyle}></div>
                <div className="txt-wrapper">
                    <h1 className="title-section">Portfolio</h1>
                    <p id="title-section-text">Here are some works as a freelance and some excersice at freecodecamp.org</p>
                </div>
            </div>
            <div className="projects">
                {
                (hiddenSect) ? 
                    (<ColsInProjectsFixed projects={freelanceProjects}></ColsInProjectsFixed>) : 
                    (<ColsInProjects projects={freelanceProjects} hidden={hiddenSect}></ColsInProjects> )
                }
            </div>
            <Container  className="text-center school-project-wrapper">
                <h4 className={toggle ? 'hidden-subtitle' : ''}>At FreeCodeCamp.org</h4>
                <div className="divisor"></div>

                <Row className="justify-content-md-center">
                    {trail.map((props, index) => (
                        <animated.div
                            key={items[index].id}
                            style={props}
                            className="col-sm-5"
                        >
                            <a className="mose-over-layer" 
                                onMouseOver={showProjectInfo}
                                onMouseLeave={showProjectInfo}
                                href={items[index].link} 
                                target="_blank" >
                            </a>
                                    
                            <div className="project-wrapper">
                                <div className="image">
                                    <img src={items[index].src} alt={items[index].title}  ></img>
                                </div>
                                <div className="proj-info-wrapper">
                                    <div className="text-inf">{items[index].title}</div>    
                                    <div className="line"></div>
                                    <div className="text-inf"><FontAwesomeIcon icon={faCode}></FontAwesomeIcon><span> </span>{items[index].web_techonologies}</div>   
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