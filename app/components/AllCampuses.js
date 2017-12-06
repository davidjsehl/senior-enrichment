import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCampusesThunk } from '../reducers/campus.js';
import axios from 'axios';

export class AllCampuses extends Component {

    // constructor (props) {
    //     super(props)
    //     // this.state = {
    //     //     campuses: []
    //     // }
    // }

    componentDidMount () {

        this.props.getCampuses()

    }

    render () {
        console.log('-------------', this.props)
        return (
            <ul>
                {
                    this.props.campuses.map(campus => {
                        return (
                            <li key={campus.id}>{campus.name}</li>
                        );
                    })
                }
            </ul>
        )
    } 

}

const mapStateToProps = (state) => {
    return {
        campuses: state.campuses
    }
}
//SAM NOTE: When you have your store working correctly, this.props will show you a function called "getCampuses", defined below
//this getCampuses is going to be what dispatches your thunk---NOT store.dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        getCampuses: () => {
            dispatch(getCampusesThunk())
        }
        
    }
}

const CampusContainer = connect(mapStateToProps, mapDispatchToProps)(AllCampuses)
export default CampusContainer;



