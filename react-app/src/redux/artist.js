const SET_ARTISTS = 'artists/setArtists'
const ADD_ARTIST = 'artists/addArtist'
const REMOVE_ARTISTS = 'artists/removeArtists'

// action creators
const setArtists = (artists) => ({
    type: SET_ARTISTS,
    artists // an array of artists
})

const addArtist = (artist) => ({
    type: ADD_ARTIST,
    artist
})

export const removeArtists = () => ({
    type: REMOVE_ARTISTS
})


// Thunks
export const getAllArtists = () => async dispatch => {
    const response = await fetch("/api/artists");
    // console.log("Fetch response: ", await response.json())

    if(response.ok) {
      const data = await response.json();
      dispatch(setArtists(data.users));
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

export const addArtistById = (id) => async dispatch => {
    const response = await fetch(`/api/artists/${id}`);
    // console.log("Fetch response: ", await response.json())

    if(response.ok) {
      const data = await response.json();
      dispatch(addArtist(data));
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

export const getArtistById = (id) => async dispatch => {
    const response = await fetch(`/api/artists/${id}`);
    // console.log("Fetch response: ", await response.json())

    if(response.ok) {
      const data = await response.json();
      dispatch(setArtists([data]));
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

export const addImage = (image) => async dispatch => {
    // console.log("Image: ", image)
    const response = await fetch("/api/images", {
        method: "POST",
        // headers: { "Content-Type": "application/json" },
        body: image
    });
    // console.log("Fetch response: ", response)

    if(response.ok) {
        const data = await response.json();
        dispatch(setArtists([data]));
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


const initialState = {};

function artistReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ARTISTS: {
      const newState = {}

      action.artists.forEach(artist => {
        newState[artist.id] = artist
      });

      return newState;
    }
    case ADD_ARTIST:{
        const newState = {...state}
        newState[action.artist.id] = action.artist
        return newState
    }
    case REMOVE_ARTISTS:{
      return {};
    }
    default:
      return state;
  }
}

export default artistReducer;
