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
  // let [url, setUrl] = useState('');
  // let [prevURL, setPrevURL] = useState('');
  let [initialLoader, setInitialLoader] = useState(false);
  let [firstLoad, setFirstLoad] = useState(false);
  let [firstClickProjects, setFirstClickProjects] = useState(false);
  let [firstClickContact, setFirstClickContact] = useState(false);


  const location = useLocation();
  const path = location.pathname;
  const store = window.localStorage;
  let url = '';
  let prevURL = '';

  url = store.getItem('url');
  store.setItem('prevUrl', url);
  store.setItem('url', path);

  url = store.getItem('url');
  prevURL = store.getItem('prevUrl');


  useEffect(() => {
      if(url === '/Projects') {
        setTimeout(() => {
          setFirstLoad(true);
        }, 1200);
        setFirstClickProjects(true);
        
      }
      if(url === '/Contact') {
        setTimeout(() => {
          setFirstLoad(true);
        }, 1200);
        setFirstClickContact(true);
      }
      if(url === '/') {
        setTimeout(() => {
          setFirstLoad(true);
        }, 1200);
      }

    setTimeout(() => {
        setInitialLoader(true);
      }, 1000)

     
  }, [url]);


  const transitions = useTransition(location, location => location.pathname, {
    from: {
      position: 'absolute',
      width: "100%",
      opacity: 0,
    },
    enter: {opacity: 1},
    leave: {opacity: 0}
  });
  

  if (initialLoader) {
      return (
        <div id="absolute-wrapper">
          <NavElement 
            firstProjects={firstClick => setFirstClickProjects(firstClick)}
            firstContact={firstClicked => setFirstClickContact(firstClicked)} 
          />
          <div className="animation-wrapper">
            {transitions.map(({ item, props, key }) => (
              <animated.div key={key} style={props}>
                <div id="section-wrapper">
                  <Switch location={item}>
                    <Route path="/" exact render={() => 
                      <Home first={firstLoad} />
                    }/>
                    <Route  path="/Projects" render={() =>
                      <Projects
                        previousURL={prevURL}
                        currentURL={url}
                        firstClick={firstClickProjects}
                        first={firstLoad}
                        />
                    }/>
                    <Route path="/Contact" render={() => 
                      <Contact  
                        previousURL={prevURL}
                        currentURL={url}
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