import React from 'react';
import PropTypes from 'prop-types';
export default function Navbar(props) {
  return (
    <div>
        <div className="container">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand" href="/">{props.title}</a>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.about}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
}

Navbar.defaultProps = {
    title: 'set title',
    about: 'set about title'
  };