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
        console.log('-------------', this.props)
        return (
            <ul>
                {
                    this.props.students.map(student => {
                        return (
                            <li key={student.id}>{student.name}</li>
                        );
                    })
                }
            </ul>
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
