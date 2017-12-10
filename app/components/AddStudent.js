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
    }

    handleInputChange(event) {
        const name = event.target.name
        this.setState({
            [name]: event.target.value
        })  

    }

    render() {
    
        return (
            <div className="student-form-container">
                <h3>Add Student</h3>
                <div>
                    <form onSubmit={this.props.handleSubmit.bind(this)} className="add-student-form">
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
                        <input type="number" 
                        placeholder="GPA"
                        name="gpa"
                        onChange={this.handleInputChange}
                        value={this.state.gpa}
                        ></input>
                        <input type="number" 
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


const mapDispatchToProps = (dispatch) => {

    return {
        handleSubmit: function (event) {
            event.preventDefault()
            const firstName = this.state.firstName;
            const lastName = this.state.lastName;
            const email = this.state.email;
            const gpa = this.state.gpa;
            const campusId = this.state.campusId
            const student = {firstName, lastName, email, gpa, campusId}
        
            dispatch(addStudentThunk(student)) 
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                gpa: '',
                campusId: ''
            })  
        }
    }
}


const AddStudentContainer = connect(() => ({}), mapDispatchToProps)(AddStudent);
export default AddStudentContainer;


