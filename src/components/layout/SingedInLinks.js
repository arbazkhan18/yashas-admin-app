import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SingedInLinks = (props) =>{
    return (
        <ul className="right">
            <li> <NavLink to='/'>  New Customer </NavLink> </li>
            <li> <a onClick={props.signOut}> Log Out </a> </li>
            <li> <NavLink to='/' className='btn btn-floating pink lightne-1'> YS </NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SingedInLinks)
