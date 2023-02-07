/*  User should be able to type in any characters on input and those character should show in the browser. */


// this is the code you are given: 

function App() {
  const [] = React.useState("");

  return (
    <>
      <input type="text" placeholder="Enter Text" />
      <p></p>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
