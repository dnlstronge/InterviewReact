/* Clicking the button should hide the string 
*/
import React, {useState} from "react"


const App = () => {


    const [hide, setHide] = useState(true)
    const handleClick = () => {
        hide ? setHide(false) : setHide(true)
    }

    return (
        <div>
            <button onClick={handleClick}>Click to hide</button>
            {hide &&
            <p>HIDE ME</p>}
        </div>
    )
}

export default App;
