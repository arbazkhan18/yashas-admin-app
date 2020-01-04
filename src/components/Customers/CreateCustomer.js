import React, { Component } from "react";
import { createCustomer } from '../../store/actions/customerActions'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

export class CreateCustomer extends Component {
  state = {
    title: '',
    details: ''
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };
  handleSubmit = e => {
    e.preventDefault()
    this.props.createCustomer(this.state)
    this.props.history.push('/')
  };

  render() {
    const { auth } = this.props
    if(!auth.uid) return <Redirect to ='/sigin' />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add a new Cow </h5>

          <div className="input-field">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="details">Details</label>
            <textarea id="details" className="materialize-textarea" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">create</button>
          </div>
        </form>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createCustomer: (customer) => dispatch(createCustomer(customer))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCustomer);
