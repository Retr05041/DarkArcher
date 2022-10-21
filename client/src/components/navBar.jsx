// COMPONENT

import React, { Component } from 'react';

class NavBar extends Component {
    state = {  };
    render() { 
        return (
            <nav className='navbar navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <span class="navbar-brand mb-0 h1">Dark Archer</span>
                </div>
            </nav>
        );
    }
}
 
export default NavBar;