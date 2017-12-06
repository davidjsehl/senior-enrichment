import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import AllCampuses from './AllCampuses'
import AllStudents from './AllStudents'

export default class Home extends Component {
   
    render () {
        return (
            <Router>
                <div className="main">
                    <div>
                        <Navbar />
                    </div>
                    <div>
                        <Switch>
                            <Route exact path="/campuses" component={AllCampuses} />
                            <Route exact path="/students" component={AllStudents} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}