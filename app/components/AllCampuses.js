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

        return (
            <div>
                <button><Link to="/add-campus">Add Campus</Link></button>
                <div className="campus-wrap">
                    {
                        this.props.campuses.map(campus => (
                            <div className="campus-profile" key={campus.id}>
                                <Link to={`/campuses/${campus.id}`}>
                                    <img className="campus-image" src={campus.imageUrl}></img>
                                </Link>
                                <h2 className="campus-name">{campus.name}</h2>
                                <h4 className="campus-description">{campus.description}</h4>
                                <button>Delete {campus.name}</button>
                            </div>
                        ))
                    }

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


const mapDispatchToProps = (dispatch) => {
    return {
        getCampuses: () => {
            dispatch(getCampusesThunk())
        }
        
    }
}

const CampusContainer = connect(mapStateToProps, mapDispatchToProps)(AllCampuses)
export default CampusContainer;



// <ul>
//     {
//         this.props.campuses.map(campus => {
//             return (
//                 <li key={campus.id}>{campus.name}</li>
//             );
//         })
//     }
// </ul>