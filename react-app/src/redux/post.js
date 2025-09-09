const SET_POSTS = 'posts/setPosts'
const ADD_POST = 'posts/addPost'
const REMOVE_POST = 'posts/removeaPost'

// action creators
const setPosts = (posts) => ({
    type: SET_POSTS,
    posts // an array of posts
})

const addPost = (post) => ({
    type: ADD_POST,
    post
})

export const removePost = (postId) => ({
    type: REMOVE_POST,
    postId
})


// Thunks
export const getAllPosts = (query) => async dispatch => {
    let route = `/api/posts/all`
    if (query !== "fltr=null") route = route + `?${query}`
    const response = await fetch(route);
    // console.log("Fetch response: ", await response.json())

    if(response.ok) {
      const data = await response.json();
      dispatch(setPosts(data));
      return data;
    } else if (response.status < 500) {
        const errorMessages = await response.json();
        return {
            errors: errorMessages
        }
    } else {
        return {
            errors: { server: "Something went wrong. Please try again" }
        }
    }
}


export const createPost = (post) => async dispatch => {
    const response = await fetch('/api/posts/new', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(post)
    });

    if(response.ok) {
        const data = await response.json();
        dispatch(addPost(data));
        return data;
    } else if (response.status < 500) {
        const errorMessages = await response.json();
        return {
            errors: errorMessages
        }
    } else {
        return {
            errors: { server: "Something went wrong. Please try again" }
        }
    }
}


export const editPost = (postId, postData) => async dispatch => {
    const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(postData)
    });

    if(response.ok) {
        const data = await response.json();
        dispatch(addPost(data));
        return data;
    } else if (response.status < 500) {
        const errorMessages = await response.json();
        return {
            errors: errorMessages
        }
    } else {
        return {
            errors: { server: "Something went wrong. Please try again" }
        }
    }
}


export const deletePost = (postId) => async dispatch => {
    const response = await fetch(`/api/posts/${postId}/delete`, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" },
    });

    if(response.ok) {
        dispatch(removePost(postId));
        return { success: true };
    } else if (response.status < 500) {
        const errorMessages = await response.json();
        return {
            errors: errorMessages
        }
    } else {
        return {
            errors: { server: "Something went wrong. Please try again" }
        }
    }
}


function postReducer(state = {}, action) {
  switch (action.type) {
    case SET_POSTS: {
        const newState = {};
        action.posts.forEach(post => {
            newState[post.id] = post;
        });
        return newState;
    }
    case ADD_POST: {
        const newState = { ...state };
        newState[action.post.id] = action.post;
        return newState;
    }
    case REMOVE_POST: {
        const newState = { ...state };
        delete newState[action.postId];
        return newState;
    }
    default:
      return state;
  }
}

export default postReducer;
