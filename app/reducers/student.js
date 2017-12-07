import axios from 'axios'


const state = {
    students: []
}

// ACTION TYPES

const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';
// const GOT_NEW_STUDENT ='GOT_NEW_STUDENT';



// ACTION CREATORS

export function getStudents(students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

export function addStudent(student) {
  const action = { type: ADD_STUDENT, student };
  return action;
}

export function deleteStudent(student) {
    const action = { type: DELETE_STUDENT, student }
    console.log('in action acretor', action)
    return action;
}

// export function gotNewStudent(student) {
//     const action = { type: GOT_NEW_STUDENT, student};
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
            // history.push(`/students/${newStudent.id}`)
        })
    }
}

export function deleteStudentThunk (student) {
    // console.log(student)
    return function thunk (dispatch) {
        return axios.delete(`./api/students/${student.id}`)
        .then(() => dispatch(deleteStudent(student)))
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
        case DELETE_STUDENT:
            // return action.student
            const newState = Object.assign([], state)
            const studentToDelete = state.findIndex(student => {
                return student.id === action.student.id
            })
            newState.splice(studentToDelete, 1);
            return newState;
        default:
            return state;
    }
}