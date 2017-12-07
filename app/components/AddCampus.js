import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCampus } from '../store';

export default class AddCampus extends Component {
    render () {
        return (
            <div className="campus-form-container">
                <h3>Add Campus</h3>
                <form className="add-campus-form">
                    <input type="text" placeholder="Name"></input>
                    <input type="text" placeholder="Image URL"></input>
                    <input type="text" placeholder="Description"></input>
                </form>
                <button className="campus-submit-btn">Create Campus</button>
            </div>
        )
    }
}