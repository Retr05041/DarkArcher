// ROOT COMPONENT

import React, { Component } from 'react';
import Counters from './components/counters'; // Imported my first custom component 'Counter'
import NavBar from './components/navBar'; // Imported my first custom component 'Counter'
import './styles/App.css';

class App extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className='container-fluid tab-height tab-bar'>
                    <button class="btn btn-primary btn-lg rounded-0" type="button">Directory: Root</button>
                </div>
                <main className='container-fluid height-full file-body'>
                    <div className='container-fluid'>
                        <Counters />
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default App;