import React, { Component } from "react";
import Notifications from "./Notifications";
import CustomersList from "../Customers/CustomersList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    const { customers, auth} = this.props;
    if(!auth.uid) return <Redirect to ='/sigin' />
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <CustomersList customers={customers} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
   // customers: state.customer.customersList
   customers: state.firestore.ordered.cowDetails,
   auth: state.firebase.auth
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'cowDetails' }
  ])
)(Dashboard);