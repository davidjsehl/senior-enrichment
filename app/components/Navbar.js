import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = function (props) {
    return (
        <navbar className="nav">
            <h4 className="nav-item">
                <Link to="/">HOME</Link>
            </h4>
            <h4 className="nav-item">
                <Link to="/campuses">CAMPUSES</Link>
            </h4>
            <h4 className="nav-item">
                <Link to="/students">STUDENTS</Link>
            </h4>

        </navbar>
    )
} 

export default Navbar;