// CONTROLLED COMPONENT (counters) - A dumby counter, for practice - a controlled component doesnt have its own state, and gets everything from props, and raises events when anything needs to be changed

// 'imrc' - to react component
import React, { Component } from 'react';

// 'cc' - Class component
class Counter extends Component {
    // Anything inside of {} is JS - we can call our function 'formatCount()' to get the formatted count

    // We deleted this because we want 'one source of truth' AKA we will get our info from our 'counters' component, since this one is controlled
    // state = { // An object that includes any data that this component needs
    //     value: this.props.counter.value, // whe set 'count' equal to 'this.props.counter.value' - so when we init a new counter component, the int given for the value prop will be used
    // }; 

    render() { // Render method is the method that is shown to the world
        // console.log(this.props); // When calling a component with special keywords, like 'value' (as seen in 'counters.jsx') this will give us
        // new properties, note, 'key' is prebuilt, meaning it wont be sent through

        return (
            <div>
                <span className={this.getCounterClasses()}> {/* we set the 'className to our classes variable we made above */}
                    {this.formatCount()}
                </span> {/* class == className - as this is turned into JS, 'class' is a reserved name, so we use 'className' for bootstrap */}
                <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        ); // Wrap in a div tag so React.createElement('div') occurs and an error isnt thrown - we change 'div' to 'React.Fragment' so it uses the 'root' div already made
    }

    // HELPER METHODS
    getCounterClasses() { // To set our badges boostrap classes - This ISNT an event handler, as its called once, and not after an event
        let classes = "badge m-2 text-bg-"; // since we want our 'zero' to be yellow, and anything else to be blue, we can se this variable here to hold our style
        classes += (this.props.counter.value === 0) ? "warning" : "primary"; // Then we can append either 'warning' or 'primary' depending on if 'count' is equal to 0 or not
        return classes;
    }

    formatCount() { // formatCount method formats the count for us - This ISNT an event handler, as its called once, and not after an event
        const { value: count } = this.props.counter; // set 'count' to a constant so we dont have to keep typing this.props.counter
        return count === 0 ? 'Zero' : count; // Returns the count, if its equal to zero, return the word 'Zero'
    }
}
 
export default Counter; // So it's able to be imported by other js files - cam ne written on class creation but its cleaner this way