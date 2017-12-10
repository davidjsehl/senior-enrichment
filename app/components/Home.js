import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleStudent from './SingleStudent';
import AddStudent from './AddStudent';
import AddCampus from './AddCampus';
import SingleCampus from './SingleCampus';
import HomePage from './HomePage';

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
                            <Route path="/students/:studentId" component={SingleStudent} />
                            <Route exact path="/add-student" component={AddStudent} />
                            <Route exact path="/add-campus" component={AddCampus} />
                            <Route path="/campuses/:campusId" component={SingleCampus} />
                            <Route exact path="/" component={HomePage} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}