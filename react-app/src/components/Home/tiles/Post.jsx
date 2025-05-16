import { useState } from "react";
import { BsDot } from "react-icons/bs";

function Post({post}) {
    const [isLoading, setIsLoading] = useState(true)
    return (
        <>
            {isLoading &&
            <div className="post-tile">
                <div className="post-head">
                    <p>{post.username}</p>
                    <BsDot />
                    <p className="grey-text">Time ago</p>
                </div>
                <p>{post.post}</p>
                <div className="post-footer">
                    <button className="post-button">Upvote / Downvote</button>
                    <button className="post-button">Comment</button>
                    <button className="post-button">Share</button>
                </div>
            </div>}
        </>
    )
}

export default Post;
