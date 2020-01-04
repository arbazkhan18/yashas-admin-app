import React from 'react'
import moment from 'moment'

const CustomerSummary = ({ customer }) => {
  return (
    <div className="card z-depth-0 customer-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{customer.title}</span>
        <p>
          Added by {customer.authorFirstName} {customer.authorLastName}
        </p>
        <p className="grey-text">{customer.details}</p>
        <p className="grey-text">{moment(customer.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default CustomerSummary;