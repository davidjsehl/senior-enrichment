import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class SingleStudent extends Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
            <div></div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        students: state.students
    }
}

export default connect(mapStateToProps)(SingleStudent)