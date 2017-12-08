import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getStudentsThunk, deleteStudentThunk } from '../reducers/student.js';
import { getSelectedCampusThunk, updateCampusThunk} from '../reducers/campus';

class SingleCampus extends Component {

    constructor (props) {
        super(props)
        this.state = {
            id: null,
            name: '',
            imageUrl: '',
            description: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount () {
        this.props.getStudents()
        console.log(this.props);
        console.log(this.props.location.pathname)
        const id = this.props.location.pathname.slice(10)
        console.log(id)
        this.setState({
            id: id,
            name: '',
            imageUrl: '',
            description: '',
        })
    }

    handleInputChange(event) {
        const name = event.target.name
        this.setState({
            [name]: event.target.value
        })
    }
    

    render () {
        
        
        console.log(this.state);
        const campusId = Number(this.props.match.params.campusId)
        const campusesArr = this.props.campuses
        const currentCampus = campusesArr.find((campus) => {
            return campusId === campus.id
        })

        if (!currentCampus) {
            return <p>Loading</p>
        }

        const studentsArr = this.props.students
        const attendingStudents = studentsArr.filter(student => {
            return student.campusId === currentCampus.id
        })
        

        return (
            
            <div className="single-campus-wrap">
                <h1>{currentCampus.name}</h1>
                <img src={currentCampus.imageUrl}></img>
                <table>
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
                            attendingStudents.map(student => {
                                return (
                                    <tr key={student.id}>
                                        <td>{student.id}</td>
                                        <td><Link to={`/students/${student.id}`}>{student.name}</Link></td>
                                        <td>{student.campusId}</td>
                                        <td><button onClick={() => this.props.deleteStudent(student)}>X</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                

                <div className="add-student-wrap">
                    <h3>Add Student To This Campus</h3>
                    <form className="add-student-to-campus-form">
                        <input placeholder="Enter Student ID"></input>
                        <button className="add-student-to-campus-btn">Submit</button>
                    </form>
                </div>
                <div className="update-campus-wrap">
                    <h3>Edit This Campus</h3>
                    <form onSubmit={this.props.handleSubmit.bind(this)} className="edit-campus-form">
                        <input type="text" 
                        placeholder="Enter New Campus Name"
                        name="name"
                        onChange={this.handleInputChange}
                        value={this.state.name}
                        ></input>
                        <input type="text"
                        placeholder="Enter New ImageUrl"
                        name="imageUrl"
                        onChange={this.handleInputChange}
                        value={this.state.imageUrl}
                        ></input>
                        <input type="text"
                        placeholder="Enter New Description"
                        name="description"
                        onChange={this.handleInputChange}
                        value={this.state.description}
                        ></input>
                        <button type ="submit" className="update-campus-btn">Submit</button>
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
        getStudents: () => {
            dispatch(getStudentsThunk())
        },
        deleteStudent: (student) => {
            dispatch(deleteStudentThunk(student))
        },
        handleSubmit: function (event) {
            event.preventDefault()
            const id = this.state.id;
            const name = this.state.name;
            const imageUrl = this.state.imageUrl;
            const description = this.state.description;
            
            const campus = { id, name, imageUrl, description }

            dispatch(updateCampusThunk(campus))
            this.setState({
                id: null,
                name: '',
                imageUrl: '',
                description: '',
            })

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)