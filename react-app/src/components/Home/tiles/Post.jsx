import { BsDot } from "react-icons/bs";
import { PiArrowFatUp } from "react-icons/pi";
import { PiArrowFatDown } from "react-icons/pi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { PiShareFat } from "react-icons/pi";

function Post({post}) {
    const today = new Date;


    const timeElapsed = () => {
        const minute = 60 * 1000;
        const hour = minute * 60;
        const day = hour * 24;
        const week = day * 7;
        const month = day * 30.44; // Average days in a month
        const year = day * 365.25; // Average days in a year (including leap years)

        const postDate = new Date(post.created_at);
        const difference = today - postDate;

        if (difference < minute) {
            return `${Math.floor(difference / 1000)} seconds ago`;
        } else if (difference < hour) {
            return `${Math.floor(difference / minute)} min. ago`;
        } else if (difference < day) {
            return `${Math.floor(difference / hour)} hr. ago`;
        } else if (difference < week) {
            return `${Math.floor(difference / day)} days ago`;
        } else if (difference < month) {
            return `${Math.floor(difference / week)} weeks ago`;
        } else if (difference < year) {
            return `${Math.floor(difference / month)} months ago`;
        } else {
            return `${Math.floor(difference / year)} years ago`;
        }
    };

    return (
        <div className="post-tile">
            <div className="post-head">
                <img src={post.author.profile_pic?.url} alt="profile picture" className="profile-pic" />
                <p>{post.author.username}</p>
                <BsDot />
                <p className="grey-text">
                    {timeElapsed()}
                </p>
            </div>
            <p>{post.post}</p>
            <div className="post-footer">
                <button className="buttons darkgrey-background">
                    <PiArrowFatUp className="post-icon-style"/>
                    {` ${post.upvotes} `}
                    <PiArrowFatDown className="post-icon-style"/>
                </button>
                <button className="buttons darkgrey-background">
                    <IoChatbubbleOutline className="post-icon-style"/>
                    {` 43 `}
                </button>
                <button className="buttons darkgrey-background">
                    <PiShareFat className="post-icon-style"/>
                    {` Share`}
                </button>
            </div>
        </div>
    )
}

export default Post;
