import axios from 'axios'


const state = {
    students: []
}

// ACTION TYPES

const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';


// ACTION CREATORS

export function getStudents(students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

export function addStudent(student) {
  const action = { type: ADD_STUDENT, student };
  return action;
}

export function studentReducer (state = [], action) {
    switch (action.type) {
        case GET_STUDENTS:
            return action.students
        default:
            return state;
    }
}

// THUNK CREATORS

export function getStudentsThunk() {
    return function thunk(dispatch) {
        return axios.get('/api/students')
            .then(res => res.data)
            .then(students => {
                const action = getStudents(students)
                dispatch(action)
            })
    }
}