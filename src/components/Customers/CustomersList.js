import React from 'react';
import CustomerSummary from './CustomerSummary';

const CustomersList = ({customers}) => {
    return (
        <div className="customer-list section">
         {customers && customers.map( customer =>{
             return( 
                 <CustomerSummary customer={customer} key={customer.id}/>
             )
         })}
        </div>
    )
}

export default CustomersList;