import { BsDot } from "react-icons/bs";
import { PiArrowFatUp } from "react-icons/pi";
import { PiArrowFatDown } from "react-icons/pi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { PiShareFat } from "react-icons/pi";

function Post({post}) {
    const today = Date.now();
    const timeElapsed = () => {
        // subtract post.createdAt from today
        // convert difference to 'time ago'
            // diff <= 1000: 1 sec
            // 1000 < diff < 60000(1 min): diff / 1000 min
            // 60000(1 min) < diff <  3600000000(1 hr) : diff / 60000 hr
        return post.createdAt ? post.createdAt : 'just now'
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
