import { useLocation } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import "./footer.css"

function Footer({ isLoaded }) {
    const location = useLocation();

    return (
        <div className={`footer-container ${location.pathname.includes("manage") ? "fixed-position":""}`}>
            {isLoaded && <><div className="contact-container center-content-flex">
                <a
                    href="https://dav94sal.github.io/"
                    className="center-content-flex"
                    target="_blank"
                    rel="noreferrer"
                >
                    <p>&lt; - About Me - &gt;</p>
                </a>
                <a
                    href="https://www.linkedin.com/in/david-salas-59a5588a/"
                    className="center-content-flex"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin className="footer-icon"/>
                </a>
                <a
                    href="https://github.com/dav94sal"
                    className="center-content-flex"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub className="footer-icon"/>
                </a>
                <a
                    href="/David Salas Resume.pdf"
                    download="David_Salas_Resume"
                    className="center-content-flex"
                >
                    <p>&lt; - Resume - &gt;</p>
                </a>
            </div>
            <div className="copyright-container center-content-flex">
                <FaRegCopyright className="copyright-icon"/>
                <p>David Salas. All rights Reserved</p>
            </div></>}
        </div>
    )
}

export default Footer;
