import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditStudentView from '../views/EditStudentView';
import { fetchAllStudentsThunk, editStudentThunk, fetchStudentThunk } from '../../store/thunks';


class EditStudentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: null,
            lastname: null,
            email: null,
            gpa: null,
            campusId: null,
            id: null,
            redirect: false,
            redirectId: null
        }
    }
    componentDidMount() {
        this.props.fetchAllStudents();
        this.props.fetchStudent(this.props.match.params.id);
    }
    componentWillUnmount() {
        this.setState({
            firstname: null,
            lastname: null,
            email: null,
            gpa: null,
            campusId: null,
            id: null,
            redirect: false,
            redirectId: null
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

    handleCampusID = event => {
        this.setState({
            campusId: event.target.value
        });
    }

    handleStudentSubmit = async event => {
        event.preventDefault();  // Prevent browser reload/refresh after submit.
        if (this.state.firstname == null && this.state.lastname == null && this.state.email == null && this.state.gpa == null && this.state.campusId == null) {
            alert("All fields are empty, please fill at least one field");
            return;
        }
        let student =
        {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            gpa: this.state.gpa,
            campusId: this.state.campusId,
            id: this.props.student.id
        }
        if (this.state.firstname === null) {
            student.firstname = this.props.student.firstname
        }
        if (this.state.lastname === null) {
            student.lastname = this.props.student.lastname
        }
        if (this.state.email === null) {
            student.email = this.props.student.email
        }
        if (this.state.gpa === null) {
            student.gpa = this.props.student.gpa
        }
        if (this.state.campusId === null) {
            student.campusId = this.props.student.campusId
        }

        alert("Your change has been successfully submitted!")

        let editStudent = await this.props.editStudent(student);

        this.setState({
            firstname: null,
            lastname: null,
            campusId: null,
            email: null,
            gpa: null,
            id: null,
            redirect: true,
            redirectId: this.props.student.id
        });
    }

    render() {
        // if (this.state.redirect) {
        //     return (<Redirect to={`/student/${this.state.redirectId}`} />)
        // }

        return (
            <div>
                <Header />
                <EditStudentView
                    student={this.props.student}
                    allStudents={this.props.allStudents}
                    handleEmail={this.handleEmail}
                    handleGPA={this.handleGPA}
                    handleFirstName={this.handleFirstName}
                    handleLastName={this.handleLastName}
                    handleStudentSubmit={this.handleStudentSubmit}
                    handleCampusID={this.handleCampusID}
                />
            </div>
        );
    }

}


const mapState = (state) => {
    return {
        student: state.student,  // Get the State object from Reducer "student"
        allStudents: state.allStudents,
    };
};


const mapDispatch = (dispatch) => {
    return ({
        fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
        fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
        editStudent: (campusid) => dispatch(editStudentThunk(campusid)),
    })
}

export default connect(mapState, mapDispatch)(EditStudentContainer);


