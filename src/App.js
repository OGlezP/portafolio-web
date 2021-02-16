import React, {useState, useEffect} from 'react';
import {
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import './App.css';
import { useTransition, animated } from 'react-spring';
import NavElement from './components/NavElement';
import Footer from './components/Footer';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import ReactLoading from 'react-loading';

function App() {
  const [initialLoader, setInitialLoader] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);
  const [firstClickHome, setFirstClickHome] = useState(false);
  const [firstClickProjects, setFirstClickProjects] = useState(false);
  const [firstClickContact, setFirstClickContact] = useState(false);

  const _URL_freelancer = "/freelance-projects.json"
  const _URL_freeCodeCamp = "/school-projects.json";
  // const _URL_freelancer = "https://api-oglez-portfolio.herokuapp.com/projects";
  const [freelanceProjects, setFreelanceProjects] = useState([]);
  // const _URL_freeCodeCamp = "https://api-oglez-portfolio.herokuapp.com/fcc-projects";
  const [items, setItems] = useState([]);

  const location = useLocation();
  const path = location.pathname;
  const store = window.localStorage;
  let url = '';

  url = store.getItem('url');
  store.setItem('url', path);
  url = store.getItem('url');


  const fetchProjectsData = ()  => { /*fetch info from strapi API for freelance projects*/
    fetch(_URL_freelancer)    
      .then(res => res.json())
      .then(
        (answer) => {
          setFreelanceProjects(answer.items);
        },
        (possible_error) => {
          console.warn(possible_error);
        }
      );
  }

  const fetchFreeCodeProjects = () => { /*fetch freeCodeCamp projects from Strapi API*/
    fetch(_URL_freeCodeCamp)
      .then(res => res.json())
      .then(
        (data) => {
          setItems(data.items);
        },
        (error) => {
          console.warn(error);
        }
      );
  }

  useEffect(() => {
    fetchProjectsData(); /*loads info from strapi API*/
    fetchFreeCodeProjects(); /*loads freeCodeCamp projects from Strapi API*/

    setTimeout(() => {
      setFirstLoad(true);
    }, 1200);

    if(url === '/') {
      setFirstClickHome(true);
    }
    if(url === '/Projects') {
      setFirstClickProjects(true);
    }
    if(url === '/Contact') {
      setFirstClickContact(true);
    }

    setTimeout(() => {
      setInitialLoader(true);
    }, 1000)
  }, [url]);


  const transitions = useTransition(location, location => location.pathname, {
    from: {
      position: 'absolute',
      width: "100%",
      opacity: .6,
    },
    enter: {opacity: 1},
    leave: {opacity: 0}
  });
  

  if (initialLoader) {
      return (
        <div id="absolute-wrapper">
          <NavElement 
            firstHome={homeClicked => setFirstClickHome(homeClicked)}
            firstProjects={firstClick => setFirstClickProjects(firstClick)}
            firstContact={firstClicked => setFirstClickContact(firstClicked)} 
          />
          <div className="animation-wrapper">
            {transitions.map(({ item, props, key }) => (
              <animated.div key={key} style={props}>
                <div id="section-wrapper">
                  <Switch location={item}>
                    <Route path="/" exact render={() => 
                      <Home 
                        first={firstLoad} 
                        homeClicked={firstClickHome}/>
                    }/>
                    <Route  path="/Projects" render={() =>
                      <Projects
                        freelanceProjectsResult={freelanceProjects} /*loads info from strapi API*/
                        freeCodeCampData={items}
                        firstClick={firstClickProjects}
                        first={firstLoad}
                        />
                    }/>
                    <Route path="/Contact" render={() => 
                      <Contact  
                        firstClicked={firstClickContact}
                        first={firstLoad} 
                        />
                     }/>
                  </Switch>
                </div>
                <Footer firstLoad={firstLoad} id="foot" />
              </animated.div>
            ))}
          </div>
        </div>
      )
  } else {
      return ( 
        <div className="load-wrapper">   
          <ReactLoading id="loader" type={"bars"} color={"grey"} />     
        </div>
      )
  }
}

export default App;