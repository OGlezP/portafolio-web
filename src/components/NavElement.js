import React from "react";
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

function NavElement(props) {
  let location = useLocation();
  let currentLocation = location.pathname;

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
              onMouseOver={currentLocation === '/Projects' ? (() => {}) : mouseOverMenuLink} 
              onMouseLeave={currentLocation === '/Projects' ? (() => {}) : mouseOverMenuLink}>
                Projects
            </Link>
            <div className={currentLocation === "/Projects" ? 'menu-link-underline active-link' : 'menu-link-underline'}></div>
        </div>

        {/* <div className="nav-link-wrapper">
            <Link  
              className='nav-link'}
              to="/About"  
              onMouseOver={currentLocation == '/About' ? (() => {}) : mouseOverMenuLink} 
              onMouseLeave={currentLocation == '/About' ? (() => {}) : mouseOverMenuLink}>
                About
            </Link>
            <hr className={currentLocation == "/About" ? 'menu-link-underline' : 'menu-link-underline transform-underline'}></hr>
        </div> */}

        <div className="nav-link-wrapper">
            <Link  
              className='nav-link'
              to="/Contact"  
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