import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../../store/actions/eventActions';
import { Redirect } from 'react-router-dom';

class CreateEvent extends Component {
    state = {
        title: '',
        description: '' 
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createEvent(this.state);
        this.props.history.push('/');
    }
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />;
        return (
            <div className="container form">
                <form onSubmit={this.handleSubmit} className="transparent">
                    <h5 className="white-text text-darken-3">Create Event</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input className="white-text" type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" className="materialize-textarea white-text" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <label htmlFor="title">Venue</label>
                        <input className="white-text" type="text" id="venue" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="title">Date</label>
                        <input className="white-text datepicker" type="text" id="date" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="title">Time</label>
                        <input className="white-text" type="text" id="time" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="title">Contact details</label>
                        <input className="white-text" type="text" id="contact" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="title">Price</label>
                        <input className="white-text" type="text" id="price" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="title">Spots available</label>
                        <input className="white-text" type="text" id="spots" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn orange lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createEvent: (event) => dispatch(createEvent(event))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);