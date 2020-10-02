import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
                    <FontAwesomeIcon className="icons-footer" icon={faFacebook} />
                    <FontAwesomeIcon className="icons-footer" icon={faInstagram} />
                    <FontAwesomeIcon className="icons-footer" icon={faGithub} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;