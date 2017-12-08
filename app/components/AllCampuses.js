import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCampusesThunk, deleteCampusThunk } from '../reducers/campus.js';
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
                <button className="add-campus-btn"><Link to="/add-campus">Add Campus</Link></button>
                <div className="campus-wrap">
                    {
                        this.props.campuses.map(campus => (
                            <div className="campus-profile" key={campus.id}>
                                <Link to={`/campuses/${campus.id}`}>
                                    <img className="campus-image" src={campus.imageUrl}></img>
                                </Link>
                                {/* <Link to={`/campuses/${campus.id}`}> */}
                                    <h2 className="campus-name">{campus.name}</h2>
                                {/* </Link> */}
                                <h5 className="campus-description">{campus.description}</h5>
                                <button onClick={() => this.props.deleteCampus(campus)}>Delete {campus.name}</button>
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
        },
        deleteCampus: (campus) => {
            dispatch(deleteCampusThunk(campus))
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