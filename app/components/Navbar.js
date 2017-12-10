import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = function (props) {
    return (
        <navbar className="nav">
            <h4 className="nav-item">
                <div className="nav-link">
                    <Link to="/" style={{ color: 'darkPurple', textDecoration: 'none' }}>HOME</Link>
                </div>  
            </h4>
            <h4 className="nav-item">
                <div className="nav-link">
                    <Link to="/campuses" style={{ color: 'darkPurple', textDecoration: 'none' }}>CAMPUSES</Link>
                </div>
            </h4>
            <h4 className="nav-item">
                <div className="nav-link">
                    <Link to="/students" style={{ color: 'darkPurple', textDecoration: 'none' }}>STUDENTS</Link>
                </div>
            </h4>

        </navbar>
    )
} 

export default Navbar;