/* 
React + Javascript, Interview Exercise
Work only in StartFile.js component
Instructions: Fork this codepen and modify it per the instructions below. You should complete this exercise within 24 hours and email a link to your final codepen to the interviewer.

There are 2 components in this application: Counter and App. The steps below will take you through modifying and adding components to change functionality and implementation.

Update the Counter component to take onIncrement and onDecrement callbacks as props and ensure they update the counter's values independently. Each callback should take a single, integer value as a parameter which is the amount to increment the counter's existing value by.
Move the global data array to the component state for the App component.
Render a fourth Counter component and ensure it's value is updated independently from the others.
Create a Total component, which should display below the Counter components and always display the running total of all the Counter values.
Make a copy of the Counter component, saving the original so you're instructor can view it later. Then do the following :
remove the onIncrement and onDecrement props from the (new) Counter component
add a single onChange callback prop that takes a single integer parameter — the new value for the counter.
Ensure all Counter components still update and function independently after this change.
*/




import React, { Component } from "react";
import { Button } from "react-bootstrap";

// state data for 3 counters
const data = [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }];

// Counter Component
class Counter extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className="counter">
        <b>{value}</b>
        <div className="counter-controls">
          <Button variant="danger" className="mr-2">
            -
          </Button>
          <Button variant="success" className="mr-2">
            +
          </Button>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    const [counter, setCounter]

    return (

      <div>
        {data.map(counter => (
          <Counter key={counter.id} value={counter.value} />
        ))}
      </div>
    );
  }
}
export default App;

