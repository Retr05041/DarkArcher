// COMPONENT - Displays the files of a 'given' directory

import React, { Component } from 'react';
import '../styles/body.css';

class Body extends Component {
    state = {
        fileNames: [],
    };

    componentDidMount() {
        this._asyncRequest = fetch('/api/files')
            .then((response) => response.json())
            .then((data) => this.setState({ fileNames: data }));
    };

    renderFiles() {
        if (this.state.fileNames.length === 0) return <p className='h2 text-center text-orangered'>There are no files!</p>

        return <ul>{this.state.fileNames.map(fileNames => <li key={fileNames}><a href={"storage/" + fileNames} download>{fileNames}</a></li>)}</ul>
    };

    render() {
        return (
            <div className='container-fluid file-list'>
                {this.renderFiles()}
            </div>
        );
    };
};

export default Body;