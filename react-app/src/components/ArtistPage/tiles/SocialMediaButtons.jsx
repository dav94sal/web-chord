import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { FaSpotify } from "react-icons/fa6";
import { SiPandora } from "react-icons/si";

function SocialMediaButtons({ artist }) {
    return (
        <div className="social-buttons-container">
            <a href={artist.x_url} rel="noreferrer" className="social-buttons" target='_blank'>
                <FaXTwitter /></a>
            <a href={artist.facebook_url} rel="noreferrer" className="social-buttons" target='_blank'>
                <FaFacebookF /></a>
            <a href={artist.instagram_url} rel="noreferrer" className="social-buttons" target='_blank'>
                <SlSocialInstagram /></a>
            <a href={artist.youtube_url} rel="noreferrer" className="social-buttons" target='_blank'>
                <IoLogoYoutube /></a>
            <a href={artist.spotify_url} rel="noreferrer" className="social-buttons" target='_blank'>
                <FaSpotify /></a>
            <a href={artist.pandora_url} rel="noreferrer" className="social-buttons" target='_blank'>
                <SiPandora /></a>
        </div>
    )
}

export default SocialMediaButtons;
