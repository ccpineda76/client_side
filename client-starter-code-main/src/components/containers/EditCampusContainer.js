import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditCampusView from '../views/EditCampusView';
import { editStudentThunk, fetchAllStudentsThunk, addCampusThunk, deleteCampusThunk, fetchCampusThunk, addStudentThunk, deleteStudentThunk, editCampusThunk, fetchAllCampusesThunk } from '../../store/thunks';

class EditCampusContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: null,
            lastname: null,
            email: null,
            gpa: null,
            name: null,
            id: null,
            campusId: null,
            address: null,
            description: null,
            redirect: false,
            redirectId: null,
            students: []
        };
    }
    componentDidMount() {
        //getting student ID from url
        this.props.fetchAllCampuses();
        this.props.fetchCampus(this.props.match.params.id);

    }

    componentWillUnmount() {
        this.setState({
            firstname: null,
            lastname: null,
            campusId: null,
            id: null,
            email: null,
            gpa: null,
            redirect: false,
            redirectId: null
        });
    }

    //Event handler for campus
    handleCampus = event => {
        this.setState({
            name: event.target.value
        });
    }
    //Event handler for address
    handleAddress = event => {
        this.setState({
            address: event.target.value
        });
    }
    //Event handler for description
    handleDescription = event => {
        this.setState({
            description: event.target.value
        });
    }

    // Capture input data when it is entered
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleFirstName = event => {
        this.setState({
            firstname: event.target.value
        });
    }

    handleLastName = event => {
        this.setState({
            lastname: event.target.value
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

    unEnroll = (student_id) => {
        let editStudentID =
        {
          id: student_id,
          campusId: null
        }
        let editStudent = this.props.editStudent(editStudentID);
      }

    // Take action after user click the submit button
    handleStudentSubmit = async event => {
        event.preventDefault();  // Prevent browser reload/refresh after submit.
        if (this.state.firstname == null || this.state.lastname == null) {
            alert("First name or last name may be empty, please fill out both.");
            return;
        }

        let student = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            campusId: this.props.campus.id,
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
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
        if (this.state.name === null && this.state.address === null && this.state.description === null) {
            alert("You did not enter any changes above.  Please change at least one field or at most three.");
            return;
        }
        let campus = {
            name: this.state.name,
            id: this.props.campus.id,
            address: this.state.address,
            description: this.state.description
        };

        if (this.state.name === null) {
            campus.name = this.props.campus.name
            // console.log(campus)
        }
        if (this.state.address === null) {
            campus.address = this.props.campus.address
            // console.log(campus)
        }
        if (this.state.description === null) {
            campus.description = this.props.campus.description
            // console.log(campus)
        }

        alert("Your change has been successfully submitted!")

        //UPDATING BACKEND WITH NEW CAMPUS 
        let editCampus = await this.props.editCampus(campus);
        this.setState({
            name: "",
            campusId: null,
            address: "",
            description: "",
            id: null,
            redirect: true,
            redirectId: this.props.campus.id,
            students: []
        });
    }

    render() {
        return (
            <div>
                <Header />
                <EditCampusView
                    unEnroll={this.unEnroll}
                    handleChange={this.handleChange}
                    handleCampus={this.handleCampus}
                    handleAddress={this.handleAddress}
                    handleDescription={this.handleDescription}
                    handleSubmit={this.handleSubmit}
                    handleId={this.handleId}
                    campus={this.props.campus}
                    fetchCampus={this.props.fetchCampus}
                    deleteStudent={this.props.deleteStudent}
                    addStudent={this.addStudent}
                    handleStudentSubmit={this.handleStudentSubmit}
                    handleFirstName={this.handleFirstName}
                    handleLastName={this.handleLastName}
                    students={this.props.allStudents}
                    editCampus={this.props.editCampus}
                    handleEmail={this.handleEmail}
                    handleGPA={this.handleGPA}
                    allCampuses={this.props.allCampuses}
                />
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        allStudents: state.allStudents,
        allCampuses: state.allCampuses,
        campus: state.campus,  // Get the State object from Reducer "campus"
    };
};

const mapDispatch = (dispatch) => {
    return ({
        fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
        addCampus: (campus) => dispatch(addCampusThunk(campus)),
        deleteCampus: (campusid) => dispatch(deleteCampusThunk(campusid)),
        fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
        deleteStudent: (studentId) => dispatch(deleteStudentThunk(studentId)),
        editCampus: (campusid) => dispatch(editCampusThunk(campusid)),
        addStudent: (student) => dispatch(addStudentThunk(student)),
        fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
        editStudent: (campusid) => dispatch(editStudentThunk(campusid)),
    })
}
export default connect(mapState, mapDispatch)(EditCampusContainer);
// export default NewCampusContainer