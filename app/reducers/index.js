/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux';
import { campusReducer } from './campus';
import { studentReducer } from './student';


// const initialState = {
//   // campuses: [],
//   // students: []
// }

const mainReducer = combineReducers({
  campuses: campusReducer,
  students: studentReducer
})


// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

export default mainReducer;

// export * from './campus'
// export * from './student'
