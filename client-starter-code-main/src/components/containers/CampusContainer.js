/*==================================================
CampusContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import { Component } from "react";
import { connect } from "react-redux";
import { fetchAllCampusesThunk, fetchStudentThunk, editStudentThunk, deleteCampusThunk, fetchCampusThunk, deleteStudentThunk, fetchAllStudentsThunk } from "../../store/thunks";

import CampusView from "../views/CampusView";

class CampusContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      university: null
    }
  }

  componentDidMount() {
    this.props.fetchAllCampuses();
    this.props.fetchAllStudents();
    this.props.fetchCampus(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.setState({ university: null });
  }

  deletion = (id) => {
    this.props.deleteCampus(id);
    this.setState({ university: "Campus Successfully Deleted" });
  }

  unEnroll = (student_id) => {

    let editStudentID =
    {
      id: student_id,
      campusId: null
    }
    let editStudent = this.props.editStudent(editStudentID);
  }

  // Render a Campus view by passing campus data as props to the corresponding View component
  render() {
    return (
      <div>
        <Header />
        <CampusView
          university={this.state.university}
          campus={this.props.campus}
          deleteStudent={this.props.deleteStudent}
          fetchCampus={this.props.fetchCampus}
          students={this.props.allStudents}
          deleteCampus={this.props.deleteCampus}
          allCampuses={this.props.allCampuses}
          deletion={this.deletion}
          unEnroll={this.unEnroll}
        />
      </div>
    );
  }
}


// The following 2 input arguments are passed to the "connect" function used by "CampusContainer" component to connect to Redux Store.
// 1. The "mapState" argument specifies the data from Redux Store that the component needs.
// The "mapState" is called when the Store State changes, and it returns a data object of "campus".
const mapState = (state) => {
  return {
    student: state.student,  // Get the State object from Reducer "student"
    campus: state.campus,  // Get the State object from Reducer "campus"
    allStudents: state.allStudents,
    allCampuses: state.allCampuses,  // Get the State object from Reducer "allCampuses"
  };
};
// 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    deleteStudent: (studentId) => dispatch(deleteStudentThunk(studentId)),
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    deleteCampus: (campusid) => dispatch(deleteCampusThunk(campusid)),
    editStudent: (campusid) => dispatch(editStudentThunk(campusid)),
  };
};

// Export store-connected container by default
// CampusContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(mapState, mapDispatch)(CampusContainer);