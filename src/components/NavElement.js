import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import {
  Link
} from "react-router-dom";
// import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../App.css';

// function updatePagesFirstRender() {
//   setTimeout(() => {
//     this.setState({
//       clickedOnProjects: true
//     });
//   }, 100);
// }


// function updatefirstClickOnContact () {
//   setTimeout(() => {
//     this.setState({
//       clickedOnContact: true
//     });
//   }, 800);
// }

function NavElement({firstProjects, firstContact}) {
  let location = useLocation();
  let currentLocation = location.pathname;
  // let [contactClick, setContactClick] = useState(false);

  function mouseOverMenuLink(e) {
    e.preventDefault();  
    let currentLink = e.currentTarget;
  
    if(e.type === "mouseover") {
      currentLink.nextElementSibling.classList.add('transform-underline');
    } 
     if (e.type === "mouseleave") {
      currentLink.nextElementSibling.classList.remove('transform-underline');
    }
  }

  useEffect(() => {
    // console.log('contact click', contactClick);
  })

  // function updateFirstState() {
  //   console.log('clicked projects link')
  //   setContactClick('hola');

  //   firstProjects(contactClick);
  // }

  return (
    <Navbar className='border-bottom transparent' expand="lg">
              <Navbar.Brand>Orlando Glez</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarNav" />     
              <Navbar.Collapse id="navbarNav">
                
              
    <Nav className="ml-auto">
        <div className="nav-link-wrapper">
            <Link 
              className='nav-link'
              to="/" 
              onMouseOver={currentLocation === '/' ? (() => {}) : mouseOverMenuLink} 
              onMouseLeave={currentLocation === '/' ? (() => {}) : mouseOverMenuLink}>
                Home
            </Link>
            <div className={currentLocation === "/" ? 'menu-link-underline active-link' : 'menu-link-underline'}></div>
        </div>

        <div className="nav-link-wrapper">
            <Link  
              className='nav-link' 
              to="/Projects" 
              
              onClick={() => setTimeout(() => {firstProjects(true)}, 200)}
              onMouseOver={currentLocation === '/Projects' ? (() => {}) : mouseOverMenuLink} 
              onMouseLeave={currentLocation === '/Projects' ? (() => {}) : mouseOverMenuLink}>
                Projects
            </Link>
            <div className={currentLocation === "/Projects" ? 'menu-link-underline active-link' : 'menu-link-underline'}></div>
        </div>

        <div className="nav-link-wrapper">
            <Link  
            className='nav-link'
            to="/Contact"  

            onClick={() => setTimeout(() => {firstContact(true)}, 200)}
            onMouseOver={currentLocation === '/Contact' ? (() => {}) : mouseOverMenuLink} 
            onMouseLeave={currentLocation === '/Contact' ? (() => {}) : mouseOverMenuLink}>
                Contact
            </Link>
            <div className={currentLocation === "/Contact" ? 'menu-link-underline active-link' : 'menu-link-underline'}></div>
        </div>
    </Nav>
    </Navbar.Collapse>
            </Navbar>
  );
}

export default NavElement;