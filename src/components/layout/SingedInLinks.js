import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SingedInLinks = (props) =>{
    return (
        <ul className="right">
            <li> <NavLink to='/formio'> Formio </NavLink> </li>
            <li> <NavLink to='/create'>  New Customer </NavLink> </li>
            <li> <a onClick={props.signOut}> Log Out </a> </li>
            <li> <NavLink to='/' className='btn btn-floating pink lightne-1'> {props.profile.initials} </NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SingedInLinks)
