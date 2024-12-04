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
        <div className="social-buttons">
            <button
                onClick={handleClick}
            ><FaXTwitter /></button>
            <button
                onClick={handleClick}
            ><FaFacebookF /></button>
            <button
                onClick={handleClick}
            ><SlSocialInstagram /></button>
            <button
                onClick={handleClick}
            ><IoLogoYoutube /></button>
            <button
                onClick={handleClick}
            ><FaSpotify /></button>
            <button
                onClick={handleClick}
            ><SiPandora /></button>
        </div>
    )
}

export default SocialMediaButtons;
