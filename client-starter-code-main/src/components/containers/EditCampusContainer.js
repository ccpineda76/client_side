import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditCampusView from '../views/EditCampusView';
import { addCampusThunk, deleteCampusThunk, fetchCampusThunk, addStudentThunk, deleteStudentThunk } from '../../store/thunks';

class EditCampusContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            name: "",
            campusId: null,
            address: "",
            description: "",
            redirect: false,
            redirectId: null,
            students: []
        };
    }
    componentDidMount() {
        //getting student ID from url
        this.props.fetchCampus(this.props.match.params.id);
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

    // Take action after user click the submit button
    handleStudentSubmit = async event => {
        event.preventDefault();  // Prevent browser reload/refresh after submit.
        let student = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            campusId: this.props.campus.id
        };

        // Add new student in back-end database
        let newStudent = await this.props.addStudent(student);

        // Update state, and trigger redirect to show the new student
        this.setState({
            firstname: "",
            lastname: "",
            campusId: null,
            redirect: false,
            redirectId: null
        });
        this.props.fetchCampus(this.props.match.params.id);

    }

    handleSubmit = async event => {
        event.preventDefault();
        let campus = {
            name: this.state.name,
            campusId: this.state.campusId,
            address: this.state.address,
            description: this.state.description,
            students: this.state.students
        };
        //UPDATING BACKEND WITH NEW CAMPUS 
        let newCampus = await this.props.addCampus(campus);

        this.setState({
            name: "",
            campusId: null,
            address: "",
            description: "",
            redirect: true,
            redirectId: newCampus.id,
            students: []
        });
    }
    componentWillUnmount() {
        this.setState({ redirect: false, redirectId: null });
    }

    render() {
        // Redirect to new student's page after submit
        if (this.state.redirect) {
            return (<Redirect to={`/campus/${this.state.redirectId}`} />)
        }

        // Display the input form via the corresponding View component
        return (
            <div>
                <Header />
                <EditCampusView
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
                />
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        campus: state.campus,  // Get the State object from Reducer "campus"
    };
};

const mapDispatch = (dispatch) => {
    return ({
        addCampus: (campus) => dispatch(addCampusThunk(campus)),
        deleteCampus: (campusid) => dispatch(deleteCampusThunk(campusid)),
        fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
        deleteStudent: (studentId) => dispatch(deleteStudentThunk(studentId)),
        addStudent: (student) => dispatch(addStudentThunk(student)),
    })
}
export default connect(mapState, mapDispatch)(EditCampusContainer);
// export default NewCampusContainer