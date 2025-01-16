import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { FaSpotify } from "react-icons/fa6";
import { SiPandora } from "react-icons/si";
import "./artist-page.css"

function SocialMediaButtons() {

    const handleClick = () => alert("Feature Coming Soon!");

    return (
        <div className="social-buttons-container">
            <button
                className="social-buttons"
                onClick={handleClick}
            ><FaXTwitter /></button>
            <button
                className="social-buttons"
                onClick={handleClick}
            ><FaFacebookF /></button>
            <button
                className="social-buttons"
                onClick={handleClick}
            ><SlSocialInstagram /></button>
            <button
                className="social-buttons"
                onClick={handleClick}
            ><IoLogoYoutube /></button>
            <button
                className="social-buttons"
                onClick={handleClick}
            ><FaSpotify /></button>
            <button
                className="social-buttons"
                onClick={handleClick}
            ><SiPandora /></button>
        </div>
    )
}

export default SocialMediaButtons;
