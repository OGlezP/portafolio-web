import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { animated, useTrail } from 'react-spring';
import ColsInProjects from './colsInProjects';
import ColsInProjectsFixed from './colsInProjectsFixed';


function Projects(props) {  
    let thisURL = props.currentURL;  
    let prevURL = props.previousURL; 
    const url = "/school-projects.json";
    const _URL_freelancer = "/freelance-projects.json"
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
    // const [freelanceError, setFreelanceError] = useState(null);
    const [freelanceProjects, setFreelanceProjects] = useState([]);
    const [toggle, set] = useState(true);
    const [hiddenSect, setHiddenSect] = useState(false);
    

    useEffect(() => {    //handles scroll to display school projects
        let itemsLoade = false;

        fetch(_URL_freelancer)
        .then(res => res.json())
        .then(
            (answer) => {
                setFreelanceProjects(answer.items);


            },
            (possible_error) => {
                // setFreelanceError(possible_error);
                let error = possible_error
                console.warn(error);
            }
        );

        function fetchData () {
            fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result.items);
                    // console.log('items', items);

                },
                (err) => {
                    setError(err);
                    console.warm(error);
                }
            );
            setTimeout(() => { set(false) }, 300);
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
        (!props.first || !props.firstClick) ? setHiddenSect(true) : setHiddenSect(false);
    }, [])


    const trail =  useTrail(items.length, {    ////handles fade in effect on school projects
        opacity: toggle ? 0 : 1,
        transform: toggle ? 'translateY(-20%)' : 'translateY(0)',
        from: {transform: 'translateY(-20%)'},        
    })

    if(!hiddenSect) {
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
                <ColsInProjectsFixed projects={freelanceProjects}></ColsInProjectsFixed>
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
    } else {
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
                        <ColsInProjects></ColsInProjects>
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

    
    
}

export default Projects;