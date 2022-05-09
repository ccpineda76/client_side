import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewCampusView from '../views/NewCampusView';
import { addCampusThunk } from '../../store/thunks';

class NewCampusContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            address: null,
            description: null,
            redirect: false,
            redirectId: null,
            students: []
        };
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
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

    //Event handler for Campus ID
    handleId = event => {
        this.setState({
            campusId: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
        if (this.state.name == null || this.state.address == null || this.state.name == "" || this.state.address == "" || !this.state.name.replace(/\s/g, '').length || !this.state.address.replace(/\s/g, '').length) {
            alert("You left the campus name or address field empty.  Please fill out all fields")
        }
        else {
            let campus = {
                name: this.state.name,
                address: this.state.address,
                description: this.state.description,
                students: this.state.students
            };
            if(campus.description === null || campus.description === "" || !campus.description.replace(/\s/g, '').length)
            {
                campus.description = "Campus description was not provided";
            }
            //UPDATING BACKEND WITH NEW CAMPUS 
            let newCampus = await this.props.addCampus(campus);

            this.setState({
                name: "",
                address: "",
                description: "",
                redirect: true,
                redirectId: newCampus.id,
                students: []
            });
        }
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
                <NewCampusView
                    handleChange={this.handleChange}
                    handleCampus={this.handleCampus}
                    handleAddress={this.handleAddress}
                    handleDescription={this.handleDescription}
                    handleSubmit={this.handleSubmit}
                    handleId={this.handleId}
                />
            </div>
        );
    }
}

const mapDispatch = (dispatch) => {
    return ({
        addCampus: (campus) => dispatch(addCampusThunk(campus)),
    })
}
export default connect(null, mapDispatch)(NewCampusContainer);
// export default NewCampusContainer