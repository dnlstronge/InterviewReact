/*  User should be able to type in any characters on input and those character should show in the browser. */


// this is the code you are given: 


function App() {
  const [ text, setText ] = React.useState("");
  const handleInput = (e) => {
    setText(e.target.value)
  }
  return (
    <>
      <input value={text} onChange={handleInput} type="text" placeholder="Enter Text" />
      <p>{text}</p>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));


// although I would have wrote it all like this: 

import { useState } from "react"

const App = () => {
  const [ text, setText ] = useState("")
  const handleInput = (e) => {
    setText(e.target.value}  
  }
  return (
    <>
       <input value={text} onChange={handleInput} type="text" placeholder="Enter Text"/>
       <p>{text}</p>
    </>
    )}
}

export default App;
