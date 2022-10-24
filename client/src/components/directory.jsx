// COMPONENT - Holds the root directory for files/folders to be served

import React, { Component } from 'react';
import '../styles/directory.css';

class Directory extends Component {
    render() {
        return (
            <div className='container-fluid directory-tab'>
                <span className='navbar-brand directory-brand'>Directory: <span className='badge bg-secondary'>{this.props.directory}</span></span>
            </div>
        );
    }
}

export default Directory;