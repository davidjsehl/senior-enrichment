import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStudentsThunk } from '../reducers/student.js';
import axios from 'axios';

export class AllStudents extends Component {

    // constructor (props) {
    //     super(props)
    //     // this.state = {
    //     //     campuses: []
    //     // }
    // }

    componentDidMount() {

        this.props.getStudents()

    }

    render() {
        return (
            <div className="student-container">
                <button className="add-student-btn">
                    <Link to="/add-student">Add Student</Link>
                </button>
                <table className="student-table">
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
                                        <td><button>X</button></td>
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
//SAM NOTE: When you have your store working correctly, this.props will show you a function called "getCampuses", defined below
//this getCampuses is going to be what dispatches your thunk---NOT store.dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        getStudents: () => {
            dispatch(getStudentsThunk())
        }

    }
}

const StudentContainer = connect(mapStateToProps, mapDispatchToProps)(AllStudents)
export default StudentContainer;

// <ul>
            //     {
            //         this.props.students.map(student => {
            //             return (
            //                 <li key={student.id}>{student.name}</li>
            //             );
            //         })
            //     }
            // </ul>

// this.props.students.map(student => (
                            //     <Student key={student.id} student={student} />
                            // ))