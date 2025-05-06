
function Post({post}) {
    return (
        <>
            <h1>This is a post</h1>
            <h3>by {post.username}</h3>
            <p>{post.post}</p>
        </>
    )
}

export default Post;
