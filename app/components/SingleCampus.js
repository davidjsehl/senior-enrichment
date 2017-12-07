import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SingleCampus extends Component {

    constructor (props) {
        super(props)
    }

    // componentDidMount () {

    // }
    

    render () {

        const campusId = Number(this.props.match.params.campusId)
        const campusesArr = this.props.campuses
        const currentCampus = campusesArr.find((campus) => {
            return campusId === campus.id
        })
        // console.log(currentCampus)

        // console.log(this.props)

        return (
            
            <div className="single-campus-wrap">
                <h1>{currentCampus.name}</h1>
                <img src={currentCampus.imageUrl}></img>

                <div className="add-student-wrap">
                    <h3>Add Student To This Campus</h3>
                    <form className="add-student-to-campus-form">
                        <input placeholder="Enter Student ID"></input>
                    </form>
                    <button className="add-student-to-campus-btn">Submit</button>
                </div>
                <div className="update-campus-wrap">
                    <h3>Edit This Campus</h3>
                    <form className="edit-campus-form">
                        <input placeholder="Enter New Campus Name"></input>
                        <input placeholder="Enter New ImageUrl"></input>
                        <input placeholder="Enter New Description"></input>
                    </form>
                    <button className="update-campus-btn">Submit</button>
                </div>

            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        campuses: state.campuses
    }
}

export default connect(mapStateToProps)(SingleCampus)