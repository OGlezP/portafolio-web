import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { animated, useTrail } from 'react-spring';

function Projects(props) {  
    // let thisURL = props.currentURL;  
    // let prevURL = props.previousURL; 
    const url = "/school-projects.json";
    const _URL_freelancer = "/freelance-projects.json"
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
    const [freelanceError, setFreelanceError] = useState(null);
    const [freelanceProjects, setFreelanceProjects] = useState([]);
    const [toggle, set] = useState(true);
    const [toggleDos, setToggleDos] = useState(true);
    const [refreshing, setRefreshing] = useState(false)
    
    const delay = ms => new Promise(res => setTimeout(res, ms));

    // let worksArray = [];

    // async function eachImgDelay(worksArray, delays) {
    //     for(var x= 0; x < worksArray.length; x ++) {
    //         worksArray[x].classList.remove('hidden');
    //         await delay(delays);
    //     }
    // }

    function hoverEffect(e) { /*hover scale effect on column img*/
        let element = e.target.nextSibling;
        let card = element.querySelector('.img img');
        card.classList.toggle('hover-image');
    }


    // async function eachImgDelay(worksArray, delays) {
    //     for(var x= 0; x < worksArray.length; x ++) {
    //         worksArray[x].classList.remove('hidden');
    //         await delay(delays);
    //     }
    // }


    useEffect(() => {    //handles scroll to display school projects
        let itemsLoade = false;

        function fetchData () {
            fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result.items);
                    console.log('items', items);

                },
                (err) => {
                    setError(err);
                    console.warm(error);
                }
            );
            setTimeout(() => { set(false) }, 400);
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

    const onRefresh = useCallback( async () => {    
        setRefreshing(true);
        await delay(1000)

        setToggleDos(false);

        fetchDataPrincipal();

      }, [])

      function fetchDataPrincipal() {
        fetch(_URL_freelancer)
        .then(res => res.json())
        .then(
            (answer) => {
                setFreelanceProjects(answer.items);
                console.log(freelanceProjects);

            },
            (possible_error) => {
                setFreelanceError(possible_error);
                console.warn(freelanceError);
            }
        );
      }

    useEffect(() => {
            console.log('true values');
            

        if(!props.first || !props.firstClick) {
            onRefresh();
        }

    }, [onRefresh, props.first, props.firstClick]); 

    const trail =  useTrail(items.length, {    ////handles fade in effect on school projects
        opacity: toggle ? 0 : 1,
        transform: toggle ? 'translateY(-20%)' : 'translateY(0)',
        from: {transform: 'translateY(-20%)'},        
    })

    const columnEffect = useTrail(freelanceProjects.length, {    ////handles fade in effect on school projects
        opacity: toggleDos ? 0 : 1,
        transform: toggleDos ? 'translateY(-20%)' : 'translateY(0)',
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
                <Row className={"justify-content-md-center no-gutters"}>
                {/* <Row className={(!props.first || !props.firstClick) ? "justify-content-md-center no-gutters hidden-sect" : "justify-content-md-center no-gutters"}> */}
                    {
                    (refreshing) ? 
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
                                    <FontAwesomeIcon icon={faGlobe } > </FontAwesomeIcon>
                                    <span> </span> {freelanceProjects[index].title}
                                </div>
                                <div className="project-tech">
                                    <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                                    <span> </span> {freelanceProjects[index].web_techonologies}
                                </div>
                                
                            </div>   
                            </animated.div>
                        )) :

                        freelanceProjects.map((item, index) => { 
                            return (
                                <div
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
                            )
                        })
                    
                    
                    }
                       
                        

                    
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


  // const fetchData = useCallback(() => { //fetch data for school projects section
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             setItems(result.items);
    //         },
    //         (err) => {
    //             setError(err);
    //             console.warm(error);
    //         }
    //      );
    //      setTimeout(() => { set(false) }, 400);
    // }, [url]);

    // useEffect(() => {  //handles fade in effect on freelance works
    //     let worksArray = Array.from(document.querySelectorAll('.columna'));

    //     async function eachImgDelay(worksArray, delays) {
    //         for(var x= 0; x < worksArray.length; x ++) {
    //             worksArray[x].classList.remove('hidden');
    //             await delay(delays);
    //         }
    //     }

    //     if(worksArray) {
    //         if((prevURL === thisURL && !props.first)) {
    //             setTimeout(() => { eachImgDelay(worksArray, 300) });
    //         } 
    //         if (props.firstClick) {
    //             worksArray.forEach(img => { img.classList.remove('hidden') });
    //         }
    //     }
    //  }, [prevURL,props.first, props.firstClick, thisURL]);