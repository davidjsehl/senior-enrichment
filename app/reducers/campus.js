import axios from 'axios'

const state = {
    campuses: []
}

// // ACTION TYPES

const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

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
            return action.campus
        default:
            return state;
    }
}
