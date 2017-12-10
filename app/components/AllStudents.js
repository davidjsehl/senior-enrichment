import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStudentsThunk, deleteStudentThunk } from '../reducers/student.js';
import axios from 'axios';

export class AllStudents extends Component {

    componentDidMount() {

        this.props.getStudents()

    }


    render() {
        return (
            <div className="student-container">
                <button className="add-student-btn">
                    <Link to="/add-student">Add Student</Link>
                </button>
                <table className="all-students-table">
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Name</th>
                            <th>Campus</th>
                            <th>Delete?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.students.map(student => {
                                return (

                                    <tr key={student.id}>
                                        <td>{student.id}</td>
                                        <td><Link to={`/students/${student.id}`}>{student.name}</Link></td>
                                        <td>{student.campusId}</td>
                                        <td><button className="delete-student-btn" onClick={() => this.props.deleteStudent(student)}>X</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
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
        getStudents: () => {
           
            dispatch(getStudentsThunk())
        },
        deleteStudent: (student) => {
            dispatch(deleteStudentThunk(student))
        }

    }
}

const StudentContainer = connect(mapStateToProps, mapDispatchToProps)(AllStudents)
export default StudentContainer;

