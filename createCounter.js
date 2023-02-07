/**
  Challenge: Pressing `Increment` button should increase the counter count by one. Pressing `Decrement` button should decrease the counter count by one.
  
you are given the following: 
  
**/
const App = () => {
  const [] = React.useState(0);

  return (
    <div>
      <h2>Counter: 0</h2>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
