/*==================================================
/src/store/reducers/students.js

This is a Reducer function that accepts 2 parameters: the previous state object (aka current state) and an action object. 
Depending on the Action object, the Reducer updates the State and return the new State object.
It also defines the State and its default initial value.
================================================== */
import * as at from "../actions/actionTypes";  // Import Action Types ("at" keyword for Action Type)

// REDUCER:
const allStudents = (state = [], action) => {  // Empty array as default Initial State
  switch (action.type) {
    case at.FETCH_ALL_STUDENTS:
      return action.payload;
    case at.ADD_STUDENT:
      return [...state, action.payload]
    case at.DELETE_STUDENT:
      return state.filter(student => student.id !== action.payload);
    case at.EDIT_STUDENT:
      let campus_holder = null;
      let new_State = [];
      for (let i = 0; i < action.campuses.data.length; i++) {
        if (action.campuses.data[i].id === action.payload.data.campusId) {
          campus_holder = action.campuses.data[i]
        }
      }
      for (let i = 0; i < state.length; i++) {
        new_State.push(state[i]);
      }
      for (let i = 0; i < new_State.length; i++) {
        if (new_State[i].id === action.payload.data.id) {
          new_State[i] = {
            campus: campus_holder,
            ...action.payload.data
          }
        }
      }
      return [...new_State]
    default:
      // If the Reducer doesn't recognize the Action Type, returns the previous (current) State unchanged.
      return state;
  }
};

export default allStudents;