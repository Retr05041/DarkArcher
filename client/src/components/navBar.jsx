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
                    {/* Brand */}
                    <span className="navbar-brand mb-0 h1 darkarcher-brand">Dark Archer</span>

                    {/* Other content */}
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">

                        {/* Upload form - will be handled by the backend */}
                        <form className='row g-2' method="POST" action="/#">
                            <div class="col-auto">
                                <input className="form-control form-control-sm" type="file" name="inputedFile" enctype="multipart/form-data" required></input>
                            </div>
                            <div class="col-auto">
                                <button className="btn btn-primary me-md-2 upload-btn" type="submit">Upload</button>
                            </div>
                        </form>

                        {/* Logout button */}
                        <button class="btn btn-primary logout-btn" type="button">Logout</button>
                    </div>

                </div>
            </nav>
        );
    }
}

export default NavBar;