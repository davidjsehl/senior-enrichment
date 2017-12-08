import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getStudentsThunk } from '../reducers/student.js';

class SingleCampus extends Component {

    constructor (props) {
        super(props)
    }

    componentDidMount () {
        this.props.getStudents()
        this.props.getSelectedCampus()
    }
    

    render () {

        

        const campusId = Number(this.props.match.params.campusId)
        const campusesArr = this.props.campuses
        const currentCampus = campusesArr.find((campus) => {
            return campusId === campus.id
        })

        const studentsArr = this.props.students
        const attendingStudents = studentsArr.filter(student => {
            return student.campusId === currentCampus.id
        })
        console.log('----------', attendingStudents)
        // console.log(currentCampus)

        console.log(this.props)

        return (
            
            <div className="single-campus-wrap">
                <h1>{currentCampus.name}</h1>
                <img src={currentCampus.imageUrl}></img>

                <div className="add-student-wrap">
                    <h3>Add Student To This Campus</h3>
                    <form className="add-student-to-campus-form">
                        <input placeholder="Enter Student ID"></input>
                        <button className="add-student-to-campus-btn">Submit</button>
                    </form>
                </div>
                <div className="update-campus-wrap">
                    <h3>Edit This Campus</h3>
                    <form className="edit-campus-form">
                        <input placeholder="Enter New Campus Name"></input>
                        <input placeholder="Enter New ImageUrl"></input>
                        <input placeholder="Enter New Description"></input>
                        <button className="update-campus-btn">Submit</button>
                    </form>
                </div>

            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        campuses: state.campuses,
        students: state.students
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStudents: () => 
            dispatch(getStudentsThunk())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)