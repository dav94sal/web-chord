import { useState } from "react";
import { useDispatch } from "react-redux"
import { createPost } from "../../../redux/post";
import { useModal } from "../../../context/Modal";

function NewPostModal() {
    const [post, setPost] = useState('');
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(createPost({ post }))
            .then(() => closeModal())
    }

    return (
        <>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Put your thoughts here..."
                    value={post}
                    onChange={e => setPost(e.target.value)}
                    required
                />
                <button type="submit" className="buttons fill-color-black">Submit Post</button>
            </form>
        </>
    )
}

export default NewPostModal;
