import React from 'react'
import { Link } from 'react-router-dom'
import SingedInLinks from './SingedInLinks'
import SingedOutlinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth } = props
  const links = auth.uid ? <SingedInLinks /> : <SingedOutlinks/>
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
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
          auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(Navbar)