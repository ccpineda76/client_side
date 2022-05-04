/*==================================================
StudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, deleteStudentThunk, fetchAllStudentsThunk } from "../../store/thunks";
import { StudentView } from "../views";

class StudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pupil: null
    }
  }
  // Get student data from back-end database
  componentDidMount() {
    //getting student ID from url
    this.props.fetchAllStudents();
    this.props.fetchStudent(this.props.match.params.id);
    console.log(this.props.student)
  }

  componentWillUnmount() {
    this.setState({ pupil: null });
  }

  deletion = (id) => {
    this.props.deleteStudent(id);
    this.setState({ pupil: "Student Successfully Deleted" });
  }

  // Render Student view by passing student data as props to the corresponding View component
  render() {
    return (
      <div>
        <Header />
        <StudentView
          pupil={this.state.pupil}
          student={this.props.student}
          deleteStudent={this.props.deleteStudent}
          deletion={this.deletion}
          allStudents={this.props.allStudents}
        />
      </div>
    );
  }
}

// The following 2 input arguments are passed to the "connect" function used by "StudentContainer" to connect to Redux Store.  
// The following 2 input arguments are passed to the "connect" function used by "AllCampusesContainer" component to connect to Redux Store.
const mapState = (state) => {
  return {
    student: state.student,  // Get the State object from Reducer "student"
    allStudents: state.allStudents,  // Get the State object from Reducer "allStudents"
  };
};
// 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    deleteStudent: (studentId) => dispatch(deleteStudentThunk(studentId)),
  };
};

// Export store-connected container by default
// StudentContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(mapState, mapDispatch)(StudentContainer);