import Post from "./Post";
import posts from "./tempData";

function Feed() {
    return (
        <>
            <h2>Welcome to Your Feed!</h2>
            {posts.map(post => {
                return <Post post={post} key={`post${post.id}`} />
            })}
        </>
    )
}

export default Feed;
