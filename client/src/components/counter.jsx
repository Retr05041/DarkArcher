// COMPONENT

// 'imrc' - to react component
import React, { Component } from 'react';

// 'cc' - Class component
class Counter extends Component {
    render() { 
        return (
            <React.Fragment>
                <h1>Hello World.</h1>
                <button>Increment</button>
            </React.Fragment>
        ); // Wrap in a div tag so React.createElement('div') occurs and an error isnt thrown - we change 'div' to 'React.Fragment' so it uses the 'root' div already made
    }
}
 
export default Counter; // So it's able to be imported by other js files