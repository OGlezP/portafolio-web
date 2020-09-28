import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
    let footer;

    if (props.first) {
        footer = "footer-first-enter";
    } else {
        footer =  "";
    }

    return(
        <footer className="border-top"   id="footer">
            <div className='p-0' id="foot-cont">
                <span className={`name` + footer}>&copy; 2020 - OGLEZP</span>
                <div className="social-icons-footer">
                    <FontAwesomeIcon className="icons-footer" icon={faFacebook} />
                    <FontAwesomeIcon className="icons-footer" icon={faInstagram} />
                    <FontAwesomeIcon className="icons-footer" icon={faGithub} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;