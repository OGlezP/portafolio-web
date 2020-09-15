import React, { useContext } from 'react';
import ReactDOM from 'react';
import { Route, Switch, Router } from 'react-router';
import { useLocation } from 'react-router-dom';
// import Container from 'react-bootstrap/Container'
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './components/Footer';

// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useTransition, animated } from 'react-spring';

function Routes(propss) {
  const location = useLocation();
  const path = location.pathname;
  const store = window.localStorage;

  let url = '';
  let prevUrl = '';

  url = store.getItem('url');
  store.setItem('prevUrl', url);
  store.setItem('url', path);

  url = store.getItem('url');
  prevUrl = store.getItem('prevUrl');

  const transitions = useTransition(location, location => location.pathname, {
    from: {
      position: 'absolute',
      width: '100%',
      opacity: 0,
      // height: '100%',
      // backgroundColor: 'red',
      // transform: 'translate(100%,0)'
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <div> 
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route path="/" exact render={() => 
                < Home first={propss.first} />
              }/>
              <Route  path="/Projects" render={() =>
                <Projects
                  previousURL={prevUrl}
                  currentURL={url}
                  clickedMenuProject={propss.clickOnProject}
                  first={propss.first}
                />
              }/>
              {/* <Route path="/About" render={() =>  
                <About  />  
              }/> */}
              <Route path="/Contact" render={() => 
                <Contact  
                  previousURL={prevUrl}
                  currentURL={url}
                  clickedMenuContact={propss.clickOnContact}
                  first={propss.first} 
                />  
              }/>
            </Switch>
          <Footer id="foot" />
        </animated.div>

      ))}


    </div>  
  )
}

export default Routes;