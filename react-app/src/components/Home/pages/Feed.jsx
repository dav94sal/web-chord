import Post from "../tiles/Post";
import posts from "../tempData";

function Feed() {
    return (
        <>
            {posts.map(post => {
                return <Post post={post} key={`post${post.id}`} />
            })}
        </>
    )
}

export default Feed;
