import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css'

class NavBar extends Component {

    render() {
        return (
            <div id="navtop">
                <div className="navbar navbar-expand-md navbar-dark bg-dark navbar-static-top" >
                    <a className="navbar-brand" href="#">Navigation</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <li className="nav-item active">
                            <NavLink className="nav-link navlink-color" to="/">Home</NavLink>
                        </li>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;