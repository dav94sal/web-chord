import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/post";
import Post from "../tiles/Post";
// import posts from "../tempData";

function Feed({ query }) {
    let reduxPosts = useSelector(state => state.posts);
    const [isLoading, setIsLoading] = useState(true)
    // const [posts, setPosts] = useState(reduxPosts);
    const [postArr, setPostArr] = useState([]);
    const dispatch = useDispatch()


    useEffect(() => {
        setIsLoading(true);

        let postArr = Object.values(reduxPosts)
        if (!query.includes('popular')) {
            postArr.sort(sortFn)
        }
        setPostArr(postArr)

        setIsLoading(false);
    }, [setIsLoading, query, reduxPosts]);


    useEffect(() => {
        let isMounted = true; // Flag to track if the component is mounted
        setIsLoading(true);

        dispatch(getAllPosts(`${query}`))
            .then(data => {
                if (isMounted) { // Only update state if the component is still mounted
                    let postArr = Object.values(data)
                    // setPosts(data)
                    if (!query.includes('popular')) {
                        postArr.sort(sortFn)
                    }
                    setPostArr(postArr);
                }
            })
            .then(() => setIsLoading(false))
            .catch(err => {
                console.error("Error fetching posts:", err);
                // setPosts({});
            });

        // Cleanup function to set the flag to false when the component unmounts
        return () => isMounted = false;
    }, [dispatch, query]);


    function sortFn(a, b) {
        return new Date(b.created_at) - new Date(a.created_at);
    }


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
