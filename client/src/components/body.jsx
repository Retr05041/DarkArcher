// COMPONENT - Displays the files of a 'given' directory

import React, { Component } from 'react';

class Body extends Component {
    state = {}
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <a href="/data/<%= file %>" download>
                            <button className="btn btn-outline-success">Download</button>
                        </a>
                    </div>
                </div>
            </div>
        );
    };
};

export default Body;