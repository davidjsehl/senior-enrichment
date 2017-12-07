import axios from 'axios'


const state = {
    students: []
}

// ACTION TYPES

const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';
// const GET_NEW_STUDENT ='GET_NEW_STUDENT';



// ACTION CREATORS

export function getStudents(students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

export function addStudent(student) {
  const action = { type: ADD_STUDENT, student };
  return action;
}

// export function getNewStudent(student) {
//     const action = { type: GET_NEW_STUDENT, student};
//     return action;
// }


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

export function addStudentThunk (student, history) {
    return function thunk (dispatch) {
        return axios.post('/api/students', student)
        .then(res => res.data)
        .then(newStudent => {
            const action = addStudent(newStudent)
            dispatch(action)
            history.push(`/students/${newStudent.id}`)
        })
    }
}



export function studentReducer(state = [], action) {
    switch (action.type) {
        case GET_STUDENTS:
            return action.students
        case ADD_STUDENT:
            return [
                ...state,
                action.student
            ]
        default:
            return state;
    }
}