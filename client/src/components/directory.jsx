// COMPONENT - Holds the root directory for files/folders to be served

import React, { Component } from 'react';
import '../styles/directory.css';

class Directory extends Component {
    render() {
        return (
            <div className='container-fluid tab'>
                <span className='navbar-brand tab-brand mt-2'>{this.props.directory}</span>
            </div>
        );
    }
}

export default Directory;