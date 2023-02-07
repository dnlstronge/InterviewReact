/**
  Challenge: Pressing `Increment` button should increase the counter count by one. Pressing `Decrement` button should decrease the counter count by one.
  
you are given the following: 
  
**/
const App = () => {
    const [counter, setCounter] = React.useState(0);

    const handle_up = () =>  {
      setCounter( prev => prev +1)
    }

    const handle_down = () => {
      setCounter( prev => prev -1)
    }
  return (
    <div>
      <h2>Counter: {counter} </h2>
      <button onClick={handle_up}>Increment</button>
      <button onClick={handle_down}>Decrement</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
