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

        const postDate = new Date(post.createdAt);
        const difference = today - postDate;

        // convert difference to 'time ago'
            // diff <= 1000: 1 sec
            // 1000 < diff < 60000(1 min): diff / 1000ms = secs ago
            // 60000(1 min) < diff <  3600000000(1 hr) : diff / 60000ms = mins ago
            // 1 hr < diff <  1 day : diff / 1 hr = hrs ago
            // 1 day < diff <  1 week : diff / 1 day = days ago
            // 1 week < diff <  1 month : diff / 1 week = weeks ago
            // 1 month < diff <  1 year : diff / 1 week = months ago
            // diff > 1 year: diff / 1 year = years ago

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
                <p>{post.username}</p>
                <BsDot />
                <p className="grey-text">
                    {timeElapsed()}
                </p>
            </div>
            <p>{post.post}</p>
            <div className="post-footer">
                <button className="post-button">
                    <PiArrowFatUp className="icon-style"/>
                    {` 339 `}
                    <PiArrowFatDown className="icon-style"/>
                </button>
                <button className="post-button">
                    <IoChatbubbleOutline className="icon-style"/>
                    {` 43 `}
                </button>
                <button className="post-button">
                    <PiShareFat className="icon-style"/>
                    {` Share`}
                </button>
            </div>
        </div>
    )
}

export default Post;
