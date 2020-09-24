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
// import Routes from './Routes';


import ReactLoading from 'react-loading';
// import { faDivide } from '@fortawesome/free-solid-svg-icons';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';

// const navLink = document.querySelector('.nav-link-wrapper .nav-link');
// const navLink = document.querySelectorAll('.nav-link');

function App() {
  // let [url, setUrl] = useState('');
  // let [prevURL, setPrevURL] = useState('');
  let [initialLoader, setInitialLoader] = useState(false);
  let [firstLoad, setFirstLoad] = useState(false);
  let [firstClickProjects, setFirstClickProjects] = useState(false);
  let [firstClickContact, setFirstClickContact] = useState(false);
  // let firstClickProjects;


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



  // checkFirstLoad() {
  //     let url = window.location.pathname;
  //     let location = url.substring(1);

  //     if(location == 'Projects') { console
  //       setTimeout(() => {

  //         this.setState({
  //           clickedOnProjects: true
  //         });
  //       }, 1000)
        
  //     }

  //     if(location == 'Contact') {
  //       this.setState({
  //         clickedOnContact: true
  //       });
  //     }
  // }



  useEffect(() => {
 

  console.log('home first load', url, prevURL)
  if(url === '/Projects') {
    setFirstClickProjects(true);
  }
  if(url === '/Contact') {
    setFirstClickContact(true);
  }

    
  setTimeout(() => {
      setInitialLoader(true);
    }, 1000)

    setTimeout(() => {
      setFirstLoad(true);
    }, 1500)

  },[])

  console.log('projects component when url == projects', firstClickProjects);


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
                    {/* <Route path="/About" render={() =>  
                      <About  />  
                    }/> */}
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
                <Footer id="foot" />
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



                {/* <Routes 
                  first={this.state.firstLaunch}  
                  // clickOnProject={this.state.clickedOnProjects}
                  // clickOnContact={this.state.clickedOnContact}
                /> */}


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.myRef = React.createRef();
//     this.state = {
//       firstLaunch: true,
//       render: false,
//       clickedOnProjects: false,
//       clickedOnContact: false,
//       title: "Oglez",
//       headerLinks: [
//         { title: 'Home', path: '/'},
//         { title: 'Projects', path: '/projects'},
//         { title: 'About', path: '/about'},
//         { title: 'Contact', path: '/contact'}
//       ],
      // home: {
      //   title: 'This is my portfolio web',
      //   subTitle: 'personal projects',
      //   text: 'take a look to the projects below'
      // },
      // projects: {
      //   title: 'check this out'
      // },
      // about: {
      //   title: 'about me'
      // },
      // contact: {
      //   title: 'get in touch'
      // }
  //   }
  //   // this.updatePagesFirstRender = this.updatePagesFirstRender.bind(this);
  //   // this.updatefirstClickOnContact = this.updatefirstClickOnContact.bind(this);
  //   this.checkFirstLoad = this.checkFirstLoad.bind(this);
  // }


  // checkFirstLoad() {
  //     let url = window.location.pathname;
  //     let location = url.substring(1);

  //     if(location == 'Projects') {
  //       setTimeout(() => {

  //         this.setState({
  //           clickedOnProjects: true
  //         });
  //       }, 1000)
        
  //     }

  //     if(location == 'Contact') {
  //       this.setState({
  //         clickedOnContact: true
  //       });
  //     }
  // }


  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       render: true
  //     });
  //   }, 1500);

  // }

  // componentWillMount(){
  //   this.checkFirstLoad();

  //   setTimeout(()=>{ //making this async to simulate an API call
  //     this.setState({
  //       firstLaunch: false
  //     })
  //   },2000);  


  // }

  // updatePagesFirstRender() {
  //   setTimeout(() => {
  //     this.setState({
  //       clickedOnProjects: true
  //     });
  //   }, 100);
  // }

  // updatefirstClickOnContact () {
  //   setTimeout(() => {
  //     this.setState({
  //       clickedOnContact: true
  //     });
  //   }, 800);
  // }


//   render(){
   


//     if (this.state.render) {
//       return (
//         <div id="absolute-wrapper">
//           <NavElement />
//           <div className="animation-wrapper">
//             {/* <Routes 
//               first={this.state.firstLaunch}  
//               // clickOnProject={this.state.clickedOnProjects}
//               // clickOnContact={this.state.clickedOnContact}
//             /> */}
//             {transitions.map(({ item, props, key }) => (
//         <animated.div key={key} style={props}>
//           <div id="section-wrapper">
//             <Switch location={item}>
//               <Route path="/" exact render={() => 
//                 < Home /> //first={propss.first} 
//               }/>
//               <Route  path="/Projects" render={() =>
//                 <Projects
//                   previousURL={prevUrl}
//                   currentURL={url}
//                   clickedMenuProject={propss.clickOnProject}
//                   // first={propss.first}
//                 />
//               }/>
//               {/* <Route path="/About" render={() =>  
//                 <About  />  
//               }/> */}
//               <Route path="/Contact" render={() => 
//                 <Contact  
//                   previousURL={prevUrl}
//                   currentURL={url}
//                   clickedMenuContact={propss.clickOnContact}
//                   // first={propss.first} 
//                 />  
//               }/>
//             </Switch>
//             </div>
//           <Footer id="foot" />
//         </animated.div>

//       ))}
//           </div>
//         </div>
//       )
//     } else {
//       return ( 
//         <div className="load-wrapper">   
//         <ReactLoading id="loader" type={"bars"} color={"grey"} />     
//         </div>
//       )
//     }
//   }
// }