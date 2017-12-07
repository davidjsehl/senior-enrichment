import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../store';

export default class AddStudent extends Component {

    constructor (props) {
        super(props);
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        })
        console.log(this.state)

    }

    render() {
        return (
            <div className="student-form-container">
                <h3>Add Student</h3>
                <div>
                    <form className="add-student-form">
                        <input type="text" 
                        placeholder="First Name (Required)"
                        onChange={this.handleChange}
                        value={this.state.inputValue}
                        ></input>
                        <input type="text" placeholder="Last Name (Required)"></input>
                        <input type="text" placeholder="Email (Required)"></input>
                        <input type="text" placeholder="GPA"></input>
                        <input type="text" placeholder="Campus ID"></input>
                    </form>
                </div>
                <button className="student-submit-btn">Add Student</button>
            </div>
        )
    }
}

