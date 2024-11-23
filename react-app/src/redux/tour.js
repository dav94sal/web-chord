const SET_TOURS = 'tours/setTours'
const REMOVE_TOURS = 'tours/removeTours'

// action creators
const setTours = (tours) => ({
    type: SET_TOURS,
    tours // an array of tours
})

export const removeTours = () => ({
    type: REMOVE_TOURS
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
    case REMOVE_TOURS:{
      return {};
    }
    default:
      return state;
  }
}

export default tourReducer;
