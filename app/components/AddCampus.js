import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCampusThunk } from '../reducers/campus.js';


export class AddCampus extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            description: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const name = event.target.name
        this.setState({
            [name]: event.target.value
        })
    }

    render () {
        console.log(this.state)
        return (
            <div className="campus-form-container">
                <h3>Add Campus</h3>
                <form onSubmit={this.props.handleSubmit.bind(this)} className="add-campus-form">
                    <input type="text" 
                    placeholder="Campus Name"
                    name="name"
                    onChange={this.handleInputChange}
                    value={this.state.campusName}
                    ></input>
                    <input type="text" 
                    placeholder="Image URL"
                    name="imageUrl"
                    onChange={this.handleInputChange}
                    value={this.state.imageUrl}
                    ></input>
                    <input type="text" 
                    placeholder="Description"
                    name="description"
                    onChange={this.handleInputChange}
                    value={this.state.description}
                    ></input>
                <button className="campus-submit-btn">Create Campus</button>
                </form>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: function (event) {
            event.preventDefault()
            const name = this.state.name;
            const imageUrl = this.state.imageUrl;
            const description = this.state.description;
            
            const campus = {name, imageUrl, description};

            dispatch(addCampusThunk(campus))
            this.setState({
                name: '',
                imageUrl: '',
                description: ''
            })

        }
    }
}

const AddCampusContainer = connect(() => ({}), mapDispatchToProps)(AddCampus)
export default AddCampusContainer