import axios from 'axios'

const state = {
    campuses: []
}

// // ACTION TYPES

const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const SELECTED_CAMPUS = 'SELECTED_CAMPUS';

// // ACTION CREATORS

export function getCampuses(campuses) {
    const action = { type: GET_CAMPUSES, campuses };
    return action;
}

export function addCampus(campus) {
  const action = { type: ADD_CAMPUS, campus };
  return action;
}

export function deleteCampus(campus) {
    const action = { type: DELETE_CAMPUS, campus }
    return action;
}

export function selectedCampus(campus) {
    const action = { type: SELECTED_CAMPUS, campus}
    return action;
}

export function updateCampus(campus) {
    const action = { type: UPDATE_CAMPUS, campus }
    return action;
}

// THUNK CREATORS

export function getCampusesThunk() {
  return function thunk(dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses)
        dispatch(action)
      })
  }
}

export function addCampusThunk(campus) {
    return function thunk(dispatch) {
        return axios.post('/api/campuses', campus)
        .then(res => res.data)
        .then(newCampus => {
            const action = addCampus(newCampus)
            dispatch(action)
        })
    }
}

// export function getSelectedCampusThunk(campusId) {
//     return function thunk(dispatch) {
//         return axios.get('/api/campuses/campusId')
//         .then(() => dispatch(selectedCampus(campus)))
//     }
// }

export function updateCampusThunk(campus) {
    console.log(campus)
    return function thunk(dispatch) {
        return axios.put(`/api/campuses/${campus.id}`, campus)
            .then(res => res.data)
            .then(campus => {
                const action = updateCampus(campus)
                dispatch(action)
            })
    }
}

export function deleteCampusThunk(campus) {
    return function thunk(dispatch) {
        return axios.delete(`/api/campuses/${campus.id}`, campus)
        .then(() => dispatch(deleteCampus(campus)))
        
    }
}






export const campusReducer = (state = [], action) => {
    switch (action.type) {
        case GET_CAMPUSES:
            return action.campuses 
        case ADD_CAMPUS:
            return [
                ...state,
                action.campus
            ]
        case DELETE_CAMPUS:
            const newState = Object.assign([], state)
            const campusToDelete = state.findIndex(campus => {
                return campus.id === action.campus.id
            })
            newState.splice(campusToDelete, 1)
            return newState;
        case SELECTED_CAMPUS:
            return action.campus
        case UPDATE_CAMPUS:
            const updatedState = Object.assign([], state)
            return updatedState.filter(campus => {
                return campus.id !== action.campus.id
            })
        default:
            return state;
    }
}
