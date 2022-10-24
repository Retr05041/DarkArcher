// ROOT COMPONENT

import React, { Component } from 'react';
import NavBar from './components/navBar'; // Imported Navbar
import Directory from './components/directory'; // Imported Directory
import Counters from './components/counters'; // Imported my first custom component 'Counter'
import './styles/App.css';

class App extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>

                {/* Narbar Component */}
                <NavBar />

                {/* Directory / Folder tabs */}
                <div className='container-fluid tab-height tab-bar'>
                    {/* Gives directory tab before the given folders */}
                    <div className='directory-tab'>
                        <Directory directory='root' /> {/* Hard coding root for the time being */}
                    </div>
                </div>

                {/* File body - where all the files of a given tab will show */}
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