// COMPONENT - Renders multiple 'counter' components

import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
     };

    render() { 
        return ( 
            <div>
                <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {/* NOTE 'key' is used by React, we will not be able to use it as a prop */}
                { this.state.counters.map(counter => <Counter key={counter.id} counter={counter} onDelete={this.handleDelete}/>) }
            </div> 
        );
    }

    handleDelete = counterID => { // Since this component holds a list of counter components, we will want to delete them here using an event handler
        const countersLeft = this.state.counters.filter(c => c.id !== counterID);
        this.setState({counters: countersLeft});
    };

    handleReset = () => {
        const newCounters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({newCounters});
    };
}
 
export default Counters;