import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    let {toggleMode} = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark fixed-top nav-height">
          <div className="container-fluid">
            <Link className="navbar-brand" href="#">Daily Spark</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/Home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business"> business</Link></li>

                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment"> entertainment</Link></li>

                <li className="nav-item">
                  <Link className="nav-link" to="/general"> general</Link></li>

                <li className="nav-item">
                  <Link className="nav-link" to="/health"> health</Link></li>

                <li className="nav-item">
                  <Link className="nav-link" to="/science"> science</Link></li>

                <li className="nav-item">
                  <Link className="nav-link" to="/sports"> sports</Link></li>

                <li className="nav-item">
                  <Link className="nav-link" to="/technology"> technology</Link></li>

                <li className="nav-item">
                  <Link className="nav-link" to="/AboutUs">About Us</Link></li>
              </ul>

            </div>
            <div>
              <label className="switch-button" htmlFor="switch">
                <div className="switch-outer">
                  <input id="switch" type="checkbox" onClick={toggleMode} />
                  <div className="button">
                    <span className="button-toggle"></span>
                    <span className="button-indicator"></span>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </nav>

      </div>
    )
  }
}

export default Navbar
