import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, loggingMiddleware))

// // ACTION TYPES

// const GET_CAMPUSES = 'GET_CAMPUSES';
// const ADD_CAMPUS = 'ADD_CAMPUS';
// const DELETE_CAMPUS = 'DELETE_CAMPUS'
// const GET_STUDENTS = 'GET_STUDENTS';
// const ADD_STUDENT = 'ADD_STUDENT'
// const DELETE_STUDENT = 'DELETE_STUDENT'




// // ACTION CREATORS

// export function getCampuses (campuses) {
//     const action = { type: GET_CAMPUSES, campuses };
//     return action;
// }

// export function addCampus (campus) {
//     const action = { type: ADD_CAMPUS, campus };
//     return action;
// }

// export function getStudents (students) {
//     const action = { type: GET_STUDENTS, students };
//     return action;
// }

// export function addStudent (student) {
//     const action = { type: ADD_STUDENT, student };
//     return action;
// }



// // THUNK CREATORS

// export function fetchCampuses () {
//     return function thunk (dispatch) {
//         return axios.get('/api/campuses')
//         .then(res => res.data)
//         .then(campuses => {
//             const action = getCampuses(campuses)
//             dispatch(action)
//         })
//     }
// }