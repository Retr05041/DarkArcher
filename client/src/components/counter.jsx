// COMPONENT

// 'imrc' - to react component
import React, { Component } from 'react';

// 'cc' - Class component
class Counter extends Component {
    // Anything inside of {} is JS - we can call our function 'formatCount()' to get the formatted count

    state = { // An object that includes any data that this component needs
        count: 0,
    }; 

    render() { // Render method is the method that is shown to the world
        return (
            <React.Fragment>
                <span className='badge bg-primary m-2'>
                    {this.formatCount()}
                </span> {/* class == className - as this is turned into JS, 'class' is a reserved name, so we use 'className' for bootstrap */}
                <button className='btn btn-secondary btn-sm'>Increment</button>
            </React.Fragment>
        ); // Wrap in a div tag so React.createElement('div') occurs and an error isnt thrown - we change 'div' to 'React.Fragment' so it uses the 'root' div already made
    }

    formatCount() { // formatCount method formats the count for us
        const { count } = this.state; // set 'count' to a constant so we dont have to keep typing this.state
        return count === 0 ? 'Zero' : count; // Returns the count, if its equal to zero, return the word 'Zero'
    }
}
 
export default Counter; // So it's able to be imported by other js files - cam ne written on class creation but its cleaner this way