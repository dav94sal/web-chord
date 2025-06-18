import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/post";
import Post from "../tiles/Post";
// import posts from "../tempData";

function Feed({ query }) {
    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState(useSelector(state => state.posts));
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPosts(`${query}`))
            .then(data => setPosts(data))
            .then(() => setIsLoading(false))
            .catch(err => {
                console.error("Error fetching posts:", err);
                setIsLoading(false);
            });
    }, [dispatch, query]);
    let postArr = Object.values(posts)

    return (
        <>
            {!isLoading && <div className="posts-container" >
                {postArr.map(post => {
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
