import { useEffect, useState } from "react";
import Post from "../tiles/Post";
import posts from "../tempData";

function Feed() {
    const [isLoading, setIsLoading] = useState(true)

    // need to fetch data here
        // need a variable to determine how to sort data
        // need logic to avoid fetching data multiple times

    useEffect(() => {
        // simulate a fetch
        setTimeout(() => setIsLoading(false), 500)
    })

    return (
        <>
            {!isLoading && <div className="posts-container" >
                {posts.map(post => {
                    return (
                        <div key={`post${post.id}`}>
                            <div className="border"></div>
                            <Post post={post}  />
                        </div>
                    )
                })}
            </div>}
        </>
    )
}

export default Feed;
