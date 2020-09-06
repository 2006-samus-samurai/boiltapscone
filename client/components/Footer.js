import React from 'react'
import {connect} from 'react-redux'
import {logout} from '../store'

const Footer = ({isLoggedIn}) => (
  <div>
    {!isLoggedIn ? (
      <footer className="row footer bg-dark text-light mt-1 sticky-bottom">
        <div className="container my-3">
          <div>
            <p className="h1 text-info">
              <span>
                <i className="fab fa-earlybirds fa-sm pr-2 mt-5" />
              </span>
              job bird.
            </p>
          </div>
          <div className="row justify-content-between my-3">
            <div className="col-3">
              <ul className="list-unstyled mb-5">
                <li className="lead">Company</li>
                <li className="text-muted my-3">Privacy policy</li>
                <li className="text-muted">Terms of service</li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="list-unstyled">
                <li className="lead">Product</li>
                <li className="text-muted my-3">For job seekers</li>
                <li className="text-muted">For advisors</li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="list-unstyled">
                <li className="lead">Links</li>
                <li className="text-muted my-3">Log in</li>
                <li className="text-muted">Sign up</li>
              </ul>
            </div>
            <div className="col-3">
              <div className="row text-info">
                <i className="fab fa-facebook-square fa-3x mx-2" />
                <i className="fab fa-twitter-square fa-3x mr-2" />
                <i className="fab fa-linkedin fa-3x" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    ) : (
      <div />
    )}
  </div>
)

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Footer)
