import React from 'react'
import { Link } from 'react-router-dom'
import SingedInLinks from './SingedInLinks'
import SingedOutlinks from './SignedOutLinks'
import { connect } from 'react-redux'
import Sidebar from '../dashboard/Sidebar'

const Navbar = (props) => {
  const { auth, profile } = props
  const links = auth.uid ? <SingedInLinks profile={profile} /> : <SingedOutlinks/>
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
      <Sidebar />

        <Link to="/" className="brand-logo">
          Yashas App
        </Link>
        { links }
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
    console.log(state)
    return{
          auth: state.firebase.auth,
          profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar)