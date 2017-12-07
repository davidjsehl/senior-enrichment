import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class SingleStudent extends Component {
    constructor (props) {
        super (props);
    }

    render () {
        const studentId = Number(this.props.match.params.campusId)
        const studentsArr = this.props.students
        const currentCampus = campusesArr.find((student) => {
            return studentId === student.id
        })
        return (
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        students: state.students
    }
}

export default connect(mapStateToProps)(SingleStudent)