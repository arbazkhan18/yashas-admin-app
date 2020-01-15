import React from 'react'
import { connect } from 'react-redux'
import {Formio} from 'react-formio'
import ReactDOM from "react-dom"


const DetailedReporting = (props) =>{
    return (
        ReactDOM.render(
            <Formio src="https://example.form.io/example" />
            , document.getElementById('example')
          )
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
  //  signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(DetailedReporting)