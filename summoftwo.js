/** 
  Challenge: Make this app work like a calculator that can add two numbers.
  
  Functionality: When user place numbers on first and second input and hit the button. The sum should appear on the `Total: ` as an output. 
  
you are given the following code: 
**/
function App() {
  const [number1, setNumber1] = React.useState();
  const [number2, setNumber2] = React.useState();
  const [total, setTotal] = React.useState(0);

  const handleNumber1 = (e) => {
    setNumber1(e.target.value)
  }
  const handleNumber2 = (e) => {
    setNumber2(e.target.value)
  }
  const handleClick = () => {
    let sum = parseInt(number1) + parseInt(number2)
   setTotal(sum)
  }
  
  return (
    <div>
      <h2>Adding Two Numbers</h2>
      <input onChange={handleNumber1} placeholder="First Number" type="number" />
      <input onChange={handleNumber2} placeholder="Second Number" type="number" />
      <button onClick={handleClick}>Add Two Numbers</button>
      <p>Total: {total} </p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
