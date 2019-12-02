import React, { Component } from 'react';
import Notifications from './Notifications'
import CustomersList from '../Customers/CustomersList';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        const { customers } = this.props
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
const mapStateToProps = (state) => {
    return {
        customers: state.customer.customersList
    }
}
export default connect(mapStateToProps)(Dashboard);
