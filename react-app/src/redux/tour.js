const SET_TOURS = 'tours/setTours'
const ADD_SHOW = 'tours/addShow'
const REMOVE_SHOW = 'tours/removeShow'
const REMOVE_TOUR = 'tours/removeTour'

// action creators
const setTours = (tours) => ({
    type: SET_TOURS,
    tours // an array of tours
})

const addShow = (show) => ({
    type: ADD_SHOW,
    show
})

export const removeShow = (showId, tourId) => ({
    type: REMOVE_SHOW,
    showId,
    tourId
})

export const removeTour = (tourId) => ({
    type: REMOVE_TOUR,
    tourId
})

// Thunks
export const getLatestTour = (id) => async dispatch => {
    const response = await fetch(`/api/artists/${id}/latest-tour`);
    // console.log("Fetch response: ", await response.json())

    if(response.ok) {
        const data = await response.json();
        dispatch(setTours([data]));
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

export const getAllTours = () => async dispatch => {
    const response = await fetch(`/api/tours/all`);
    // console.log("Fetch response: ", await response.json())

    if(response.ok) {
        const data = await response.json();
        // console.log(data)
        dispatch(setTours(data));
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

export const newTour = (tour) => async dispatch => {
    const response = await fetch(`/api/tours/new`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tour)
    });
    // console.log("Fetch response: ", await response.json())

    if(response.ok) {
        const data = await response.json();
        // console.log(data)
        dispatch(getAllTours());
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

export const editTour = (tour) => async dispatch => {
    const response = await fetch(`/api/tours/${tour.id}/edit`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tour)
    });
    // console.log("Fetch response: ", await response.json())

    if(response.ok) {
        const data = await response.json();
        // console.log(data)
        dispatch(getAllTours());
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

export const newShow = (show) => async dispatch => {
    const response = await fetch(`/api/tours/${show.tour_id}/shows`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(show)
    });
    // console.log("Fetch response: ", await response.json())

    if(response.ok) {
        const data = await response.json();
        // console.log(data)
        dispatch(addShow(data));
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

export const editShow = (show) => async dispatch => {
    const response = await fetch(`/api/tours/${show.tour_id}/shows/${show.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(show)
    });
    // console.log("Fetch response: ", await response.json())

    if(response.ok) {
        const data = await response.json();
        // console.log(data)
        dispatch(addShow(data));
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

// Delete Tour
export const deleteTour = (tourId) => async dispatch => {
    const response = await fetch(`/api/tours/${tourId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });
    // console.log("Fetch response: ", await response.json())

    if(response.ok) {
        const data = await response.json();
        // console.log(data)
        dispatch(removeTour(tourId));
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


// Delete Show
export const deleteShow = (tourId, showId) => async dispatch => {
    const response = await fetch(`/api/tours/${tourId}/shows/${showId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });
    // console.log("Fetch response: ", await response.json())

    if(response.ok) {
        const data = await response.json();
        // console.log(data)
        dispatch(removeShow(showId, tourId));
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

function tourReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOURS: {
      const newState = {}

      action.tours.forEach(tour => {
        newState[tour.id] = tour
      });

      return newState;
    }
    case ADD_SHOW: {
      const newState = { ...state }

      newState[action.show.tour_id].shows[action.show.id] = action.show

      return newState;
    }
    case REMOVE_SHOW:{
      const newState = { ...state }

      delete newState[action.tourId].shows[action.showId]

      return newState;
    }
    case REMOVE_TOUR:{
        const newState = { ...state }

        delete newState[action.tourId]

        return newState;
    }
    default:
      return state;
  }
}

export default tourReducer;
