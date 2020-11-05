import React, {useState}  from "react";
import { useLocation } from 'react-router-dom';
import {
  Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../App.css';


function NavElement({firstHome, firstProjects, firstContact}) {
  let location = useLocation();
  let currentLocation = location.pathname;
  const [expandedMenu, setExpandedMenu] = useState(false);

  function mouseOverMenuLink(e) {
    e.preventDefault();  
    let currentLink = e.currentTarget;
  
    if(e.type === "mouseover") {
      currentLink.children[0].classList.add('transform-underline');
    } 
     if (e.type === "mouseleave") {
      currentLink.children[0].classList.remove('transform-underline');
    }
  }

  function clickControlAndNavbarExpansion(e) {
    const _eTarget = e.target.innerText;

    if(_eTarget === 'HOME') {
      setTimeout(() => { firstHome(true) }, 400);
    }

    if(_eTarget === 'PROJECTS') {
      setTimeout(() => { firstProjects(true) }, 400);
    }

    if(_eTarget === 'CONTACT') {
      setTimeout(() => { firstContact(true) }, 400)
    }

    setTimeout(() => {setExpandedMenu(false)}, 600)
  }

  return (
    <Navbar className='border-bottom p-0' expanded={expandedMenu}  expand="lg" fixed="top">
      <Navbar.Brand  href="/">
          <img src={"./img/logo/logo-oglez-portafolio.png"} alt="ogles logo"></img>
      </Navbar.Brand>
      <Navbar.Toggle 
        aria-controls="navbarNav" 
        onClick={() => setExpandedMenu(expandedMenu ? false : "expanded")}
        className={expandedMenu ? "openIcon" : "closedIcon"}
      />     
      <Navbar.Collapse id="navbarNav">    
        <Nav className="ml-auto">
          <Link 
            className='nav-link'
            to="/" 
            onMouseOver={currentLocation === '/' ? (() => {}) : mouseOverMenuLink} 
            onMouseLeave={currentLocation === '/' ? (() => {}) : mouseOverMenuLink}
            onClick={clickControlAndNavbarExpansion}>
              Home
              <div className={currentLocation === "/" ? 'menu-link-underline active-link' : 'menu-link-underline'}></div>
          </Link>
          <Link  
            className='nav-link' 
            to="/Projects" 
            onClick={clickControlAndNavbarExpansion}
            onMouseOver={currentLocation === '/Projects' ? (() => {}) : mouseOverMenuLink} 
            onMouseLeave={currentLocation === '/Projects' ? (() => {}) : mouseOverMenuLink}
            >
              Projects
              <div className={currentLocation === "/Projects" ? 'menu-link-underline active-link' : 'menu-link-underline'}></div>
          </Link>
          <Link  
            className='nav-link'
            to="/Contact"  
            onClick={clickControlAndNavbarExpansion}
            onMouseOver={currentLocation === '/Contact' ? (() => {}) : mouseOverMenuLink} 
            onMouseLeave={currentLocation === '/Contact' ? (() => {}) : mouseOverMenuLink}>
              Contact
              <div className={currentLocation === "/Contact" ? 'menu-link-underline active-link' : 'menu-link-underline'}></div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavElement;