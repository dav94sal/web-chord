import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsDot } from "react-icons/bs";
// import { PiArrowFatUp } from "react-icons/pi";
// import { PiArrowFatDown } from "react-icons/pi";
// import { IoChatbubbleOutline } from "react-icons/io5";
// import { PiShareFat } from "react-icons/pi";
// import { BsThreeDots } from "react-icons/bs";
import { deletePost } from "../../../redux/post";

function Post({post}) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const today = new Date;
    const proPicUrl = post.author.profile_pic_url

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

    const handleDelete = () => {
        // Logic to delete the post
        dispatch(deletePost(post.id));
        setDropdownOpen(false); // Close the dropdown after deletion
    }

    return (
        <div className="post-tile">
            <div className="post-head">
                <div className="centered">
                    <img src={proPicUrl ? proPicUrl : ""} alt="profile picture" className="profile-pic" />
                    <p>{post.author.username}</p>
                    <BsDot className="white-text"/>
                    <p className="grey-text">
                        {timeElapsed()}
                    </p>
                </div>
                {dropdownOpen && (
                    <ul className="post-dropdown-menu">
                        <li>Hide</li>
                        <li>Report</li>
                        {user?.id === post.author.id && /* Only show if the user is the author of the post */
                            <li onClick={handleDelete}>Delete</li>
                        }
                    </ul>
                )}
                {/* <div className="centered" onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <BsThreeDots className="white-text"/>
                </div> */}
            </div>
            <p>{post.post}</p>
            <div className="post-footer">
                {/* <button className="buttons darkgrey-background">
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
                </button> */}
            </div>
        </div>
    )
}

export default Post;
