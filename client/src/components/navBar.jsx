// COMPONENT - Navbar

import React, { Component } from 'react';
import '../styles/navBar.css';

class NavBar extends Component {
    state = {};

    styles = {

    };
    render() {
        return (
            <nav className='navbar navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <span className="navbar-brand mb-0 h1 darkarcher-brand">Dark Archer</span>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-primary me-md-2 upload-btn" type="button" upload>Upload</button>
                        <button class="btn btn-primary logout-btn" type="button">Logout</button>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;