import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/post";
import Post from "../tiles/Post";
// import posts from "../tempData";

function Feed({ query }) {
    let reduxPosts = useSelector(state => state.posts);
    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState(reduxPosts);
    const [postArr, setPostArr] = useState(Object.values(posts));
    const dispatch = useDispatch()

    useEffect(() => {
        let isMounted = true; // Flag to track if the component is mounted

        dispatch(getAllPosts(`${query}`))
            .then(data => {
            if (isMounted) { // Only update state if the component is still mounted
                setPosts(data);
            }
            })
            .then(() => {
                if (isMounted) {
                    setIsLoading(false);
                }
            })
            .catch(err => {
                console.error("Error fetching posts:", err);
                if (isMounted) {
                    setIsLoading(false);
                }
            });

    return () => {
        isMounted = false; // Set flag to false when component unmounts
    };
    }, [dispatch, query]);

    useEffect(() => {
        setIsLoading(true);
        setPosts(reduxPosts)
        setPostArr(Object.values(posts));
        setIsLoading(false);
    }, [reduxPosts, posts]);

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
