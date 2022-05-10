import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditStudentView from '../views/EditStudentView';
import { fetchAllStudentsThunk, editStudentThunk, fetchStudentThunk, fetchAllCampusesThunk } from '../../store/thunks';


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
            redirectId: null,
            //These variables are for temporary email and grade
            temp_email: this.props.student.email,
            temp_gpa: this.props.student.gpa
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
            redirectId: null,
            temp_email: null,
            temp_gpa: null
        });
    }

    empty_message_email = () => {
        this.setState({
            temp_email: "There is no email available"
        })
    }

    empty_message_gpa = () => {
        this.setState({
            gpa: "There is no GPA aviailable"
        })
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
        let checker = false;
        if (this.state.firstname == null && this.state.lastname == null && this.state.email == null && this.state.gpa == null && this.state.campusId == null) {
            alert("All fields are empty, please fill at least one field");
            return;
        }
        if (this.state.campusId !== null && this.state.campusId !== "") {
            for (let i = 0; i < this.props.allCampuses.length; i++) {
                if ((parseInt(this.state.campusId)) === this.props.allCampuses[i].id) {
                    checker = true;
                }
            }
            if (checker === false) {
                alert("This campus is not in our database, please enter an ID with an existing campus.");
                return;
            }
        }
        let new_student =
        {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            gpa: this.state.gpa,
            campusId: parseInt(this.state.campusId),
            id: this.props.student.id
        }

        if (this.state.firstname === null || this.state.firstname === "" || !this.state.firstname.replace(/\s/g, '').length) {
            new_student.firstname = this.props.student.firstname
        }
        if (this.state.lastname === null || this.state.lastname === "" || !this.state.lastname.replace(/\s/g, '').length) {
            new_student.lastname = this.props.student.lastname
        }
        if (this.state.email === null || this.state.email === "" || !this.state.email.replace(/\s/g, '').length) {
            new_student.email = this.props.student.email
        }
        if (this.state.gpa === null || this.state.gpa === "") {
            new_student.gpa = this.props.student.gpa
        }
        if (this.state.campusId === null || this.state.campusId === "") {
            new_student.campusId = parseInt(this.props.student.campusId)
        }

        alert("Your change has been successfully submitted!")
        let form = document.getElementById('student-form');
        form.reset();

        let editStudent = await this.props.editStudent(new_student);
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
                    empty_message_email={this.empty_message_email}
                    empty_message_gpa={this.empty_message_gpa}
                />
            </div>
        );
    }

}


const mapState = (state) => {
    return {
        student: state.student,  // Get the State object from Reducer "student"
        allStudents: state.allStudents,
        allCampuses: state.allCampuses,  // Get the State object from Reducer "allCampuses"
    };
};


const mapDispatch = (dispatch) => {
    return ({
        fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
        fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
        fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
        editStudent: (campusid) => dispatch(editStudentThunk(campusid)),
    })
}

export default connect(mapState, mapDispatch)(EditStudentContainer);


