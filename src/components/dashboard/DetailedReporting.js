import React, { Component } from "react";
import { detailedReporting } from "../../store/actions/detailedReportingAction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Form } from "react-formio";

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

    componentDidMount() {
        const M = window.M;
        document.addEventListener("DOMContentLoaded", function () {
            var elems1 = document.querySelectorAll("select");
            var instances1 = M.FormSelect.init(elems1, {});
            var elems2 = document.querySelectorAll(".datepicker");
            var instances2 = M.Datepicker.init(elems2, {});
        });
        M.AutoInit();
    }

    render() {
        const { data, auth } = this.props;
        if (!auth.uid) return <Redirect to="/signin" />;
        return (
            <div>
                {/* <Header /> */}
                {/* <div className="container">
          <FilterSelection />
        </div> */}

                <div className="row container">
                    <div className="col s12 m12">
                        <div className="card ">
                            <div className="card-content">
                                <span className="card-title center-align">
                                    Detailed Reporting{" "}
                                </span>
                                <br />
                                <FilterSelection />
                                <div class="card-action">

                                    <div className="row">
                                    <div className="col s12 m12 center-align offset-m1">
                                    <div className="col s12 m3">
                                            <button class="btn waves-effect waves-light btn-small" type="submit" name="action">View on Screen
                                        <i class="material-icons"></i>
                                            </button>
                                        </div>
                                        <div className="col s12 m3">
                                            <button class="btn waves-effect waves-light btn-small" type="submit" name="action">Export to Excel
                                        <i class="material-icons right"></i>
                                            </button>
                                        </div>
                                        <div className="col s12 m3">
                                            <button class="btn waves-effect waves-light btn-small" type="submit" name="action">Export to PDF
                                        <i class="material-icons right"></i>
                                            </button>
                                        </div>
                                    </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ marginBottom: "3%" }}>
                    <div className="formio">
                        <Form src={ this.props.data } onSubmit={console.log} />
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
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <h5>Detailed Reporting</h5>
            </div>
        );
    }
}

class FilterSelection extends Component {
    render() {
        return (
            <div className="row">
                <div className="input-field col s12 m8 offset-m2">
                    <select>
                        <option value="" disabled selected>
                            please select an elog
                        </option>
                        <option value="1">Elog 1</option>
                        <option value="2">Elog 2</option>
                        <option value="3">Elog 3</option>
                    </select>
                    <label>Elog Sheet</label>
                </div>

                <div className="row">
                    <div className="col m12 offset-m2 valign-wrapper" style={{ marginTop: "3%" }}>
                        <span>Range of data</span>
                        <p style={{ marginLeft: "6.5%" }}>
                            <label>
                                <input
                                    className="with-gap"
                                    name="group"
                                    type="radio"
                                    checked
                                />
                                <span>Last 7 Days</span>
                            </label>
                        </p>
                        <p style={{ marginLeft: "3%" }}>
                            <label>
                                <input
                                    className="with-gap"
                                    name="group"
                                    type="radio"
                                    checked
                                />
                                <span>Last 30 Days</span>
                            </label>
                        </p>
                        <p style={{ marginLeft: "3%" }}>
                            <label>
                                <input
                                    className="with-gap"
                                    name="group"
                                    type="radio"
                                    checked
                                />
                                <span>Last 90 Days</span>
                            </label>
                        </p>
                    </div>
                </div>

                <br />
                <div className="col offset-m2 valign-wrapper">
                    <span>Or Specify Date Range</span>
                    <div className="col m5">
                        <label>Start Date</label>
                        <input type="text" className="datepicker" />
                    </div>
                    <div className="col m5">
                        <label>End Date</label>
                        <input type="text" className="datepicker" />
                    </div>
                </div>
            </div>
        );
    }
}

class TableRow extends React.Component {
    render() {
        const formData = this.props.data;
        var entries = JSON.parse(formData.template);
        console.log(entries + "chunni");
        return (
            <tr>
                <td>
                    <a>View form</a>
                </td>
                <td>{entries.created ? entries.created : "N/A"}</td>
                <td>dum 1</td>
                <td>dum 2</td>
                <td>dum 3</td>

                {/* <td>{formData.name ? formData.name : "null"}</td>
                <td>{entries.Email ? entries.Email : "null"}</td>
                <td>{entries.Objective ? entries.Objective : "null"}</td> */}
            </tr>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.firestore.ordered.Forms,
        auth: state.firebase.auth
    };
};

// Form.icons = 'fontawesome';
// Form.createForm(document.getElementById('formio'), 'https://examples.form.io/customerload')
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
    firestoreConnect([{ collection: "Forms" }])
)(DetailedReporting);
