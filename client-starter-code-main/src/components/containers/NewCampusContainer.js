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
            name: "",
            campusId: null,
            address: "",
            description: "",
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

        let campus = {
            name: this.state.name,
            id: this.state.campusId,
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
        console.log(newCampus.id)
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