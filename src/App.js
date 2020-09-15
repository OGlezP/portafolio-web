import React from 'react';
// import ReactDOM from 'react';
// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   Link,
// } from "react-router-dom";
import './App.css';



import NavElement from './components/NavElement';
// import Footer from './components/Footer';
// import Home from './Home';
// import Projects from './Projects';
// import About from './About';
// import Contact from './Contact';
import Routes from './Routes';


import ReactLoading from 'react-loading';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';

// const navLink = document.querySelector('.nav-link-wrapper .nav-link');
const navLink = document.querySelectorAll('.nav-link');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      firstLaunch: true,
      render: false,
      clickedOnProjects: false,
      clickedOnContact: false,
      title: "Oglez",
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'Projects', path: '/projects'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'}
      ],
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
    }
    // this.updatePagesFirstRender = this.updatePagesFirstRender.bind(this);
    // this.updatefirstClickOnContact = this.updatefirstClickOnContact.bind(this);
    this.checkFirstLoad = this.checkFirstLoad.bind(this);
  }


  checkFirstLoad() {
      let url = window.location.pathname;
      let location = url.substring(1);

      if(location == 'Projects') {
        setTimeout(() => {

          this.setState({
            clickedOnProjects: true
          });
        }, 1000)
        
      }

      if(location == 'Contact') {
        this.setState({
          clickedOnContact: true
        });
      }
  }


  componentDidMount() {
    setTimeout(() => {
      this.setState({
        render: true
      });
    }, 1500);

  }

  componentWillMount(){
    this.checkFirstLoad();

    setTimeout(()=>{ //making this async to simulate an API call
      this.setState({
        firstLaunch: false
      })
    },2000);  


  }

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


  render(){
    if (this.state.render) {
      return (
        <div id="absolute-wrapper">
                <NavElement />
            <div className="animation-wrapper">
            <Routes 
              first={this.state.firstLaunch}  
              // clickOnProject={this.state.clickedOnProjects}
              // clickOnContact={this.state.clickedOnContact}
            />

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
}

export default App;