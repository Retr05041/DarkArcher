// ROOT COMPONENT

import React, { Component } from 'react';
import Counters from './components/counters'; // Imported my first custom component 'Counter'
import NavBar from './components/navBar'; // Imported my first custom component 'Counter'

class App extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <main className='container-fluid'>
                    <Counters />
                </main>
            </React.Fragment>
        );
    }
}

export default App;