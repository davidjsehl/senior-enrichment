import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = function (props) {
    return (
        <navbar className="nav">
            <h4 className="nav-item">
                <div className="nav-link">
                    <Link to="/">HOME</Link>
                </div>  
            </h4>
            <h4 className="nav-item">
                <div className="nav-link">
                    <Link to="/campuses">CAMPUSES</Link>
                </div>
            </h4>
            <h4 className="nav-item">
                <div className="nav-link">
                    <Link to="/students">STUDENTS</Link>
                </div>
            </h4>

        </navbar>
    )
} 

export default Navbar;