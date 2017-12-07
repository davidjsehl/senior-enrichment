import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../store';
import { addStudentThunk } from '../reducers/student.js'

export class AddStudent extends Component {

    constructor (props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            gpa: '',
            campusId: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleInput = this.handleInput.bind(this);
    }

    handleInputChange(event) {
        const name = event.target.name
        this.setState({
            [name]: event.target.value
        })  

    }

    // handleInput(event) {
    //     event.preventDefault();
    //     const student = this.state;
    //     dispatch(addStudentThunk(student, ownProps.history))

    // }


    render() {
        console.log(this.state)
        console.log(this.props)
        return (
            <div className="student-form-container">
                <h3>Add Student</h3>
                <div>
                    <form onSubmit={(event) => {console.log('shit');this.props.handleSubmit(this.state, event)}} className="add-student-form">
                        <input type="text" 
                        placeholder="First Name (Required)"
                        name="firstName"
                        onChange={this.handleInputChange}
                        value={this.state.firstName}
                        ></input>
                        <input type="text" 
                        placeholder="Last Name (Required)"
                        name="lastName"
                        onChange={this.handleInputChange}
                        value={this.state.lastName}
                        ></input>
                        <input type="text" 
                        placeholder="Email (Required)"
                        name="email"
                        onChange={this.handleInputChange}
                        value={this.state.email}
                        ></input>
                        <input type="text" 
                        placeholder="GPA"
                        name="gpa"
                        onChange={this.handleInputChange}
                        value={this.state.gpa}
                        ></input>
                        <input type="text" 
                        placeholder="Campus ID"
                        name="campusId"
                        onChange={this.handleInputChange}
                        value={this.state.campusId}
                        ></input>
                        <button type="submit" className="student-submit-btn">Add Student</button>
                    </form>
                </div>
        
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSubmit: (student, event) => {
            // handleInput(event);
            event.preventDefault()
            dispatch(addStudentThunk(student, ownProps.history))   
        }
    }
}

const AddStudentContainer = connect(() => ({}), mapDispatchToProps)(AddStudent);
export default AddStudentContainer;

