/*==================================================
NewStudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewStudentView from '../views/NewStudentView';
import { addStudentThunk, fetchAllCampusesThunk } from '../../store/thunks';

class NewStudentContainer extends Component {
  // Initialize state
  constructor(props) {
    super(props);
    this.state = {
      firstname: null,
      lastname: null,
      email: null,
      gpa: null,
      campusId: null,
      redirect: false,
      redirectId: null
    };
  }
  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  componentWillUnmount() {
    this.setState({
      firstname: null,
      lastname: null,
      campusId: null,
      email: null,
      gpa: null,
      redirect: false,
      redirectId: null
    });
  }

  handleId = event => {
    this.setState({
      campusId: event.target.value
    });
  }

  // Capture input data when it is entered
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleEmail = event => {
    this.setState({
      email: event.target.value
    });
  }

  handleGPA = event => {
    this.setState({
      gpa: event.target.value
    });
  }

  // Take action after user click the submit button
  handleSubmit = async event => {
    let checker = false;
    event.preventDefault();  // Prevent browser reload/refresh after submit.
    if (this.state.campusId !== null) {
      for (let i = 0; i < this.props.allCampuses.length; i++) {
        console.log(this.props.allCampuses[i].id)
        console.log((this.state.campusId))
        if ((parseInt(this.state.campusId)) === this.props.allCampuses[i].id) {
          checker = true;
        }
      }
      if (checker === false) {
        alert("This campus is not in our database, please enter an ID with an existing campus.");
        return;
      }
    }
    else if (this.state.firstname == null || this.state.lastname == null || this.state.email == null || this.state.gpa == null) {
      alert("One or more field(s) may be empty.  Please fill out all the fields");
      return;
    }

    let student = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      campusId: this.state.campusId,
      email: this.state.email,
      gpa: this.state.gpa,
    };

    // Add new student in back-end database
    let newStudent = await this.props.addStudent(student);

    // Update state, and trigger redirect to show the new student
    this.setState({
      firstname: null,
      lastname: null,
      campusId: null,
      email: null,
      gpa: null,
      redirect: true,
      redirectId: newStudent.id
    });
  }

  // Unmount when the component is being removed from the DOM:
  // componentWillUnmount() {
  //   this.setState({ redirect: false, redirectId: null });
  // }

  // Render new student input form
  render() {
    // Redirect to new student's page after submit
    if (this.state.redirect) {
      return (<Redirect to={`/student/${this.state.redirectId}`} />)
    }

    // Display the input form via the corresponding View component
    return (
      <div>
        <Header />
        <NewStudentView
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleEmail={this.handleEmail}
          handleGPA={this.handleGPA}
          handleId={this.handleId}
        />
      </div>
    );
  }
}

// The following input argument is passed to the "connect" function used by "NewStudentContainer" component to connect to Redux Store.
// The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.

const mapState = (state) => {
  return {
    allCampuses: state.allCampuses,  // Get the State object from Reducer "allCampuses"
  };
};

const mapDispatch = (dispatch) => {
  return ({
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    addStudent: (student) => dispatch(addStudentThunk(student)),
  })
}

// Export store-connected container by default
// NewStudentContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(mapState, mapDispatch)(NewStudentContainer);