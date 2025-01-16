import { useLocation } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import "./footer.css"

function Footer() {
    const location = useLocation()
    return (
        <div className={`footer-container ${location.pathname.includes("manage") ? 'manage-footer-container' : ''}`}>
            <div className="contact-container center-content-flex">
                <p>&lt; - About Me - &gt;</p>
                <FaLinkedin className="footer-icon"/>
                <FaGithub className="footer-icon"/>
                <p>&lt; - Resume - &gt;</p>
            </div>
            <div className="copyright-container center-content-flex">
                <FaRegCopyright className="copyright-icon"/>
                <p>David Salas. All rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;
