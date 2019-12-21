import React from 'react';

const CustomerSummary = ({customer}) => {
    return (
        <div className="card z-depth-0 customer-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{customer.cust_fname}</span>
                <p>Added by admin</p>
                <p className="grey-text">{customer.cust_mobile}</p>
            </div>
        </div>
      );
}

export default CustomerSummary;