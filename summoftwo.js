/** 
  Challenge: Make this app work like a calculator that can add two numbers.
  
  Functionality: When user place numbers on first and second input and hit the button. The sum should appear on the `Total: ` as an output. 
  
  Solution: https://codepen.io/angelo_jin/pen/BawrWzy
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
function App() {
  const [number1, setNumber1] = React.useState();
  const [number2, setNumber2] = React.useState();
  const [total, setTotal] = React.useState(0);

  return (
    <div>
      <h2>Adding Two Numbers</h2>
      <input placeholder="First Number" type="number" />
      <input placeholder="Second Number" type="number" />

      <button>Add Two Numbers</button>
      <p>Total:</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
