// COMPONENT

import React, { Component } from 'react';
import '../styles/navBar.css';

class NavBar extends Component {
    state = {  };

    styles = { 
        
    };
    render() { 
        return (
            <nav className='navbar navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <span className="navbar-brand mb-0 h1">Dark Archer</span>

                </div>
            </nav>
        );
    }
}
 
export default NavBar;