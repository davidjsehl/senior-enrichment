import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class SingleStudent extends Component {
    constructor (props) {
        super (props);
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
                    <form className="edit-student-form">
                        <input placeholder="Update First Name"></input>
                        <input placeholder="Update Last Name"></input>
                        <input placeholder="Update Email"></input>
                        <input type="number" placeholder="Update Campus"></input>
                        <button className="update-campus-btn">Submit</button>
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

export default connect(mapStateToProps)(SingleStudent)