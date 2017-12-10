import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { updateStudentThunk } from '../reducers/student.js'

export class SingleStudent extends Component {
    constructor (props) {
        super (props);
        this.state = {
            id: null,
            firstName: '',
            lastName: '',
            email: '',
            gpa: '',
            campusId: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    componentDidMount () {
        const id = this.props.location.pathname.slice(10)
        this.setState({
            id: id,
            firstName: '',
            lastName: '',
            email: '',
            gpa: '',
            campusId: ''
        })
    }

    handleInputChange(event) {
        const name = event.target.name
        this.setState({
            [name]: event.target.value
        })

    }

    render () {
        const studentId = Number(this.props.match.params.studentId)
        const studentsArr = this.props.students
        const currentStudent = studentsArr.find((student) => {
            return studentId === student.id
        })
        
        return (
            <div className="single-student-wrap">
                <h1>{currentStudent.name}</h1>
                <h3>{currentStudent.email}</h3>

                <div className="update-student-wrap">
                    <h3>Edit Student</h3>
                    <form onSubmit={this.props.handleSubmit.bind(this)} className="edit-student-form">
                        <input type="text"
                        placeholder="Update First Name"
                        name="firstName"
                        onChange={this.handleInputChange}
                        value={this.state.firstName}
                        ></input>
                        <input type="text"
                        placeholder="Update Last Name"
                        name="lastName"
                        onChange={this.handleInputChange}
                        value={this.state.lastName}
                        ></input>
                        <input type="text"
                        placeholder="Update Email"
                        name="email"
                        onChange={this.handleInputChange}
                        value={this.state.email}
                        ></input>
                        <input type="number"
                        placeholder="Update GPA"
                        name="gpa"
                        onChange={this.handleInputChange}
                        value={this.state.gpa}
                        ></input>
                        <input type="number" 
                        placeholder="Update Campus"
                        name="campusId"
                        onChange={this.handleInputChange}
                        value={this.state.campusId}
                        ></input>
                        <button type="submit" className="update-student-btn">Submit</button>
                    </form>
    
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        students: state.students
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: function (event) {
            event.preventDefault()
            const id = this.state.id;
            const firstName = this.state.firstName;
            const lastName = this.state.lastName;
            const email = this.state.email;
            const gpa = this.state.gpa;
            const campusId = this.state.campusId
            const student = { id, firstName, lastName, email, gpa, campusId }

            dispatch(updateStudentThunk(student))
            this.setState({
                id: null,
                firstName: '',
                lastName: '',
                email: '',
                gpa: '',
                campusId: ''
            })

        }

    }
}



const SingleStudentContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleStudent))
export default SingleStudentContainer