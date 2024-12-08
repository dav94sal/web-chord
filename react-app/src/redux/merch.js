const SET_MERCH = 'tours/setMerch'
const ADD_MERCH = 'tours/addMerch'

// Action creators
const setMerch = (merch) => ({
    type: SET_MERCH,
    merch // an array of merch
})

const addOne = (merch) => ({
    type: ADD_MERCH,
    merch // single merch item
})

// Thunks
export const getArtistMerch = (artistId) => async dispatch => {
    const response = await fetch(`/api/merch/${artistId}`);
    // console.log("Fetch response: ", await response.json())

    if(response.ok) {
        const data = await response.json();
        dispatch(setMerch(data));
        return data
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

export const addMerch = (merch) => async dispatch => {
    const response = await fetch(`/api/merch/new`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(merch)
    });
    // console.log("Fetch response: ", await response.json())

    if(response.ok) {
        const data = await response.json();
        dispatch(addOne(data));
        return data
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

function merchReducer(state = initialState, action) {
    switch (action.type) {
        case SET_MERCH: {
            const newState = {}

            action.merch.forEach(merch => {
                merch.price = Number.parseFloat(merch.price).toFixed(2)
                newState[merch.id] = merch
            });

            return newState;
        }
        case ADD_MERCH: {
            const newState = {...state}
            const merch = action.merch
            merch.price = Number.parseFloat(merch.price).toFixed(2)

            newState[merch.id] = merch

            return newState;
        }
        default:
            return state;
    }
}

export default merchReducer;
