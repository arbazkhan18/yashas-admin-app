import React, { Component } from "react";
import { createCustomer } from '../../store/actions/customerActions'
import { connect } from 'react-redux';

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
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create new project </h5>

          <div className="input-field">
            <label htmlFor="title">Title</label>
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

const mapDispatchToProps = (dispatch) => {
  return {
    createCustomer: (customer) => dispatch(createCustomer(customer))
  }
}

export default connect(null, mapDispatchToProps)(CreateCustomer);
