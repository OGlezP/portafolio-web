import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
    let [footerLoad, setFooterLoad] = useState();

    useEffect(() => {
        if (props.firstLoad) {
            setFooterLoad(true);
        } else {
            setFooterLoad(false);
        }
    }, [props.firstLoad, footerLoad]);

    return(
        <footer className="border-top"   id="footer">
            <div className={footerLoad ? "foot-cont" : "foot-cont footer-first-enter"}>
                <span className="name">&copy; 2020 - OGLEZP</span>
                <div className="social-icons-footer">
                    <a href={"https://github.com/OGlezP"} target="_blank">
                        <FontAwesomeIcon className="icons-footer" icon={faGithub} />
                    </a>
                    <a href={"https://www.linkedin.com/in/orlando-gonzalez-62762218b/"} target="_blank">
                        <FontAwesomeIcon className="icons-footer" icon={faLinkedinIn}/>
                    </a>
                    <a href={"https://www.instagram.com/oglezp/"} target="_blank">
                        <FontAwesomeIcon className="icons-footer" icon={faFacebook} />
                    </a>
                    <a href={"https://www.facebook.com/OGlezP"} target="_blank">
                        <FontAwesomeIcon className="icons-footer" icon={faInstagram} />
                    </a>
                    <a href={"https://codepen.io/oglezp"} target="_blank">
                        <FontAwesomeIcon icon={faCodepen}/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;