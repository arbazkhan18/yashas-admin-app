import React, { Component } from 'react'
import { detailedReporting } from '../../store/actions/detailedReportingAction'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { compose } from "redux"
import { firestoreConnect } from "react-redux-firebase"
import { Form } from 'react-formio'

export class DetailedReporting extends Component {

    // constructor() {
    //     super()
    //     this.state = {
    //         // data:
    //         //     [
    //         //         {
    //         //             "id": 1,
    //         //             "name": "Foo",
    //         //             "age": "20"
    //         //         },
    //         //         {
    //         //             "id": 2,
    //         //             "name": "Bar",
    //         //             "age": "30"
    //         //         },
    //         //         {
    //         //             "id": 3,
    //         //             "name": "Baz",
    //         //             "age": "40"
    //         //         }
    //         //     ]
    //     }
    // }

    render() {
        const { data, auth } = this.props
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="container">
                <Header />
                <div className="formio">
                    {/* <Form src={ this.props.data } onSubmit={console.log} /> */}
                </div>
                <table className="striped highlight responsive-table">
                <thead>
                <tr>
                    <td>View Form</td>
                    <td>Submit Date</td>
                    <td>Staff Name</td>
                    <td>Email</td>
                    <td>Objective</td>
                </tr>
            </thead>
                    <tbody>
                        {data && data.map((item, i) => <TableRow key={i} data={item} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h5>Detailed Reporting</h5>
            </div>
        );
    }
}

class TableRow extends React.Component {
    render() {
        const formData = this.props.data
        var entries = JSON.parse(formData.submissionJson)
        console.log(entries)
        return (
                <tr>
                    <td><a>View form</a></td>
                    <td>{entries.Date ? entries.Date : "null"}</td>
                    <td>{entries.Staff_List ? entries.Staff_List : "null"}</td>
                    <td>{entries.Email ? entries.Email : "null"}</td>
                    <td>{entries.Objective ? entries.Objective : "null"}</td>
                </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.firestore.ordered.Forms,
        auth: state.firebase.auth
    }
}

// Formio.icons = 'fontawesome';
// Formio.createForm(document.getElementById('formio'), 'https://examples.form.io/customerload')
//   .then(function(form) {
//     // Triggered when they click the submit button.
//     form.on('change', function(event) {
//       if (event.changed && event.changed.component.key === 'customerNumber' && event.changed.value) {
//         fetch('https://examples.form.io/customers/submission?data.number=' + event.changed.value, {
//           headers: {
//             'content-type': 'application/json'
//           },
//           mode: 'cors',
//         })
//         .then(function(response) {
//           response.json().then(function(result) {
//             if (Array.isArray(result) && result.length > 0) {
//               var submission = { data: event.data };
//               submission.data.name = result[0].data.name;
//               submission.data.phoneNumber = result[0].data.phonenumber;
//               form.submission = submission;
//             }
//           });
//         });
//       }
//     });
//   });

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'Forms' }
    ])
)(DetailedReporting);
