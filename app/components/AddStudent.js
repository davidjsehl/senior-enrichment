import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../store';

export default class AddStudent extends Component {
    render() {
        return (
            <div>
                <h3>Add Student</h3>
                <form className="add-student-form">
                    <input type="text" placeholder="First Name"></input>
                    <input type="text" placeholder="Last Name"></input>
                    <input type="text" placeholder="Email"></input>
                    <input type="text" placeholder="GPA"></input>
                    <input type="text" placeholder="Campus ID"></input>
                </form>
                <button className="student-submit-btn">Add Student</button>
            </div>
        )
    }
}